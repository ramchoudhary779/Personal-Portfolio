export const navLinks = [
    {id:'home',title:"Home"},
    {id:'about',title:"About"},
    {id:'experience',title:"Experience"},
    {id:'projects',title:"Projects"},
    {id:'contact',title:"Contact"},
];

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 79 },
      { name: "React", level: 80 },
      { name: "TailwindCss", level:70},
      {name: "Bootstrap",level:60},
      {name:"TypeScript" ,level:50},
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
    company: "Tech Innovators",
    date: "Jan 2022 - Present",
    desc: "Built responsive UI using React and Tailwind CSS.",
  },
  {
    title: "Backend Intern",
    company: "CodeCraft",
    date: "Jul 2021 - Dec 2021",
    desc: "Worked on REST APIs and MongoDB integration.",
  },
  {
    title: "Freelancer",
    company: "Remote",
    date: "2020 - 2021",
    desc: "Created full-stack apps for small businesses.",
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.com",
    more: "This project showcases my personal projects, skills, and contact information with smooth animations and responsive design.",
  },
  {
    title: "Weather App",
    description: "A real-time weather application using OpenWeather API.",
    github: "https://github.com/yourname/weather-app",
    live: "",
    more: "Built with React and Axios, it fetches weather data based on city name and displays temperature, humidity, and weather conditions.",
  },
  {
    title: "Task Manager",
    description: "Manage tasks with categories and priorities.",
    github: "https://github.com/yourname/task-manager",
    live: "https://taskmanager.example.com",
    more: "Features include task filtering, deadline reminders, and drag-n-drop reordering.",
  },
];
