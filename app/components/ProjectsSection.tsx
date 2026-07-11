import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Projects — clean 3-card grid.                                      */
/*  Brand accent blue #6da0ff / soft #a8c4ff. No green, no neon.       */
/* ------------------------------------------------------------------ */

const github = "https://github.com/CHAITANYAGANDI";

/* ---------------------------- icons -------------------------------- */

function IconArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[18px] w-[18px]">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[14px] w-[14px]">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[14px] w-[14px]">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

function IconAdmin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[14px] w-[14px]">
      <path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6z" />
      <rect x="9.4" y="10.6" width="5.2" height="4.4" rx="0.7" />
      <path d="M10.5 10.6v-1a1.5 1.5 0 0 1 3 0v1" />
    </svg>
  );
}

function IconKey() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[14px] w-[14px]">
      <circle cx="8" cy="8" r="4.5" />
      <path d="m11.2 11.2 8 8M16.5 16.5 19 14M14 19l2.5-2.5" />
    </svg>
  );
}

/* circular category icons */
function IconBank() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
      <path d="m12 3 8.5 4.2H3.5z" />
      <path d="M4 10h16" />
      <path d="M6 10v7M10 10v7M14 10v7M18 10v7" />
      <path d="M3.5 20.5h17" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.4v7.2l6-3.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
      <path d="M3 4h2.2l2.3 11a1 1 0 0 0 1 .8h8a1 1 0 0 0 1-.78L20.5 8H6.2" />
    </svg>
  );
}

/* --------------------- Small building blocks ----------------------- */

function TechTag({ label }: { label: string }) {
  return (
    <li className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[0.72rem] leading-none text-white/70">
      {label}
    </li>
  );
}

function LinkPill({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[0.74rem] text-white/75 transition duration-200 hover:-translate-y-0.5 hover:border-[#6da0ff]/45 hover:bg-[#6da0ff]/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6da0ff]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ArrowButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[0.02] text-white/70 transition duration-200 hover:-translate-y-0.5 hover:border-[#6da0ff]/50 hover:bg-[#6da0ff]/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6da0ff]"
    >
      <IconArrowUpRight />
    </a>
  );
}

/* ----------------------- Data ------------------------------------- */

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  github?: string;
  live?: string;
  admin?: string;
  auth?: string;
};

const projects: Project[] = [
  {
    id: "northledger",
    name: "NorthLedger",
    category: "Personal Finance Backend",
    description:
      "Secure finance platform to track accounts, transactions, budgets, and investments with analytics and goal tracking.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "REST APIs"],
    icon: <IconBank />,
    github: "https://github.com/CHAITANYAGANDI/Personal-Finance-API",
  },
  {
    id: "mediaverse",
    name: "Mediaverse",
    category: "Media Streaming Platform",
    description:
      "End-to-end media platform for browsing, streaming, and managing movies & series with admin dashboard, content workflows, and analytics.",
    tags: ["Angular", "TypeScript", "Node.js", "SSR", "RxJS"],
    icon: <IconPlay />,
    github: "https://github.com/CHAITANYAGANDI/Mediaverse",
  },
  {
    id: "trendytreasures",
    name: "TrendyTreasures",
    category: "E-commerce Microservices Platform",
    description:
      "Full-featured e-commerce platform with product catalog, secure cart & checkout, order tracking, and payments.",
    tags: ["React", "Node.js", "Flask", "MongoDB", "Stripe"],
    icon: <IconCart />,
    github: "https://github.com/CHAITANYAGANDI/Trendy_Treasures",
    admin: "https://ecommerce-test-qvvv.vercel.app/admin/dashboard",
    auth: "https://ecommerce-test-lemon-xi.vercel.app/",
  },
];

/* ----------------------- Card ------------------------------------- */

function ProjectShowcaseCard({ project }: { project: Project }) {
  const headingId = `project-${project.id}`;
  const primaryHref = project.live ?? project.github ?? github;
  return (
    <article
      aria-labelledby={headingId}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#6da0ff]/35 hover:bg-white/[0.04] hover:shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_0_1px_rgba(109,160,255,0.3),0_0_46px_-8px_rgba(109,160,255,0.35)] transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className="grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_32%,rgba(109,160,255,0.2),rgba(255,255,255,0.02))] text-[#9dc0ff] shadow-[0_0_30px_-10px_rgba(109,160,255,0.55)]"
        >
          {project.icon}
        </span>
        <ArrowButton href={primaryHref} label={`Open ${project.name}`} />
      </div>

      <h3 id={headingId} className="mt-6 text-[1.6rem] font-semibold leading-tight text-white">
        {project.name}
      </h3>
      <p className="mt-1.5 text-[0.95rem] font-medium text-[#6da0ff]">{project.category}</p>
      <p className="mt-4 text-[0.92rem] leading-relaxed text-white/60">{project.description}</p>

      <div className="mt-auto pt-7">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.github ? <LinkPill href={project.github} label="GitHub" icon={<IconGitHub />} /> : null}
          {project.live ? <LinkPill href={project.live} label="Live" icon={<IconGlobe />} /> : null}
          {project.admin ? <LinkPill href={project.admin} label="Admin" icon={<IconAdmin />} /> : null}
          {project.auth ? <LinkPill href={project.auth} label="Auth" icon={<IconKey />} /> : null}
        </div>
      </div>
    </article>
  );
}

/* ----------------------- Section ---------------------------------- */

export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section" aria-labelledby="projects-heading">
      <div className="page-shell">
        <header className="mb-14 max-w-[680px]">
          <p className="m-0 font-[family-name:var(--font-geist-mono),monospace] text-[0.92rem] uppercase tracking-[0.3em] text-[#a8c4ff]">
            Projects
          </p>
          <h2 id="projects-heading" className="mt-6 text-[2.6rem] font-medium leading-[1.12] text-white sm:text-[3rem]">
            Real problems.
            <br />
            Thoughtful systems<span className="text-[#a8c4ff]">.</span>
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.75] text-white/70">
            A selection of projects where engineering meets impact.
            <br className="hidden sm:block" /> Each project is built with clarity, scalability, and purpose.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectShowcaseCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
