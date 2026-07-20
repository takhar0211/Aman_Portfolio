/**
 * portfolio.ts
 * Core personal information and metadata for the portfolio.
 * Update this file to change any personal details.
 */

export const portfolio = {
  name: 'Aman Takhar',
  title: 'Software Engineer',
  tagline: 'Building clean, fast, and scalable software.',
  bio: `I'm a software engineer passionate about building great products. I enjoy working across the stack — from crafting clean user interfaces to designing robust backend systems.

Currently focused on full-stack web development with modern tooling. I care deeply about code quality, developer experience, and shipping things that actually work.`,
  education: {
    degree: 'B.Tech in Information Technology',
    institution: 'Army Institute Of Technology',
    year: '2023-2027',
  },
  location: 'India',
  availableForWork: true,
  email: 'amantakhar2002@gmail.com',
  phone: '+91 7357704744',
  resumeUrl: '/resume.pdf',
  profileImage: '/image.jpg', // TODO: Add your image to public/ folder and put the filename here (e.g., '/profile.jpg')
} as const;
