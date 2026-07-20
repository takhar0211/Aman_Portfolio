/**
 * projects.ts
 * Portfolio projects data.
 * Add new projects here. Each project should have at minimum a name, description, and tech stack.
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'prepped',
    name: 'Prepped — AI-Powered Technical Interview Platform',
    description: 'Built a full-stack platform using Django and Next.js for software engineers to practice Data Structures and Algorithms.',
    longDescription: 'Integrated Langchain and Gemini AI to conduct interactive mock interviews, providing real-time feedback and dynamic follow-up questions based on user code submissions. Implemented a LeetCode-style coding environment using Monaco Editor, complete with performance tracking and detailed AI-generated interview summaries.',
    techStack: ['Django', 'Next.js', 'Langchain', 'Gemini AI'],
    features: [
      'Interactive mock interviews with real-time feedback',
      'LeetCode-style coding environment with Monaco Editor',
      'Performance tracking and AI-generated summaries',
    ],
    githubUrl: 'https://github.com/takhar0211/Prepped',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'codequest',
    name: 'CodeQuest — Gamified Technical Learning Platform',
    description: 'Built a full-stack learning platform using Next.js and Supabase designed to help experienced software engineers master new programming languages.',
    longDescription: 'Developed a highly interactive, Game-inspired learning environment utilizing Framer Motion and Tailwind CSS, featuring a dynamic "kingdom map" to visualize module progression. Implemented a robust progression system with Zustand for state management, incorporating daily streaks, XP tracking, skill-based achievements, and real-time cross-device synchronization.',
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    features: [
      'Game-inspired learning environment with dynamic kingdom map',
      'Robust progression system with daily streaks and XP tracking',
      'Real-time cross-device synchronization',
    ],
    githubUrl: 'https://github.com/takhar0211/CodeQuest',
    liveUrl: 'https://code-quest-two-gray.vercel.app/',
    featured: true,
  },
  {
    id: 'Event-Sphere',
    name: 'EventSphere — Smart Event Management Platform',
    description: 'A full-stack Django event management and ticket booking platform with role-based authentication and secure booking.',
    longDescription: 'Developed a responsive event management platform where organizers can manage events and users can browse, search, and book tickets. Implemented role-based authentication, secure booking with race-condition protection, booking history, admin analytics, and event management features.',
    techStack: [
      'Django',
      'Python',
      'SQLite',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    features: [
      'Role-based authentication',
      'Event CRUD management',
      'Ticket booking system',
      'Search and filter events',
      'Admin dashboard & analytics',
      'Responsive dark-themed UI'
    ],
    githubUrl: 'https://github.com/takhar0211/Event-Sphere',
    liveUrl: '',
    featured: true,
  },
];

/** Returns only featured projects */
export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);
