import { getRouteMetadata } from "./getRouteMetadata";

export function getDocumentTitle(pathname: string): string {
  return getRouteMetadata(pathname).title;
}
