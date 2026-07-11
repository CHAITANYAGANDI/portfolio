"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectsSection from "./ProjectsSection";
import ArchitectureDiagram from "./Architecture";

const email = "chaitanyagandi2000@gmail.com";
const phone = "+1 437-776-6822";
const github = "https://github.com/CHAITANYAGANDI";
const linkedin = "https://www.linkedin.com/in/chaitanyagandi/";
const resume = "/chaitanya-gandi-fullstack-resume.pdf";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const education = [
  {
    badge: "MSc",
    degree: "Master of Science in Information Systems",
    school: "Northeastern University, Toronto, ON",
    dates: "Jan 2024 – Dec 2025",
    meta: "GPA 3.9 / 4.0",
  },
  {
    badge: "B.Tech",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "QIS College of Engineering and Technology, India",
    dates: "Jul 2017 – Jul 2021",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 44, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

function BrandMark() {
  return (
    <a className="brand-mark" href="#top" aria-label="Chaitanya Sai Gandi home">
      GCS<span>.</span>
    </a>
  );
}

const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
  </svg>
);

const IconMoon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5z" />
  </svg>
);

const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  const nextLabel = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode`}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
}

function Header({
  active,
  theme,
  onToggleTheme,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  active: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}) {
  return (
    <motion.header
      className={menuOpen ? "site-header menu-open" : "site-header"}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <BrandMark />
      <div className="header-end">
        <nav id="primary-nav" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a
              className={active === item.id ? "active" : ""}
              href={`#${item.id}`}
              key={item.id}
              onClick={onCloseMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button
          type="button"
          className="menu-toggle"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </motion.header>
  );
}

const IconResume = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0z" />
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.55,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const IconCube = () => (
  <svg {...svgProps}><path d="M12 2 3 7v10l9 5 9-5V7z" /><path d="M3 7l9 5 9-5" /><path d="M12 12v10" /></svg>
);

const IconCode = () => (
  <svg {...svgProps}><path d="m9 8-4 4 4 4" /><path d="m15 8 4 4-4 4" /></svg>
);

const IconDatabase = () => (
  <svg {...svgProps}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
);

const IconLock = () => (
  <svg {...svgProps}><path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6z" /><rect x="9.4" y="10.6" width="5.2" height="4.2" rx="0.7" /><path d="M10.5 10.6v-1a1.5 1.5 0 0 1 3 0v1" /></svg>
);

const IconCloud = () => (
  <svg {...svgProps}><path d="M17.5 18a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 7 18z" /></svg>
);

const IconFrame = () => (
  <svg {...svgProps}><path d="M4 8V5a1 1 0 0 1 1-1h3" /><path d="M16 4h3a1 1 0 0 1 1 1v3" /><path d="M20 16v3a1 1 0 0 1-1 1h-3" /><path d="M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M8 12h8" /></svg>
);

const IconFlow = () => (
  <svg {...svgProps}><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="m8.2 11 7.6-4M8.2 13l7.6 4" /></svg>
);

const IconHexagon = () => (
  <svg {...svgProps}><path d="M12 3 20 7.5v9L12 21 4 16.5v-9z" /><path d="m12 8 3.5 2v4L12 16l-3.5-2v-4z" /></svg>
);

const IconDocOut = () => (
  <svg {...svgProps}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></svg>
);

const IconDoc = () => (
  <svg {...svgProps}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></svg>
);

const IconTrendDown = () => (
  <svg {...svgProps}><path d="M3 6l7 7 4-4 7 7" /><path d="M21 17v-5h-5" /></svg>
);

const IconTrendUp = () => (
  <svg {...svgProps}><path d="M3 17l6-6 4 4 8-8" /><path d="M16 7h5v5" /></svg>
);

const IconTarget = () => (
  <svg {...svgProps}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></svg>
);

const IconGear = () => (
  <svg {...svgProps}><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" /></svg>
);

const IconBarChart = () => (
  <svg {...svgProps}><path d="M3 20h18" /><path d="M6 20v-6M12 20V8M18 20v-9" /></svg>
);

function HeroButton({
  href,
  icon,
  label,
  arrow = false,
  download = false,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  arrow?: boolean;
  download?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className="glass-action"
      href={href}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {icon}
      <span>{label}</span>
      {arrow ? <IconArrow /> : null}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "split",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "split" | "stack";
}) {
  return (
    <motion.div
      className={`section-intro ${align}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="hero-greeting">Hi, I am</span>
          <span>Chaitanya</span>
          <span>Sai Gandi</span>
        </h1>
        <p className="eyebrow hero-role">Software Engineer</p>
        <p className="hero-subcopy">
          I design secure APIs, scalable backend systems, and full-stack applications.
        </p>
        <p className="hero-statement">
          I turn complex requirements into highly optimized software.
        </p>
        <div className="hero-actions">
          <HeroButton href={resume} icon={<IconResume />} label={<>View R&eacute;sum&eacute;</>} arrow download />
          <HeroButton href={linkedin} icon={<IconLinkedIn />} label="LinkedIn" external />
          <HeroButton href={github} icon={<IconGitHub />} label="GitHub" external />
          <HeroButton href={`mailto:${email}`} icon={<IconMail />} label="Contact Me" />
        </div>
      </div>
      <div className="hero-visual">
        <ArchitectureDiagram />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="page-shell">
        <motion.div
          className="about-copy"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <p className="eyebrow">About Me</p>
          <h2>
            Focused on building systems that <span>solve real problems.</span>
          </h2>
          <p>
            I work across the full stack with a strong focus on backend engineering,
            system design, and performance. My goal is to build software that is
            secure, scalable, and built for long-term impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const pipelineSteps = [
  { title: "Validation", desc: "Verify document quality and integrity.", icon: <IconShield /> },
  { title: "Classification", desc: "Identify document type and category.", icon: <IconDoc /> },
  { title: "Extraction", desc: "Extract key fields using AI models.", icon: <IconFrame /> },
  { title: "Python/Pandas Post-processing", desc: "Clean, normalize, and structure the data.", icon: <IconCode /> },
  { title: "Apache NiFi", desc: "Orchestrate data flows and routing.", icon: <IconFlow /> },
  { title: "Flask Services", desc: "Expose REST APIs for integrations.", icon: <IconCube /> },
  { title: "Kubernetes", desc: "Containerize and scale with reliability.", icon: <IconHexagon /> },
  { title: "Client-ready Output", desc: "Deliver standardized, actionable data.", icon: <IconDocOut /> },
];

const experienceMetrics = [
  {
    value: "80-90%",
    label: "reduction in manual data preparation",
    desc: "Significantly lowered manual effort, errors, and turnaround time.",
    icon: <IconTrendDown />,
  },
  {
    value: "~30%",
    label: "improvement in document-processing throughput",
    desc: "Higher throughput with consistent accuracy and reduced cycle time.",
    icon: <IconTrendUp />,
  },
];

const experienceDelivered = [
  {
    title: "Accuracy at scale",
    desc: "Built robust extraction pipelines with validation and human-in-the-loop checks to ensure high accuracy across document types.",
    icon: <IconTarget />,
  },
  {
    title: "End-to-end automation",
    desc: "Automated the complete flow from ingestion and classification to extraction, processing, and client-ready delivery.",
    icon: <IconGear />,
  },
  {
    title: "Reliable and resilient",
    desc: "Designed scalable microservices on Kubernetes with robust monitoring, retries, and fault-tolerant data flows.",
    icon: <IconShield />,
  },
  {
    title: "Business impact",
    desc: "Delivered measurable efficiency gains, reduced manual workload, and accelerated operations for the insurance workflow.",
    icon: <IconBarChart />,
  },
];

function Experience() {
  return (
    <section className="portfolio-section experience-section" id="experience">
      <div className="page-shell">
        <div className="experience-head">
          <motion.div
            className="experience-intro"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            <p className="eyebrow">Experience</p>
            <h2>Building impact<br />at scale<span>.</span></h2>
            <p className="experience-lead">
              Over 2+ years of experience delivering enterprise solutions, automation
              pipelines, and AI-powered applications that drive real business value.
            </p>
          </motion.div>
          <motion.div
            className="timeline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <div className="timeline-date">Sep 2021 – Dec 2023</div>
            <div className="timeline-line"><i /></div>
            <article className="timeline-card">
              <h3>Systems Engineer</h3>
              <p>Infosys Limited <span>•</span> Chennai, India</p>
              <ul>
                <li>Worked on an AI-powered insurance document extraction platform across 3 lines of business, configuring extraction fields, classification rules, and carrier-specific document patterns.</li>
                <li>Built Python and Pandas based post-processing logic to transform extracted JSON data and generate Excel outputs, reducing manual effort by 30-40%.</li>
                <li>Developed Apache NiFi automation pipelines integrated with extraction APIs and Flask services on Kubernetes, improving document-processing throughput by around 30%.</li>
              </ul>
            </article>
          </motion.div>
        </div>

        <motion.div
          className="pipeline-panel"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="panel-title">AI-powered insurance document extraction platform</h3>
          <div className="pipeline-flow">
            {pipelineSteps.map((step, index) => (
              <div className="pipeline-step" key={step.title}>
                <div className="pipeline-node">{index + 1}</div>
                <div className="pipeline-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="metric-row">
          {experienceMetrics.map((metric, index) => (
            <motion.div
              className="metric-card"
              key={metric.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-copy">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="delivered">
          <h3 className="delivered-title">What I delivered</h3>
          <div className="delivered-grid">
            {experienceDelivered.map((item, index) => (
              <motion.article
                className="delivered-card"
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
              >
                <div className="delivered-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    id: "backend",
    label: "Backend Engineering",
    desc: "Design and build reliable, secure, and scalable backend systems and services.",
    icon: <IconCube />,
    tags: ["Java 17", "Spring Boot", "REST APIs", "Microservices", "Spring Security"],
  },
  {
    id: "frontend",
    label: "Frontend Engineering",
    desc: "Build fast, responsive, and accessible user experiences with modern frameworks.",
    icon: <IconCode />,
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: "databases",
    label: "Databases",
    desc: "Model data, write efficient queries, and ensure consistency and performance at scale.",
    icon: <IconDatabase />,
    tags: ["PostgreSQL", "Redis", "MongoDB", "JPA / Hibernate", "SQL"],
  },
  {
    id: "security",
    label: "Security",
    desc: "Embed security in every layer to protect data, users, and systems.",
    icon: <IconLock />,
    tags: ["JWT", "Role-based Access", "OAuth 2.0", "BCrypt", "Rate Limiting"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    desc: "Automate delivery, operate resilient systems, and scale with confidence.",
    icon: <IconCloud />,
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions"],
  },
];

function Skills() {
  return (
    <section className="portfolio-section skills-section" id="skills">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Skills"
          title={<>Tech I work with<span>.</span></>}
          copy="A curated set of technologies and tools I use to build secure, scalable, and maintainable systems."
          align="stack"
        />
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-group"
              key={group.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <div className="skill-group-icon">{group.icon}</div>
              <div className="skill-group-copy">
                <h3>{group.label}</h3>
                <p>{group.desc}</p>
              </div>
              <div className="skill-group-tags">
                {group.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 3 9 4.5H3z" />
    <path d="M4 9h16" />
    <path d="M6 9v8M10 9v8M14 9v8M18 9v8" />
    <path d="M3 21h18" />
  </svg>
);

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
);

function Education() {
  return (
    <section className="portfolio-section education-section" id="education">
      <div className="page-shell">
        <div className="education-layout">
          <motion.div
            className="education-intro"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            <p className="eyebrow">Education</p>
            <h2>Education that<br />shaped how I build<span>.</span></h2>
            <p className="education-lead">
              Formal foundations that built my mindset. Curiosity and continuous
              learning that keep me growing.
            </p>
          </motion.div>
          <div className="education-timeline">
            {education.map((item, index) => (
              <motion.article
                className="edu-card"
                key={item.degree}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="edu-badge">{item.badge}</span>
                <div className="edu-body">
                  <h3>{item.degree}</h3>
                  <p className="edu-meta"><IconBuilding /><span>{item.school}</span></p>
                  <p className="edu-meta"><IconCalendar /><span>{item.dates}</span></p>
                </div>
                {item.meta ? <span className="edu-gpa">{item.meta}</span> : null}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="portfolio-section contact-section" id="contact">
      <div className="page-shell contact-layout">
        <SectionIntro
          eyebrow="Contact"
          title={<>Let's build<br />something great<span>.</span></>}
          copy="Open to full-time opportunities and exciting collaborations."
          align="stack"
        />
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-14%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-details">
            <a href={`mailto:${email}`}><span>Email</span>{email}</a>
            <a href={`tel:${phone.replaceAll(" ", "")}`}><span>Phone</span>{phone}</a>
            <p><span>Location</span>Toronto, ON, Canada</p>
            <div>
              <span>Connect</span>
              <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <BrandMark />
      <span>© 2026 Chaitanya Sai Gandi. All rights reserved.</span>
      <p>Toronto, ON, Canada <i aria-hidden="true">⌖</i></p>
    </footer>
  );
}

export default function PortfolioExperience() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("experience");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore storage errors (private mode, etc.) */
      }
      return next;
    });
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.08, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={reduceMotion ? "portfolio-root reduce-motion" : "portfolio-root"}>
      <div className="noise" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />
      <Header
        active={active}
        theme={theme}
        onToggleTheme={toggleTheme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
