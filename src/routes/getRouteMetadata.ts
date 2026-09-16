import { projects } from "../data/projects.ts";

const SITE_NAME = "Aleksandar Todorovic";
const siteDescription =
  "Frontend developer in Kragujevac, Serbia. React, TypeScript and Firebase work shown through three live projects and their case studies.";

export function getRouteMetadata(pathname: string) {
  let path = pathname;
  try {
    path = pathname
      .split("/")
      .map((segment) => decodeURIComponent(segment).replace(/\//g, "%2F"))
      .join("/");
  } catch {
    // Preserve malformed paths so they resolve to the same not-found state.
  }
  path = path.replace(/\/+$/, "") || "/";
  const pages: Record<string, { title: string; description: string }> = {
    "/": {
      title: `${SITE_NAME} — Frontend Developer`,
      description: siteDescription,
    },
    "/projects": {
      title: `Projects | ${SITE_NAME}`,
      description:
        "Three frontend projects showing engineering depth, product thinking and practical React + TypeScript work through real interfaces, case studies and source code.",
    },
    "/about": {
      title: `About | ${SITE_NAME}`,
      description:
        "Frontend is a change of direction, not a clean restart. Aleksandar's path from IT support and operational responsibility to independent React and TypeScript projects.",
    },
    "/contact": {
      title: `Contact | ${SITE_NAME}`,
      description:
        "Contact Aleksandar Todorovic about frontend roles and clearly scoped web projects. Based in Kragujevac, Serbia and open to remote work.",
    },
  };
  const page = pages[path.toLowerCase()];
  if (page)
    return {
      ...page,
      path: path.toLowerCase(),
      image: "/social-preview.png",
      imageAlt: "Aleksandar Todorovic — I build frontend that resolves.",
      notFound: false,
    };
  const match = path.match(/^\/projects\/([^/]+)$/i);
  const project = match
    ? projects.find((item) => item.slug === match[1].replace(/%2F/g, "/"))
    : undefined;
  if (project)
    return {
      title: `${project.title} | ${SITE_NAME}`,
      description: project.shortDescription,
      path: `/projects/${project.slug}`,
      image: project.screenshots[0]?.src,
      imageAlt: project.screenshots[0]?.alt,
      notFound: false,
    };
  return {
    title: `${match ? "Project" : "Page"} Not Found | ${SITE_NAME}`,
    description:
      "This address is unavailable. Visit the projects page to explore Aleksandar Todorovic's frontend work.",
    path,
    image: undefined,
    imageAlt: undefined,
    notFound: true,
  };
}
