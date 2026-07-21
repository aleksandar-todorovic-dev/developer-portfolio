import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "liferecompiled",
    title: "LifeRecompiled",
    shortDescription:
      "A production-style React and Firebase engineering case study built around a community/blog app surface.",
    category: "firebase-engineering",
    proofLabel: "Firebase engineering",
    proofSummary:
      "Demonstrates authentication, Firestore data modeling, Cloud Functions, protected routes, resilient UX flows, and honest backend tradeoffs.",
    keyDecision:
      "Used Cloud Functions for higher-risk operations such as aggregate maintenance, privileged deletion, and scheduled cleanup.",
    tradeoff:
      "Some MVP policies still remain UI-level and would need stricter backend enforcement before a real production release.",
    evidence: [
      {
        label: "Backend correctness",
        detail:
          "Cloud Functions maintain reaction aggregates, privileged deletion flows, and scheduled cleanup.",
      },
      {
        label: "Resilient saved posts",
        detail:
          "Snapshot metadata, ghost cards, and Undo behavior keep saved content useful when source posts change.",
      },
    ],
    techStack: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "live",
        label: "Live project",
        href: "https://liferecompiled.com",
      },
      {
        type: "github",
        label: "GitHub repository",
        href: "https://github.com/aleksandar-todorovic-dev/liferecompiled",
      },
    ],
    caseStudySections: [
      {
        id: "overview",
        type: "overview",
        title: "What this project is",
        paragraphs: [
          "LifeRecompiled is a production-style React and Firebase engineering case study built around a community and blog application surface.",
          "The project combines authentication, posts, comments, reactions, saved content, profiles, dashboards, moderation, reporting, and deletion lifecycles inside one connected application.",
        ],
      },
      {
        id: "role-and-scope",
        type: "role-scope",
        title: "My role and project scope",
        paragraphs: [
          "I designed and implemented the frontend architecture, Firebase data flows, protected routes, dashboard experiences, interaction systems, and several serverless backend operations.",
          "The project was built as an engineering case study rather than a commercial social platform, with backend correctness concentrated on the highest-risk flows and known MVP limitations documented openly.",
        ],
        bullets: [
          "React application architecture",
          "Firebase Authentication flows",
          "Firestore data modeling",
          "Cloud Functions v2",
          "Protected routes and dashboards",
          "Moderation and reporting surfaces",
          "Responsive user-facing interface",
          "Deployment, validation, and documentation",
        ],
      },
      {
        id: "application-architecture",
        type: "architecture",
        title: "Application and data architecture",
        paragraphs: [
          "The application combines a React frontend with Firebase Authentication, Cloud Firestore, Cloud Functions, and route-level access control.",
          "Data is separated according to its purpose and access requirements, including public application content, private user data, reporting surfaces, and internal correctness records that are not directly available to clients.",
        ],
        bullets: [
          "Firebase Authentication and account state",
          "Protected and role-aware routes",
          "Firestore collections for public application content",
          "Private saved-content subcollections",
          "Internal correctness and event-processing records",
          "Cloud Functions for privileged and scheduled operations",
          "Service layers, mappers, and normalized UI data",
        ],
      },
      {
        id: "backend-boundary-decision",
        type: "decision",
        title: "Where backend authority mattered most",
        paragraphs: [
          "The central engineering decision was not to move every operation to the backend, but to identify which flows carried the greatest correctness, privilege, or retry risk.",
          "Cloud Functions were used for higher-risk operations such as reaction aggregates, privileged deletion, statistics, badges, and scheduled cleanup, while simpler MVP interactions remained client-driven where the risk was lower.",
        ],
        bullets: [
          "Protect privileged deletion from ordinary client access",
          "Maintain reaction counts outside individual UI sessions",
          "Handle trigger retries and duplicate events safely",
          "Run cleanup and expiry work on a schedule",
          "Keep lower-risk MVP flows simpler where appropriate",
        ],
      },
      {
        id: "reaction-correctness",
        type: "implementation",
        title: "Reaction correctness under retries",
        paragraphs: [
          "Post reactions are stored through deterministic reaction document identifiers so one user, post, and reaction type resolve to one predictable record.",
          "Cloud Function triggers maintain aggregate counts and badge state, while processed-event records, ledger pairing, stale-event guards, and counter clamping reduce the risk of duplicate or out-of-order trigger execution.",
        ],
        bullets: [
          "Deterministic reaction document identifiers",
          "Transactional reaction toggles",
          "Cloud Function-maintained aggregate counts",
          "Processed-event markers for idempotency",
          "Reaction-ledger pairing",
          "Stale create and delete guards",
          "Counter clamping against invalid negative values",
        ],
      },
      {
        id: "resilient-saved-posts",
        type: "product-flow",
        title: "Saved content that remains useful",
        paragraphs: [
          "Saved posts were designed as more than references to live source documents. Snapshot metadata allows the dashboard to preserve useful context even when the original post changes or becomes unavailable.",
          "Optimistic removal with Undo, stable feedback, and ghost-card states help the saved-content flow remain understandable during deletion, restoration, and missing-source scenarios.",
        ],
        bullets: [
          "Private saved-post records per user",
          "Snapshot metadata for useful fallback context",
          "Ghost cards for missing source posts",
          "Optimistic removal from the dashboard",
          "Undo and rollback behavior",
          "Stable feedback during asynchronous actions",
        ],
      },
      {
        id: "content-deletion-lifecycle",
        type: "implementation",
        title: "Deletion as a controlled lifecycle",
        paragraphs: [
          "Content deletion is modeled as a lifecycle instead of one immediate destructive action. A post can first be soft-deleted, remain available inside Trash, be restored, or later be removed permanently.",
          "Permanent deletion runs through a privileged backend flow that removes related application data, while scheduled cleanup handles expired trash content without requiring the user to return to the application.",
        ],
        bullets: [
          "Soft deletion before permanent removal",
          "Trash dashboard and restoration flow",
          "Privileged permanent deletion",
          "Related-data cascade cleanup",
          "Scheduled purge of expired trash content",
          "Best-effort external image cleanup",
        ],
      },
      {
        id: "backend-limitations",
        type: "tradeoff",
        title: "Where the MVP still needs hardening",
        paragraphs: [
          "Backend correctness was concentrated on the flows with the highest risk, including reactions, statistics, privileged deletion, and scheduled cleanup.",
          "Some product policies still rely partly on frontend behavior or broader Firestore rules and would need stricter rules or callable functions before the application could be treated as a real production community platform.",
        ],
        bullets: [
          "Some post-owner update permissions remain broader than ideal",
          "Comment creation can still occur directly through Firestore rules",
          "Comment edit windows are primarily enforced in the interface",
          "Locked-post comment restrictions are primarily interface-level",
          "Comment likes use a simpler client-managed model",
          "External image cleanup is best effort rather than guaranteed",
        ],
      },
      {
        id: "validation-and-delivery",
        type: "validation",
        title: "Validation and delivery",
        paragraphs: [
          "The project was validated through automated checks, production builds, targeted tests, deployment checks, and manual testing of the main application flows.",
          "Validation included both ordinary user behavior and failure-sensitive paths such as authentication boundaries, reaction updates, saved-content fallbacks, restoration, permanent deletion, and responsive interaction states.",
        ],
        bullets: [
          "ESLint validation",
          "Automated test suite",
          "Production build validation",
          "GitHub Actions continuous integration",
          "Firebase Hosting deployment",
          "Authentication and protected-route checks",
          "Reaction and aggregate-flow checks",
          "Saved-post, Trash, and deletion-flow testing",
          "Responsive desktop and mobile testing",
        ],
      },
      {
        id: "what-i-learned",
        type: "learning",
        title: "What I learned",
        paragraphs: [
          "The project showed that reliable application behavior often depends on defining ownership and failure boundaries before implementing the visible interface.",
          "It also reinforced that retries, missing related data, optimistic updates, deletion lifecycles, and permission boundaries should be treated as normal application states rather than rare exceptions.",
        ],
        bullets: [
          "Identify high-risk flows before choosing where logic belongs",
          "Design backend triggers to tolerate retries",
          "Keep optimistic UI reversible",
          "Model missing and stale data explicitly",
          "Separate user-facing data from internal correctness records",
          "Document limitations instead of hiding them",
        ],
      },
      {
        id: "future-improvements",
        type: "future",
        title: "Future improvements",
        paragraphs: [
          "The current project is complete as a portfolio engineering case study, but a real production release would require additional backend hardening, broader automated coverage, and more mature operational tooling.",
          "Future work should strengthen the existing boundaries and reliability model rather than simply add more visible features.",
        ],
        bullets: [
          "Narrow post-owner update permissions",
          "Move remaining sensitive policies behind stricter rules or callable functions",
          "Expand automated integration testing",
          "Strengthen comment authorization and edit-window enforcement",
          "Improve structured logging and observability",
          "Add more formal moderation workflows",
          "Continue bundle and performance optimization",
        ],
      },
    ],
    screenshots: [
      {
        src: "/images/projects/liferecompiled/home-feed.png",
        alt: "LifeRecompiled public feed showing seeded posts, authors, categories, tags, reactions, and filtering controls.",
        label: "Public feed",
        caption:
          "The public feed brings together demo posts, filtering, post metadata, reactions, and card states for unavailable content.",
        format: "desktop",
      },
      {
        src: "/images/projects/liferecompiled/dashboard-stats.png",
        alt: "LifeRecompiled authenticated statistics dashboard showing posting activity and restore-versus-delete data.",
        label: "Dashboard stats",
        caption:
          "The authenticated dashboard summarizes posting activity and Trash lifecycle data in a focused account overview.",
        format: "desktop",
      },
      {
        src: "/images/projects/liferecompiled/post-detail.png",
        alt: "LifeRecompiled post detail page showing author data, reactions, saved state, nested comments, and moderation controls.",
        label: "Post detail",
        caption:
          "The post detail surface brings together enriched author data, reactions, badge state, saving, nested discussion, and role-aware actions.",
        format: "desktop",
      },
      {
        src: "/images/projects/liferecompiled/saved-posts.png",
        alt: "LifeRecompiled saved-posts dashboard showing a private reading list with sorting and saved reference metadata.",
        label: "Saved posts",
        caption:
          "The saved-posts view gives each user a private reading list with sorting, fallback details when source posts change, and actions that can be undone.",
        format: "desktop",
      },
      {
        src: "/images/projects/liferecompiled/trash.png",
        alt: "LifeRecompiled Trash dashboard showing deleted posts, retention filters, restore actions, and permanent deletion.",
        label: "Trash lifecycle",
        caption:
          "The Trash workspace exposes the soft-delete lifecycle through retention windows, restore controls, and privileged permanent deletion.",
        format: "desktop",
      },
      {
        src: "/images/projects/liferecompiled/mobile-comments.png",
        alt: "LifeRecompiled mobile discussion sheet showing nested replies, likes, author context, and a collapsed comment composer.",
        label: "Mobile comments",
        caption:
          "The mobile discussion sheet keeps realtime nested conversations usable through focused overlay behavior and compact reply context.",
        format: "mobile",
      },
    ],
  },
  {
    slug: "training-app",
    title: "Training App",
    shortDescription:
      "A mobile-first structured training system that combines guided workout execution with stable cycle continuity.",
    category: "product-mvp",
    proofLabel: "Product-focused MVP",
    proofSummary:
      "Demonstrates product thinking through information hierarchy, guided execution, controlled flexibility, honest partial-completion modeling, and deliberate MVP scope.",
    keyDecision:
      "Designed the product around two connected values: clarity during the workout and continuity across the cycle, using a stable training order instead of a rigid calendar-based schedule.",
    tradeoff:
      "Local-first persistence keeps the MVP focused and usable, but progress remains browser-specific without accounts or cloud synchronization.",
    evidence: [
      {
        label: "Clarity during the workout",
        detail:
          "Action-first screens combine exercise order, set targets, RIR, tempo, rest, progression guidance, contextual cues, logging, previous values, and the next meaningful step.",
      },
      {
        label: "Continuity across the cycle",
        detail:
          "A stable D1-D6 order inside a flexible 9-day rhythm, partial-day support, and previous-value carry-over preserve progress when real-life schedules change.",
      },
    ],
    techStack: [
      "React",
      "React Router",
      "Context",
      "Reducer",
      "Tailwind CSS",
      "localStorage",
    ],
    links: [
      {
        type: "live",
        label: "Live project",
        href: "https://training-app-mvp.web.app",
      },
      {
        type: "github",
        label: "GitHub repository",
        href: "https://github.com/aleksandar-todorovic-dev/training-app",
      },
    ],
    caseStudySections: [
      {
        id: "overview",
        type: "overview",
        title: "What this project is",
        paragraphs: [
          "Training App is a mobile-first structured training system designed to make workout execution clearer and training continuity easier to maintain.",
          "It combines two plan options, guided workout screens, contextual support, progress logging, previous values, and partial-day behavior inside one connected flow.",
        ],
      },
      {
        id: "role-and-scope",
        type: "role-scope",
        title: "My role and V1 scope",
        paragraphs: [
          "I defined the product structure, translated the training rules into frontend flows, designed the mobile-first interface, and implemented the application state and persistence.",
          "The first version was deliberately scoped as a local-first React MVP without authentication, cloud synchronization, adaptive coaching, or a custom plan builder.",
        ],
        bullets: [
          "Product structure and user flow",
          "React component implementation",
          "Context and reducer state",
          "localStorage persistence",
          "Responsive mobile-first interface",
          "Deployment and project documentation",
        ],
      },
      {
        id: "core-product-decision",
        type: "decision",
        title: "The decision that shaped the product",
        paragraphs: [
          "The product was designed around two connected values: clarity during the workout and continuity across the training cycle.",
          "Instead of treating the plan as a static schedule, the application preserves a stable workout order while allowing the calendar to move when real life interrupts the routine.",
        ],
        bullets: [
          "Show the next meaningful action clearly",
          "Keep prescribed training structure visible",
          "Allow partial completion without pretending the day was finished",
          "Preserve workout order when the calendar changes",
        ],
      },
      {
        id: "guided-workout-flow",
        type: "product-flow",
        title: "Guided workout execution",
        paragraphs: [
          "The workout flow progressively reveals the information needed for the current step rather than placing the entire training plan on one screen.",
          "Exercise order, set targets, RIR, tempo, rest, guidance, previous values, and completion state are connected inside the same execution flow.",
        ],
        bullets: [
          "Plan and cycle overview",
          "Current training day",
          "Exercise-by-exercise execution",
          "Set logging and completion",
          "Contextual guidance",
          "Previous-value continuity",
          "Finish-day and cycle progression",
        ],
      },
      {
        id: "state-and-persistence",
        type: "architecture",
        title: "State and persistence architecture",
        paragraphs: [
          "Static training content is separated from runtime progress so the application does not duplicate the full plan inside user state.",
          "Context and reducer manage the active training flow, while a versioned localStorage layer preserves progress between sessions and safely falls back when stored data is invalid.",
        ],
        bullets: [
          "Static plan content separated from user progress",
          "Context and reducer for shared application state",
          "Lazy creation of exercise logs",
          "Versioned localStorage persistence",
          "Safe fallback for invalid stored data",
          "Previous values carried into later sessions",
        ],
      },
      {
        id: "local-first-tradeoff",
        type: "tradeoff",
        title: "Why V1 stayed local-first",
        paragraphs: [
          "Authentication and cloud synchronization were intentionally excluded from the first version so the project could focus on the core workout experience, state rules, and cycle continuity.",
          "This keeps the MVP simpler and immediately usable, but progress remains tied to one browser and cannot currently be synchronized across devices.",
        ],
        bullets: [
          "No account setup before using the product",
          "Smaller implementation and testing scope",
          "No cross-device synchronization",
          "Clearing browser storage removes saved progress",
        ],
      },
      {
        id: "implementation-highlights",
        type: "implementation",
        title: "Implementation highlights",
        paragraphs: [
          "The application is organized around route-based screens that move the user from plan selection through cycle progress, workout days, exercises, guidance, and cycle completion.",
          "Reusable components handle repeated interface patterns, while reducer actions keep progress updates explicit instead of spreading unrelated state changes across components.",
        ],
        bullets: [
          "Route-based plan and workout screens",
          "Reusable exercise and logging components",
          "Explicit reducer actions for progress updates",
          "Set-level weight, repetitions, RIR, and completion data",
          "Separate warm-up, core, and guidance content",
          "Responsive layouts designed around phone use",
        ],
      },
      {
        id: "validation",
        type: "validation",
        title: "Validation and delivery",
        paragraphs: [
          "The MVP was validated through production builds, manual flow testing, responsive checks, persisted-state testing, and deployment to Firebase Hosting.",
          "Testing focused on the complete user journey as well as edge cases such as partial days, page refreshes, missing stored data, and continuing a cycle after an interrupted session.",
        ],
        bullets: [
          "ESLint validation",
          "Production build validation",
          "GitHub Actions workflow",
          "Firebase Hosting deployment",
          "Mobile and desktop responsive checks",
          "localStorage refresh and recovery checks",
          "Partial-day and cycle-continuity testing",
        ],
      },
      {
        id: "what-i-learned",
        type: "learning",
        title: "What I learned",
        paragraphs: [
          "The project reinforced that application state should represent what actually happened, not only the ideal path the user was expected to follow.",
          "It also showed that product scope, information hierarchy, and technical architecture are closely connected. A simpler backend scope made it possible to focus more deeply on the workout flow and the rules that protect training continuity.",
        ],
        bullets: [
          "Model partial completion honestly",
          "Separate static content from changing user progress",
          "Design state around real user behavior",
          "Use progressive disclosure to control information density",
          "Treat excluded features as deliberate scope decisions",
        ],
      },
      {
        id: "future-improvements",
        type: "future",
        title: "Future improvements",
        paragraphs: [
          "The current version provides a complete local-first workout flow, but several additions could extend the product after the core experience has been validated.",
          "Future work should preserve the existing training structure instead of adding flexibility that weakens the purpose of the plan.",
        ],
        bullets: [
          "Authentication and cloud synchronization",
          "Cross-device progress continuity",
          "Controlled exercise substitutions",
          "Equipment alternatives",
          "Improved movement guidance and media",
          "Installable PWA experience",
          "Expanded progress summaries",
        ],
      },
    ],
    screenshots: [
      {
        src: "/images/projects/training-app/cycle.png",
        alt: "Training App cycle dashboard showing the active day, cycle progress, and upcoming training days.",
        label: "Cycle overview",
        caption:
          "The cycle dashboard keeps the next meaningful step visible and preserves continuity across the training order.",
        format: "mobile",
      },
      {
        src: "/images/projects/training-app/exercise.png",
        alt: "Training App exercise screen showing targets, previous values, prescribed method, and set-by-set logging.",
        label: "Exercise execution",
        caption:
          "Exercise execution combines targets, previous values, prescribed method guidance, and live logging in one focused screen.",
        format: "mobile",
      },
      {
        src: "/images/projects/training-app/partial-day.png",
        alt: "Training App finish-day confirmation showing partial completion rules and carry-over guidance.",
        label: "Partial day",
        caption:
          "Partial-day support is a deliberate product rule: checked work counts, unfinished work remains honest, and the cycle still moves forward.",
        format: "mobile",
      },
      {
        src: "/images/projects/training-app/guide.png",
        alt: "Training App coach library screen showing guide sections such as Start here, Training rules, and Plan structure.",
        label: "Coach library",
        caption:
          "The guide system supports deeper education when requested, without interrupting the main workout flow.",
        format: "mobile",
      },
      {
        src: "/images/projects/training-app/core.png",
        alt: "Training App core training screen showing a dedicated core block with cues, targets, and set logging.",
        label: "Core work",
        caption:
          "The dedicated core flow brings cues, targets, and set logging into the same structured training system as the main workout.",
        format: "mobile",
      },
    ],
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    shortDescription:
      "A polished React and TypeScript Kanban board with drag-and-drop interactions and local persistence.",
    category: "typescript-ui",
    proofLabel: "TypeScript UI",
    proofSummary:
      "Demonstrates typed React components, Context typing, generic hooks, immutable nested state updates, and drag-and-drop UI.",
    keyDecision:
      "Used a typed board data model, immutable update helpers, and a generic localStorage hook to keep nested state changes understandable.",
    tradeoff:
      "Local-first persistence fits the project scope, but the app is not designed for shared real-time collaboration.",
    evidence: [
      {
        label: "Typed state model",
        detail:
          "Typed props, Context values, events, refs, and board data keep component and state contracts explicit.",
      },
      {
        label: "Reusable state helpers",
        detail:
          "A generic reorder helper and immutable update functions handle column and card drag-and-drop behavior.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Context API",
      "styled-components",
      "localStorage",
    ],
    links: [
      {
        type: "live",
        label: "Live project",
        href: "https://taskflow-kanban-kappa.vercel.app",
      },
      {
        type: "github",
        label: "GitHub repository",
        href: "https://github.com/aleksandar-todorovic-dev/taskflow-kanban",
      },
    ],
    caseStudySections: [
      {
        id: "overview",
        type: "overview",
        title: "What this project is",
        paragraphs: [
          "TaskFlow is a polished React and TypeScript Kanban board built around draggable columns, task cards, and local browser persistence.",
          "The project started from a guided course structure and was then completed, cleaned, documented, and redesigned into a more focused portfolio product.",
        ],
      },
      {
        id: "role-and-scope",
        type: "role-scope",
        title: "My role and project scope",
        paragraphs: [
          "I implemented the board interactions, connected the shared state, typed the component and data contracts, added drag-and-drop behavior, and completed the portfolio-quality cleanup and presentation.",
          "The scope remained deliberately focused on a single-user local Kanban workflow rather than authentication, cloud storage, real-time collaboration, or advanced project-management features.",
        ],
        bullets: [
          "React component implementation",
          "TypeScript data and props contracts",
          "Context state and actions",
          "Drag-and-drop interaction",
          "Immutable column and card updates",
          "localStorage persistence",
          "Responsive interface polish",
          "Deployment and documentation",
        ],
      },
      {
        id: "typed-board-architecture",
        type: "architecture",
        title: "Typed board architecture",
        paragraphs: [
          "The board is modeled through explicit TypeScript contracts for columns, cards, component props, Context values, events, refs, and reusable helper functions.",
          "Shared board state is kept inside React Context, while focused components consume named actions for creating, updating, deleting, and rendering board data.",
        ],
        bullets: [
          "Typed Column and Card data models",
          "Typed component props",
          "Typed React Context value",
          "Typed keyboard and drag events",
          "Typed textarea refs",
          "Generic localStorage hook",
          "Reusable immutable update helpers",
        ],
      },
      {
        id: "explicit-contracts-decision",
        type: "decision",
        title: "Why explicit contracts mattered",
        paragraphs: [
          "The main TypeScript decision was to make the data flow and component expectations visible instead of relying on objects whose shape was only understood informally.",
          "This made nested board updates easier to reason about because each helper, context action, and component received a clearly defined input and returned a predictable result.",
        ],
        bullets: [
          "Catch missing or incorrectly typed props early",
          "Keep shared Context values understandable",
          "Make helper-function inputs and outputs explicit",
          "Reuse generic logic without losing type safety",
          "Reduce uncertainty while changing nested state",
        ],
      },
      {
        id: "drag-and-drop-state-updates",
        type: "implementation",
        title: "Drag-and-drop state updates",
        paragraphs: [
          "The drag-and-drop library provides the source and destination positions, but the application still owns the actual board-state update.",
          "Column reordering and card movement are handled through reusable helper functions that return new arrays instead of mutating the existing Context state.",
        ],
        bullets: [
          "Guard against invalid destinations",
          "Ignore drops into the same position",
          "Reorder complete columns",
          "Reorder cards inside one column",
          "Move cards between different columns",
          "Persist the updated board after every valid drop",
        ],
      },
      {
        id: "local-storage-persistence",
        type: "implementation",
        title: "Reusable local persistence",
        paragraphs: [
          "Board state is persisted through a generic useLocalStorage hook that behaves similarly to React useState while also synchronizing updates with browser storage.",
          "The generic type parameter allows the same hook pattern to preserve type information for different values, while TaskFlow uses it specifically with the typed Column array.",
        ],
        bullets: [
          "Generic useLocalStorage<T> hook",
          "Typed initial value",
          "Lazy reading from localStorage",
          "JSON serialization and parsing",
          "Support for direct values and updater functions",
          "Board restoration after page refresh",
        ],
      },
      {
        id: "local-first-tradeoff",
        type: "tradeoff",
        title: "Why the board stayed local-first",
        paragraphs: [
          "Local browser persistence matched the scope of a focused single-user Kanban project and kept the implementation centered on React, TypeScript, state updates, and interaction behavior.",
          "The tradeoff is that board data belongs to one browser. The current version does not support accounts, shared workspaces, cross-device synchronization, or real-time collaboration.",
        ],
        bullets: [
          "No account setup required",
          "Immediate persistence after state changes",
          "Small and understandable project architecture",
          "No shared boards or team collaboration",
          "No cross-device synchronization",
          "Clearing browser storage removes the board",
        ],
      },
      {
        id: "validation-and-delivery",
        type: "validation",
        title: "Validation and delivery",
        paragraphs: [
          "The completed board was validated through linting, production builds, manual interaction testing, persistence checks, responsive review, and deployment to Vercel.",
          "Testing covered the main CRUD and drag-and-drop flows as well as practical edge cases such as invalid drops, refresh behavior, empty boards, long text, and moving cards between columns.",
        ],
        bullets: [
          "ESLint validation",
          "TypeScript and production build validation",
          "GitHub Actions continuous integration",
          "Vercel deployment",
          "Column and card CRUD testing",
          "Drag-and-drop behavior checks",
          "localStorage refresh testing",
          "Responsive and long-content checks",
        ],
      },
      {
        id: "what-i-learned",
        type: "learning",
        title: "What I learned",
        paragraphs: [
          "TaskFlow made TypeScript more concrete by connecting types directly to React components, Context, custom hooks, DOM events, refs, and state-update helpers.",
          "It also reinforced that drag-and-drop is not only a visual feature. The difficult part is translating a user interaction into predictable immutable updates across nested application state.",
        ],
        bullets: [
          "Use types to make component contracts visible",
          "Keep state-update logic outside presentation where useful",
          "Return new arrays instead of mutating React state",
          "Use generics for reusable typed behavior",
          "Treat library events as inputs to application logic",
          "Validate behavior again after cleanup and UI polish",
        ],
      },
      {
        id: "future-improvements",
        type: "future",
        title: "Future improvements",
        paragraphs: [
          "The current version is complete for its portfolio goal, so future additions should solve a real product or accessibility need rather than expand the project without a clear reason.",
          "A larger version could introduce shared persistence and more explicit editing controls, but those changes would also require a broader data model and interaction architecture.",
        ],
        bullets: [
          "Keyboard-accessible explicit edit controls",
          "Improved mobile drag-and-drop review",
          "Automated tests for state helpers",
          "Cloud persistence and user accounts",
          "Shared boards and collaboration",
          "Explicit status metadata instead of title-based Done logic",
        ],
      },
    ],
    screenshots: [
      {
        src: "/images/projects/taskflow/board.png",
        alt: "TaskFlow desktop Kanban board showing four workflow columns, demo cards, board statistics, actions, and local persistence status.",
        label: "Board overview",
        caption:
          "The main board brings four workflow columns, demo cards, board statistics, actions, and local persistence into one workspace.",
        format: "desktop",
      },
      {
        src: "/images/projects/taskflow/card-drag.png",
        alt: "TaskFlow card being dragged from the Backlog column toward the In Progress column.",
        label: "Card movement",
        caption:
          "Cards can move within and between columns while the board updates and saves the new order.",
        format: "desktop",
      },
      {
        src: "/images/projects/taskflow/mobile.png",
        alt: "TaskFlow mobile layout showing board statistics, local persistence status, controls, and horizontally scrollable Kanban columns.",
        label: "Mobile board",
        caption:
          "The mobile layout preserves the full board workflow through responsive controls and horizontal column navigation.",
        format: "mobile",
      },
    ],
  },
];
