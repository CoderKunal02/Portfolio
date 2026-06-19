import { Project } from "./types";

export interface EducationMilestone {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location?: string;
  description: string;
  grade?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const DEV_PROFILE = {
  name: "Kunal Choudhary",
  title: "IT Specialist & Software Engineer",
  subtitle: "Specializing in Software Development, Automation, and DevOps platforms with a keen focus on digital forensics.",
  location: "Seeking Internship and Fresher Roles in Frontend, Backend, and Full-Stack Development",
  email: "kunal.codes5@gmail.com",
  phone: "+91 6377470431",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  avatar: "/src/assets/images/developer_avatar_1780757931659.png",
  bio: "A passionate IT professional specializing in Software Development, Automation, and DevOps. Building secure, high-performance desktop and web applications while exploring digital forensics.",
  stats: [
    { label: "BCA Semester", value: "6th Sem" },
    { label: "Direct Email Ready", value: "kunal.codes5" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Languages & Web",
    skills: [
      { name: "Python (Django, Flask)", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 & CSS3", level: 95 }
    ],
  },
  {
    title: "Backend & Architectures",
    skills: [
      { name: "OOPs (Concepts & Logic)", level: 90 },
      { name: "REST APIs & SOAP", level: 85 },
      { name: "CRUD Implementations", level: 88 },
      { name: "JWT & Session Auth", level: 84 }
    ],
  },
  {
    title: "Databases & Engines",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL Structured Query", level: 88 }
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker Platforms", level: 80 },
      { name: "Basic Linux Commands", level: 85 },
      { name: "Vite & npm Environment", level: 82 },
      { name: "Chrome DevTools", level: 88 }
    ],
  },
  {
    title: "IDEs & Ecosystems",
    skills: [
      { name: "Cursor IDE & VS Code", level: 95 }
    ],
  },
  {
    title: "AI Tools & Ecosystem",
    skills: [
      { name: "GitHub Copilot / Claude", level: 95 },
      { name: "Google AI Studio / Gemini", level: 92 },
      { name: "Antigravity Agent Suite", level: 88 },
      { name: "Ollama / LM Studio", level: 85 },
      { name: "Hugging Face Models", level: 80 }
    ],
  }
];

export const EDUCATION_TIMELINE: EducationMilestone[] = [
  {
    id: "edu-1",
    period: "2023 - 2026",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Jaipur National University",
    location: "Jaipur, Rajasthan",
    description: "Focusing on core computing foundational subjects, object-oriented concepts, database management systems, data structures, and secure web architectures.",
    grade: "Currently Active / 6th Semester"
  },
  {
    id: "edu-2",
    period: "2023",
    degree: "Senior Secondary School (XII) | Science",
    institution: "Maharana Pratap School Jaipur (RBSE)",
    location: "Jaipur, Rajasthan",
    description: "Core coursework focused heavily on Biology, Physics, Chemistry, and Computer Applications."
  },
  {
    id: "edu-3",
    period: "2021",
    degree: "Secondary School (X)",
    institution: "The Learners Academy (RBSE)",
    location: "Jaipur, Rajasthan",
    description: "General high school coursework centered around Science, Advanced Mathematics, and Social Science foundations."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "web-scanner",
    title: "Website Vulnerability Scanner",
    description: "Developed a security platform using Python (Flask) that detects 14+ web vulnerabilities (including SQL Injection, XSS, CSRF, and SSL/TLS issues). Features a real-time responsive dashboard, JWT-based authentication, scan history tracking, risk assessment, and downloadable PDF security reports.",
    tags: ["Python", "Flask", "JWT Auth", "PDF generation", "Security Scanner"],
    imageSrc: "/images/vulscanner.PNG",
    liveUrl: "https://github.com/Kunal-CodeLab/Vulnerability-Scanner",
    githubUrl: "https://github.com/Kunal-CodeLab/Vulnerability-Scanner",
    category: "Web Application",
    highlighted: true
  },
  {
    id: "sonicboard",
    title: "SonicBoard Streaming Soundboard",
    description: "A low-latency desktop soundboard application built specifically for Windows operating systems enabling gamers and streamers to organize custom sound effects and assign instantaneous globall hotkey shortcuts.",
    tags: ["C# .NET", "Windows Audio API", "Forms Desktop", "Hotkeys API"],
    imageSrc: "/images/sonicboard.PNG",
    liveUrl: "https://github.com/Kunal-CodeLab/SonicBoard",
    githubUrl: "https://github.com/Kunal-CodeLab/SonicBoard",
    category: "Desktop Application",
    highlighted: true
  },
  {
    id: "smart-file",
    title: "Smart File Management System",
    description: "A feature-rich C#.NET Windows Forms desktop application designed to automate local file organization with file previews, transaction logs, and recursive directory monitoring.",
    tags: ["C# .NET", "Windows Forms", "File System Watcher", "Logs Engine"],
    imageSrc: "/images/fileorganiser.PNG",
    liveUrl: "https://github.com/Kunal-CodeLab/Smart-File-Management-System",
    githubUrl: "https://github.com/Kunal-CodeLab/Smart-File-Management-System",
    category: "Desktop Application",
    highlighted: false
  },
  {
    id: "forensic-analysis",
    title: "Windows Forensic Analysis Tool",
    description: "A professional forensic utility with a modern PyQt5 GUI offering secure deleted file recovery, log/browser history parsing, and legal-standard metadata evidence collection formats.",
    tags: ["Python", "PyQt5", "Forensics", "Deleted Recovery", "Browser Logs"],
    imageSrc: "/images/forensic analysis tool.PNG",
    liveUrl: "https://github.com/Kunal-CodeLab/forensic_analysis_tool_complete",
    githubUrl: "https://github.com/Kunal-CodeLab/forensic_analysis_tool_complete",
    category: "Desktop Application",
    highlighted: false
  },
  {
    id: "automated-devops",
    title: "Automated DevOps Infrastructure",
    description: "An infrastructure automation venture deploying web servers. Employs Terraform and Ansible scripts to build, secure, and monitor isolated AWS VPC resources and standard EC2 structures.",
    tags: ["Terraform", "Ansible", "AWS Suite", "Nginx", "CloudWatch"],
    imageSrc: "/images/devopsinfrastructure.png",
    liveUrl: "https://github.com/Kunal-CodeLab/devops-infrastructure-project",
    githubUrl: "https://github.com/Kunal-CodeLab/devops-infrastructure-project",
    category: "DevOps",
    highlighted: false
  },
  {
    id: "auto-git-backup",
    title: "Auto Git Backup Utility",
    description: "A silent Windows system tray utility monitoring custom directory zones. Automatically stages, commits, and pushes changes into associated GitHub repositories in real-time.",
    tags: ["Python", "Git API", "System Tray", "Automation"],
    imageSrc: "/images/autogitbackuptool.PNG",
    liveUrl: "https://github.com/Kunal-CodeLab/Auto-Git-Backup-Tool-for-Windows",
    githubUrl: "https://github.com/Kunal-CodeLab/Auto-Git-Backup-Tool-for-Windows",
    category: "Desktop Application",
    highlighted: false
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-hr-css",
    name: "CSS (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Virtual - 2026",
    credentialUrl: "https://drive.google.com/file/d/15REYqBHw9l9ExcHEtYqTqOgDpNfRoSqk/view?usp=sharing"
  },
  {
    id: "cert-fcc-web",
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp (300+ Hours Coursework)",
    date: "Virtual - 2025",
    credentialUrl: "https://drive.google.com/file/d/1IHppp7rp_hAD9-8P6q68e8pSY0q-3I5r/view?usp=sharing"
  },
  {
    id: "cert-intellipaat",
    name: "Free DevOps Course Certification",
    issuer: "Intellipaat Academy",
    date: "Virtual - 2025",
    credentialUrl: "https://drive.google.com/file/d/1kTS3rQZWO-5fC-Ry1OhEJWLbM1whYbrS/view?usp=sharing"
  },
  {
    id: "cert-cyberzero",
    name: "CyberZero Security Certification",
    issuer: "Cybercure Technologies / CyberZero",
    date: "Virtual - 2025",
    credentialUrl: "https://drive.google.com/file/d/1BC9t9V_E7jZ8d1WC48ThRYTF1SpiHfBO/view?usp=sharing"
  },
  {
    id: "cert-ctf-hackathon",
    name: "Capture The Flag (CTF) Hackathon Badge",
    issuer: "Cybercure Technologies, Jaipur",
    date: "Jaipur - 2025",
    credentialUrl: "https://drive.google.com/file/d/1QHES0t3V78B2OtTlAAHVwi8ehueOKPYj/view?usp=sharing"
  }
];
