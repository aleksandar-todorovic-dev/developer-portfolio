import { getProjectBySlug } from "../utils/getProjectBySlug";

const SITE_NAME = "Aleksandar Todorovic";

function normalizePathname(pathname: string): string {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

export function getDocumentTitle(pathname: string): string {
  const normalizedPathname = normalizePathname(pathname);

  switch (normalizedPathname) {
    case "/":
      return `${SITE_NAME} — Frontend Developer`;

    case "/projects":
      return `Projects | ${SITE_NAME}`;

    case "/about":
      return `About | ${SITE_NAME}`;

    case "/contact":
      return `Contact | ${SITE_NAME}`;
  }

  const projectRouteMatch = normalizedPathname.match(/^\/projects\/([^/]+)$/);

  if (projectRouteMatch) {
    const [, slug] = projectRouteMatch;
    const project = getProjectBySlug(slug);

    return project
      ? `${project.title} | ${SITE_NAME}`
      : `Project Not Found | ${SITE_NAME}`;
  }

  return `Page Not Found | ${SITE_NAME}`;
}
