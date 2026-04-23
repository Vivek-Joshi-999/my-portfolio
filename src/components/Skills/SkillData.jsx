import { Layout, Wrench, Code } from "lucide-react";

export const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Layout,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
  shadow: "0px 20px 40px rgba(59,130,246,0.25)",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "Javascript", level: 65 },
      { name: "Tailwind", level: 70 },
      { name: "React", level: 50 },
    ],
  },

  {
    id: 2,
    title: "Tools & Ecosystem",
    icon: Wrench,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    shadow: "0px 20px 40px rgba(168,85,247,0.25)",
    skills: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 55 },
      { name: "VS Code", level: 90 },
    ],
  },

 
];