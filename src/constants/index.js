export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 79 },
      { name: "React", level: 80 },
      { name: "TailwindCss", level: 70 },
      { name: "Bootstrap", level: 60 },
      { name: "TypeScript", level: 50 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Framer Motion", level: 90 },
      { name: "ThreeJs", level: 90 },
    ],
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company: "ExpertBuddy",
    date: "April 2025 - June 2025",
    certificate: "/InternshipCertificate.pdf",
    desc: "Built responsive UI using React and Tailwind CSS.",
    more: `• Developed a dynamic Admin Dashboard using React.js, integrating REST APIs for real-time data display.
           • Visualized user analytics and traffic sources using D3.js for interactive charts and graphs.
           • Collaborated with backend developers to ensure smooth data flow and improved performance.
           • Optimized UI responsiveness across devices using Tailwind CSS and reusable components.
    `,
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/ramchoudhary779/Personal-Portfolio",
    live: "https://yourportfolio.com",
    more: "This project showcases my personal projects, skills, and contact information with smooth animations and responsive design.",
  },
  {
    title: "Airbnb",
    description:
      "A full-stack Airbnb  with server-rendered UI and dynamic listings.",
    github: "https://github.com/ramchoudhary779/Learning-Backend/tree/master/7%20airbnb",
    live: "",
    more: `Developed a complete Airbnb-style rental platform using Node.js and Express.
           Integrated MongoDB for dynamic listing, booking, and user management.
           Used EJS templating engine to render server-side HTML views.
           Implemented user authentication with JWT and session-based login.
           Added listing filters, search functionality, and real-time availability check.
           Built admin dashboard for managing users, listings, and bookings.
           Handled secure form submissions, error validation, and edge-case routing.
           Deployed on Vercel (frontend) and Render (backend) with MongoDB Atlas integration.
           Followed MVC architecture for scalable backend and routing logic.
           Focused on responsive UI/UX using Tailwind CSS and dynamic components.`,
       },
];
