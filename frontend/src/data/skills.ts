/**
 * skills.ts
 * Technical skills grouped by category.
 * Add or remove skills as needed.
 */

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++' },
      { name: 'SQL' },
      { name: 'Python' },
    ],
  },
  {
    category: 'Web Development & Frameworks',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Django' },
      { name: 'Supabase' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git' },
      { name: 'Figma' },
      { name: 'DaVinci Resolve' },
    ],
  },
  {
    category: 'Core Computer Science',
    skills: [
      { name: 'DBMS' },
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'Operating Systems' },
    ],
  },
];
