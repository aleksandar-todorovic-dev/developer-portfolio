import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { RouteBehavior } from "./RouteBehavior";

import { PageShell } from "../components/layout/PageShell";

const AboutPage = lazy(() =>
  import("../pages/AboutPage").then(({ AboutPage }) => ({
    default: AboutPage,
  })),
);
const ContactPage = lazy(() =>
  import("../pages/ContactPage").then(({ ContactPage }) => ({
    default: ContactPage,
  })),
);
const HomePage = lazy(() =>
  import("../pages/HomePage").then(({ HomePage }) => ({
    default: HomePage,
  })),
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  })),
);
const ProjectDetailPage = lazy(() =>
  import("../pages/ProjectDetailPage").then(({ ProjectDetailPage }) => ({
    default: ProjectDetailPage,
  })),
);
const ProjectsPage = lazy(() =>
  import("../pages/ProjectsPage").then(({ ProjectsPage }) => ({
    default: ProjectsPage,
  })),
);

export function AppRouter() {
  return (
    <BrowserRouter>
      <RouteBehavior />
      <PageShell>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageShell>
    </BrowserRouter>
  );
}
