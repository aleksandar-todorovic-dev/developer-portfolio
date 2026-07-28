const screenshotDimensions: Record<
  string,
  { width: number; height: number }
> = {
  "/images/projects/liferecompiled/dashboard-stats.png": {
    width: 1907,
    height: 940,
  },
  "/images/projects/liferecompiled/home-feed.png": {
    width: 1907,
    height: 940,
  },
  "/images/projects/liferecompiled/mobile-comments.png": {
    width: 1170,
    height: 2532,
  },
  "/images/projects/liferecompiled/post-detail.png": {
    width: 1907,
    height: 940,
  },
  "/images/projects/liferecompiled/saved-posts.png": {
    width: 1907,
    height: 940,
  },
  "/images/projects/liferecompiled/trash.png": {
    width: 1907,
    height: 940,
  },
  "/images/projects/taskflow/board.png": {
    width: 2880,
    height: 1800,
  },
  "/images/projects/taskflow/card-drag.png": {
    width: 1300,
    height: 843,
  },
  "/images/projects/taskflow/mobile.png": {
    width: 1170,
    height: 2532,
  },
  "/images/projects/training-app/core.png": {
    width: 1170,
    height: 2532,
  },
  "/images/projects/training-app/cycle.png": {
    width: 1170,
    height: 2532,
  },
  "/images/projects/training-app/exercise.png": {
    width: 1170,
    height: 2532,
  },
  "/images/projects/training-app/guide.png": {
    width: 1170,
    height: 2532,
  },
  "/images/projects/training-app/partial-day.png": {
    width: 1170,
    height: 2532,
  },
};

export function getProjectScreenshotDimensions(src: string) {
  return screenshotDimensions[src];
}
