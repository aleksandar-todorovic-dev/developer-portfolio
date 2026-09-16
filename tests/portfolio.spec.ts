import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/projects",
  "/projects/liferecompiled",
  "/projects/training-app",
  "/projects/taskflow",
  "/about",
  "/contact",
  "/missing",
  "/projects/missing",
];
const widths = [320, 375, 390, 430, 768, 1024, 1440];

for (const route of routes) {
  test(`${route} renders without overflow at every required width`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(route);
    await expect(page.locator("h1#page-heading")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveAttribute("tabindex", "-1");
    for (const width of widths) {
      await page.setViewportSize({ width, height: width === 768 ? 1024 : 900 });
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(
        () =>
          new Promise<void>((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
          ),
      );
      const overflow = await page.evaluate(() => {
        const limit = document.documentElement.clientWidth;
        const outside = [
          ...document.querySelectorAll("h1,h2,h3,main p,main button,main a"),
        ]
          .filter((element) => {
            if (
              element.closest('[aria-hidden="true"]') ||
              element.classList.contains("sr-only")
            )
              return false;
            const range = document.createRange();
            range.selectNodeContents(element);
            const rect = element.matches("h1,h2,h3")
              ? range.getBoundingClientRect()
              : element.getBoundingClientRect();
            return rect.width > 0 && (rect.left < -1 || rect.right > limit + 1);
          })
          .map((element) => element.textContent?.slice(0, 100));
        return {
          document: document.documentElement.scrollWidth > limit + 1,
          outside,
        };
      });
      expect(overflow, `${route} at ${width}px`).toEqual({
        document: false,
        outside: [],
      });
    }
    const brokenImages = await page
      .locator("img")
      .evaluateAll(async (images) => {
        images.forEach((image) => {
          image.loading = "eager";
        });
        await Promise.all(
          images.map((image) => image.decode().catch(() => undefined)),
        );
        return images
          .filter((image) => !image.naturalWidth)
          .map((image) => image.src);
      });
    expect(brokenImages).toEqual([]);
    expect(errors).toEqual([]);
  });

  test(`${route} passes automated accessibility checks`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    // Reveal finite authored scenes before inspecting their settled colors.
    for (const section of await page
      .locator("main section,main article")
      .all()) {
      await section.scrollIntoViewIfNeeded();
    }
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test("tablet Hero is content-driven and desktop keeps the viewport composition", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  expect(
    (await page.locator(".authored-hero").boundingBox())!.height,
  ).toBeLessThan(750);
  await page.setViewportSize({ width: 1440, height: 1000 });
  expect(
    (await page.locator(".authored-hero").boundingBox())!.height,
  ).toBeGreaterThanOrEqual(915);
});

test("initial loads preserve focus unless a valid hash is provided", async ({
  page,
}) => {
  for (const route of ["/", "/about", "/#does-not-exist", "/#%E0%A4%A"]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("body")).toBeFocused();
  }
  await page.goto("/projects/liferecompiled#resilient-saved-posts");
  await expect(page.locator("#resilient-saved-posts")).toBeFocused();
  const box = await page.locator("#resilient-saved-posts").boundingBox();
  expect(box!.y).toBeGreaterThanOrEqual(84);
  expect(box!.y).toBeLessThan(120);
});

test("cold lazy navigation scrolls to the top and focuses the semantic heading", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.route("**/assets/AboutPage-*.js", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page.locator("h1")).toContainText(
    "Frontend is a change of direction",
  );
  await expect(page.locator("h1")).toBeFocused();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test("Home project anchors use route navigation, and Back/Forward preserve browser restoration", async ({
  page,
}) => {
  await page.goto("/");
  const work = page.getByRole("navigation", {
    name: "Selected projects",
    exact: true,
  });
  await work.getByRole("link", { name: /TaskFlow/ }).click();
  await expect(page).toHaveURL(/#project-taskflow$/);
  await expect(page.locator("#project-taskflow")).toBeFocused();
  const oldPosition = await page.evaluate(() => window.scrollY);
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page.locator("h1")).toBeFocused();
  await page.goBack();
  await expect(page).toHaveURL(/#project-taskflow$/);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeCloseTo(oldPosition, -1);
  await page.goForward();
  await expect(page).toHaveURL(/\/about$/);
  expect(await page.evaluate(() => history.scrollRestoration)).toBe("auto");
});

test("case-study index focuses the selected section below the sticky header", async ({
  page,
}) => {
  await page.goto("/projects/taskflow");
  await page
    .getByRole("navigation", { name: "On this page", exact: true })
    .getByRole("link", { name: "Drag-and-drop state updates" })
    .click();
  await expect(page.locator("#drag-and-drop-state-updates")).toBeFocused();
  expect(
    (await page.locator("#drag-and-drop-state-updates").boundingBox())!.y,
  ).toBeGreaterThanOrEqual(84);
});

test("mobile menu traps focus, closes with Escape and restores focus and scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const button = page.getByRole("button", { name: "Open navigation menu" });
  await button.click();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  const close = page.getByRole("button", { name: "Close navigation menu" });
  await page.keyboard.press("Shift+Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation", exact: true })
      .getByRole("link", { name: "Send an email" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(axe.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(button).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await button.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation", exact: true })
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(page.locator("#mobile-navigation")).toHaveCount(0);
  await expect(page.locator("h1")).toBeFocused();
});

test("screenshot tabs activate manually and the lightbox restores focus", async ({
  page,
}) => {
  await page.goto("/projects/liferecompiled");
  const tabs = page.getByRole("tab");
  await tabs.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.first()).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Enter");
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await expect(tabs.nth(1)).toBeFocused();
  await page.keyboard.press("End");
  await expect(tabs.last()).toBeFocused();
  await page.keyboard.press("Home");
  await page.keyboard.press("Space");
  await expect(tabs.first()).toHaveAttribute("aria-selected", "true");
  const imageTrigger = page.getByRole("button", {
    name: "Open full image",
    exact: true,
  });
  await imageTrigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("button", { name: /Close/ })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: /Close/ })).toBeFocused();
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(imageTrigger).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("portrait screenshot tabs support vertical keyboard navigation", async ({
  page,
}) => {
  await page.goto("/projects/training-app");
  const tabs = page.getByRole("tab");
  await expect(page.getByRole("tablist")).toHaveAttribute(
    "aria-orientation",
    "vertical",
  );
  await tabs.first().focus();
  await page.keyboard.press("ArrowDown");
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.first()).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Space");
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByRole("tablist")).toHaveAttribute(
    "aria-orientation",
    "horizontal",
  );
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(2)).toBeFocused();
});

test("blocked image popup falls back to the same-tab natural image", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/projects/taskflow");
  await page.evaluate(() => {
    window.open = () => null;
  });
  await page
    .getByRole("button", { name: /Open full image/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/images\/projects\/taskflow\/board.png$/);
});

test("Contact copies the email and provides a selection fallback", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/contact");
  await page.getByRole("button", { name: /Copy email address/ }).click();
  await expect(page.getByRole("status")).toHaveText("Email address copied.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "aleksandar.todorovic.rs@gmail.com",
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () => Promise.reject(new Error("Clipboard unavailable")),
    });
  });
  await page.getByRole("button", { name: /Copy email address/ }).click();
  await expect(page.getByRole("status")).toContainText(
    "The address is selected",
  );
  expect(await page.evaluate(() => window.getSelection()?.toString())).toBe(
    "aleksandar.todorovic.rs@gmail.com",
  );
});

test("CV downloads as a PDF and email is a direct mailto action", async ({
  page,
}) => {
  await page.goto("/contact");
  await expect(
    page.getByRole("link", { name: /aleksandar.todorovic.rs@gmail.com/ }),
  ).toHaveAttribute("href", "mailto:aleksandar.todorovic.rs@gmail.com");
  const download = page.waitForEvent("download");
  await page
    .getByRole("navigation", { name: "Professional links" })
    .getByRole("link", { name: /Download CV/ })
    .click();
  expect((await download).suggestedFilename()).toBe(
    "Aleksandar_Todorovic_CV.pdf",
  );
  const response = await page.request.get("/Aleksandar_Todorovic_CV.pdf");
  expect(response.ok()).toBeTruthy();
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("Hero motion is finite, replays on refresh and does not replay on internal return", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator(".authored-hero--active")).toBeVisible();
  await expect(page.locator(".authored-hero--active")).toHaveCount(0);
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page.locator("h1")).toContainText("Frontend is a change");
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Home", exact: true })
    .click();
  await expect(page.locator(".authored-hero")).toBeVisible();
  await expect(page.locator(".authored-hero--active")).toHaveCount(0);
  await page.reload();
  await expect(page.locator(".authored-hero--active")).toBeVisible();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".authored-hero--active")).toHaveCount(0);
});

test("route metadata matches the page on direct and internal navigation", async ({
  page,
}) => {
  for (const [route, title, image] of [
    ["/", "Aleksandar Todorovic — Frontend Developer", "/social-preview.png"],
    [
      "/projects/liferecompiled",
      "LifeRecompiled | Aleksandar Todorovic",
      "/images/projects/liferecompiled/home-feed.png",
    ],
    [
      "/projects/training-app",
      "Training App | Aleksandar Todorovic",
      "/images/projects/training-app/cycle.png",
    ],
    [
      "/projects/taskflow",
      "TaskFlow | Aleksandar Todorovic",
      "/images/projects/taskflow/board.png",
    ],
  ]) {
    const response = await page.goto(route);
    expect(await response!.text()).toContain(`<title>${title}</title>`);
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      title,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      new RegExp(image.replaceAll(".", "\\.") + "$"),
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      new RegExp(image.replaceAll(".", "\\.") + "$"),
    );
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  }
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(page).toHaveTitle("Contact | Aleksandar Todorovic");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Contact Aleksandar/,
  );
  await page.goto("/projects/missing");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(0);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  const homeUrl = new URL("/", page.url()).href;
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Home", exact: true })
    .click();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    homeUrl,
  );
});

test("mobile menu releases its scroll lock when resized to desktop", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation", exact: true })
    .getByRole("link", { name: "Projects", exact: true })
    .focus();
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(page.locator("#mobile-navigation")).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation", exact: true })
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
});

test("skip link moves keyboard focus directly to main content", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("reflow at 200 percent desktop zoom keeps every route usable", async ({
  page,
}) => {
  // 1440 physical pixels / 2 = a 720 CSS-pixel layout viewport.
  await page.setViewportSize({ width: 720, height: 500 });
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth + 1,
      ),
      route,
    ).toBeTruthy();
    await expect(
      page.getByRole("button", { name: "Open navigation menu" }),
    ).toBeVisible();
  }
});
