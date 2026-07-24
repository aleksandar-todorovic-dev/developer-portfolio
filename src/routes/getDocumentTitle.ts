import { getProjectBySlug } from "../utils/getProjectBySlug";

const SITE_NAME = "Aleksandar Todorovic";

function decodePathname(pathname: string): string {
  try {
    return pathname
      .split("/")
      .map((segment) =>
        decodeURIComponent(segment).replace(/\//g, "%2F"),
      )
      .join("/");
  } catch {
    return pathname;
  }
}

function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/";
}

export function getDocumentTitle(pathname: string): string {
  const normalizedPathname = normalizePathname(decodePathname(pathname));

  switch (normalizedPathname.toLowerCase()) {
    case "/":
      return `${SITE_NAME} — Frontend Developer`;

    case "/projects":
      return `Projects | ${SITE_NAME}`;

    case "/about":
      return `About | ${SITE_NAME}`;

    case "/contact":
      return `Contact | ${SITE_NAME}`;
  }

  const projectRouteMatch = normalizedPathname.match(
    /^\/projects\/([^/]+)$/i,
  );

  if (projectRouteMatch) {
    const [, encodedSlug] = projectRouteMatch;
    const slug = encodedSlug.replace(/%2F/g, "/");
    const project = getProjectBySlug(slug);

    return project
      ? `${project.title} | ${SITE_NAME}`
      : `Project Not Found | ${SITE_NAME}`;
  }

  return `Page Not Found | ${SITE_NAME}`;
}
