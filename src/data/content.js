// =====================================================================
// CONTENT.JS — Single source of truth for portfolio content
// Edit this file to update text, projects, links, skills, etc.
// All [PLACEHOLDER] values should be replaced with real data later.
// =====================================================================

export const personalInfo = {
  name: 'Abhishek Singh',
  title: 'Frontend Developer',
  tagline: 'Frontend Developer crafting fast, interactive web experiences.',
  email: 'abhisheksinghh2175@gmail.com',
  phone: '+91-9821826675',
  location: 'Jammu, India',
  resumeUrl: '/resume.pdf', // place Abhishek_Resume.pdf in /public as resume.pdf
  socials: {
    github: '#', // [PLACEHOLDER] add GitHub URL
    linkedin: '#', // [PLACEHOLDER] add LinkedIn URL
    leetcode: '#', // [PLACEHOLDER] add LeetCode URL
  },
}

export const heroContent = {
  greeting: "Hi, I'm",
  name: 'Abhishek Singh',
  tagline: 'Frontend Developer crafting fast, interactive web experiences.',
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Download Resume',
}

export const aboutContent = {
  label: 'About',
  heading: 'About Me',
  bio: `I'm a 3rd-year B.Tech Computer Engineering student at J.C. Bose University
of Science and Technology, YMCA, specializing in Data Science. Currently
interning as a Frontend Developer at Yuvocreations, I love building
responsive, performant interfaces and exploring full-stack development
with the MERN and Next.js ecosystems.`,
  education: {
    institution: 'J.C. Bose University of Science and Technology, YMCA',
    degree: 'B.Tech in Computer Engineering (Data Science)',
    years: '2023 – 2027',
  },
  currentRole: {
    title: 'Frontend Development Intern',
    company: 'Yuvocreations Pvt. Ltd.',
    period: 'March 2026 – Present',
  },
}

export const projects = [
  {
    id: 'affinity',
    name: 'Affinity',
    subtitle: 'Real-Time Chat Application',
    date: 'March 2026',
    description:
      'Real-time chat app built on the MERN stack with instant messaging, secure JWT/bcrypt auth, Socket.io for live communication, and Redux with persistent storage. Responsive UI using React, Tailwind CSS, and DaisyUI.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Redux', 'Socket.io', 'Tailwind CSS', 'DaisyUI', 'JWT', 'bcrypt'],
    repoUrl: '#', // [PLACEHOLDER]
    liveUrl: '#', // [PLACEHOLDER]
    image: null, // [PLACEHOLDER] add screenshot path e.g. '/projects/affinity.png'
  },
  {
    id: 'prepwise',
    name: 'PrepWise',
    subtitle: 'AI Powered Mock Interview Platform',
    date: 'December 2025',
    description:
      'AI mock interview platform with real-time voice interaction (Vapi SDK) and adaptive questioning via Gemini AI. Provides post-session performance feedback on clarity, confidence, and technical accuracy. Firebase Authentication + Firestore for user/session management.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Gemini AI', 'Vapi SDK', 'Firebase', 'Zod', 'React Hook Form'],
    repoUrl: '#', // [PLACEHOLDER]
    liveUrl: '#', // [PLACEHOLDER]
    image: null, // [PLACEHOLDER]
  },
  {
    id: 'project-3',
    name: 'Project Three', // [PLACEHOLDER]
    subtitle: 'To be finalized', // [PLACEHOLDER]
    date: '',
    description: 'Description coming soon — placeholder card ready for your next project.', // [PLACEHOLDER]
    stack: ['Tech', 'Stack', 'Here'], // [PLACEHOLDER]
    repoUrl: '#',
    liveUrl: '#',
    image: null,
  },
  {
    id: 'project-4',
    name: 'Project Four', // [PLACEHOLDER]
    subtitle: 'To be finalized', // [PLACEHOLDER]
    date: '',
    description: 'Description coming soon — placeholder card ready for your next project.', // [PLACEHOLDER]
    stack: ['Tech', 'Stack', 'Here'], // [PLACEHOLDER]
    repoUrl: '#',
    liveUrl: '#',
    image: null,
  },
]

export const skillCategories = [
  { category: 'Languages', skills: ['C++', 'Java', 'TypeScript', 'JavaScript', 'SQL'] },
  { category: 'Frontend', skills: ['React.js', 'Next.js', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL'] },
  { category: 'Libraries / Tools', skills: ['Redux Toolkit', 'JWT', 'bcrypt', 'Mongoose', 'Zod', 'Flask', 'DaisyUI', 'Socket.IO'] },
  { category: 'Dev Tools', skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'IntelliJ'] },
  { category: 'Core Concepts', skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'Operating Systems'] },
]

export const experience = [
  {
    role: 'Frontend Development Intern',
    org: 'Yuvocreations Pvt. Ltd.',
    period: 'March 2026 – Present',
    points: [
      'Developing responsive frontend interfaces and working on client projects in a collaborative environment.',
    ],
  },
  {
    role: 'Core Member',
    org: 'Udaan — Training & Placement Cell, YMCA',
    period: 'Feb 2025 – Present',
    points: [
      'Coordinated 10+ placement drives, connecting 200+ students with recruiters.',
      'Organized tech events including Tech Talks with industry speakers.',
    ],
  },
]

export const achievements = [
  {
    title: 'Top 10 Team',
    detail: 'Zenith Hackathon (Techno Surge, JCBUST)',
  },
  {
    title: '250+ DSA Problems Solved',
    detail: 'Peak LeetCode rating of 1415',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
