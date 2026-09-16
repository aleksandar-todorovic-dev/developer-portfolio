import { getRouteMetadata } from "./getRouteMetadata";

const metadataOrigin = new URL(
  import.meta.env.VITE_SITE_URL ||
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ||
    window.location.origin,
).origin;

function setMeta(
  attribute: "name" | "property",
  key: string,
  content?: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!content) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export function updateDocumentMetadata(pathname: string) {
  const metadata = getRouteMetadata(pathname);
  document.title = metadata.title;
  setMeta("name", "description", metadata.description);
  setMeta(
    "name",
    "robots",
    metadata.notFound ? "noindex, follow" : "index, follow",
  );
  setMeta("property", "og:type", "website");
  setMeta("property", "og:title", metadata.title);
  setMeta("property", "og:description", metadata.description);
  setMeta(
    "property",
    "og:image",
    metadata.image
      ? new URL(metadata.image, metadataOrigin).href
      : undefined,
  );
  setMeta("property", "og:image:alt", metadata.imageAlt);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", metadata.title);
  setMeta("name", "twitter:description", metadata.description);
  setMeta(
    "name",
    "twitter:image",
    metadata.image
      ? new URL(metadata.image, metadataOrigin).href
      : undefined,
  );
  setMeta("name", "twitter:image:alt", metadata.imageAlt);
  setMeta(
    "property",
    "og:url",
    metadata.notFound
      ? undefined
      : new URL(metadata.path, metadataOrigin).href,
  );
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (metadata.notFound) canonical?.remove();
  else {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = new URL(metadata.path, metadataOrigin).href;
  }
}
