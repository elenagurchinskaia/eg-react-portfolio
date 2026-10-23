// The Experience section (and its nav link) appears when this list has entries.
// Optional fields: `url` links the company name; `clients` lists client work
// shown under the role.
export const experience = [
  {
    dates: "2026 — Present",
    title: "Co-Founder & Full-Stack Software Engineer",
    company: "Kinlo",
    summary:
      "Building a mobile-first community and event platform: event creation, ticket sales, recurring memberships, attendee management, manual check-in and messaging, backed by a Firestore data model and a shared design system.",
    tags: ["React Native", "Expo", "Node.js", "Firebase", "Stripe"],
  },
  {
    dates: "2022 — Present",
    title: "Founder & Full-Stack Software Engineer",
    company: "Horn & Hooves",
    summary:
      "Independent studio building responsive full-stack web applications for small-business clients. Own each project from requirements and technical design through deployment and post-launch support, including design systems, contact workflows and third-party integrations.",
    clients: [
      {
        name: "The Dating Doc",
        dates: "Dec 2023 — Oct 2025 · Contract",
        summary:
          "Led full-stack development and product design of a dating and events platform. Built multi-step onboarding, event registration with Stripe checkout and webhooks, and real-time messaging, and designed the UI, visual identity and design system.",
      },
    ],
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "Socket.IO", "Stripe", "REST APIs"],
  },
  {
    dates: "2020 — 2023",
    title: "3D Renderer / Visualization Artist",
    company: "WGI",
    summary:
      "Created photorealistic renderings, animations and VR experiences for architectural projects, and set graphic production standards for the division that cut production time by 80%.",
    tags: ["3D Visualization", "Animation", "VR"],
  },
];
