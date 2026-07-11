export type Project = {
  id: string;
  chapter: string;
  name: string;
  eyebrow: string;
  statement: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  challenges: string[];
  decisions: string[];
  security: string;
  performance: string;
  contribution: string;
  repository?: string;
  live?: string;
  visual: "audio" | "knowledge" | "finance";
  accent: string;
};

export const projects: Project[] = [
  {
    id: "meetbrief",
    chapter: "02 / Selected work",
    name: "MeetBrief AI",
    eyebrow: "Meeting intelligence SaaS",
    statement: "Conversations become decisions, tasks, and searchable knowledge.",
    problem:
      "Important decisions disappear inside long meetings, fragmented notes, and disconnected follow-up tools.",
    solution:
      "A multimodal meeting intelligence platform that turns audio, video, and notes into grounded summaries, topics, actions, timeline highlights, and connected workflows.",
    features: [
      "Speaker diarization and transcription",
      "Topic, summary, and action-item extraction",
      "Citation-grounded meeting answers",
      "Gmail, Outlook, Calendar, To Do, and Notion integrations",
      "AI agents and MCP-connected workflows",
      "Timeline highlights and searchable meeting memory",
    ],
    stack: [
      "Java", "Spring Boot", "Python", "FastAPI", "React", "Next.js",
      "Kafka", "Redis", "PostgreSQL", "Vector DB", "AWS", "Docker",
    ],
    challenges: [
      "Coordinating long-running AI jobs without blocking product workflows",
      "Preserving citations from source media through summaries and answers",
      "Connecting external productivity tools through reliable, resumable actions",
    ],
    decisions: [
      "Separated deterministic product services from probabilistic AI processing",
      "Used event-driven boundaries for transcription, enrichment, and integration work",
      "Kept source references as first-class records for grounded output",
    ],
    security:
      "Scoped integration permissions, tenant-aware data ownership, protected object access, and short-lived service credentials.",
    performance:
      "Asynchronous media processing, Redis-backed hot paths, Kafka work distribution, and independent horizontal scaling for AI services.",
    contribution:
      "Designed the product and system boundaries across the Spring service layer, FastAPI intelligence services, event workflows, data model, and React/Next.js experience.",
    visual: "audio",
    accent: "#d9ff62",
  },
  {
    id: "mentora",
    chapter: "02 / Selected work",
    name: "Mentora",
    eyebrow: "Grounded AI study assistant",
    statement: "Scattered learning material resolves into one trusted study system.",
    problem:
      "Learners lose context across documents, media, notes, and generic AI answers that cannot be traced back to their material.",
    solution:
      "A multimodal learning workspace that builds a searchable knowledge base from uploaded resources, then produces grounded answers and quizzes from that same evidence.",
    features: [
      "PDF, Word, text, image, audio, and video ingestion",
      "YouTube resource processing",
      "Searchable personal knowledge base",
      "Grounded question answering",
      "Material-aware quiz generation",
      "RAG, embeddings, and vector retrieval",
    ],
    stack: [
      "React", "TypeScript", "Python", "FastAPI", "RAG", "Embeddings",
      "Vector Search", "PostgreSQL", "Object Storage",
    ],
    challenges: [
      "Normalizing very different resource formats into a consistent knowledge model",
      "Retrieving useful context without allowing answers beyond uploaded evidence",
      "Creating quiz questions that remain faithful to the source material",
    ],
    decisions: [
      "Built ingestion as a staged pipeline with format-specific adapters",
      "Separated retrieval, answer generation, and citation assembly",
      "Used the same indexed evidence for both Q&A and assessment generation",
    ],
    security:
      "User-owned collections, isolated retrieval namespaces, validated uploads, and controlled access to stored source material.",
    performance:
      "Background ingestion jobs, chunk-level indexing, cached retrieval metadata, and progressive processing states for large resources.",
    contribution:
      "Defined the ingestion architecture, grounded retrieval workflow, FastAPI intelligence layer, and React study experience.",
    visual: "knowledge",
    accent: "#9cd8ff",
  },
  {
    id: "northledger",
    chapter: "02 / Selected work",
    name: "NorthLedger",
    eyebrow: "Secure personal finance system",
    statement: "Money movement modeled with explicit ownership, integrity, and control.",
    problem:
      "Personal finance tools must make daily money movement simple without weakening authorization, balance integrity, or auditability.",
    solution:
      "A secure finance application for accounts, transactions, transfers, budgets, recurring expenses, categories, and analytical dashboards.",
    features: [
      "JWT authentication and refresh tokens",
      "Accounts, transactions, and transfers",
      "Budgets and recurring expenses",
      "Category and dashboard analytics",
      "Ownership validation",
      "Swagger-documented secure APIs",
    ],
    stack: [
      "Java", "Spring Boot", "Spring Security", "React", "TypeScript",
      "PostgreSQL", "JPA", "Docker", "Swagger",
    ],
    challenges: [
      "Keeping balances consistent across linked credit, debit, and transfer operations",
      "Applying ownership checks uniformly across a broad financial domain",
      "Producing useful monthly analytics from normalized transactional data",
    ],
    decisions: [
      "Modeled money movement as transactional domain operations",
      "Centralized user-scope authorization before data access",
      "Derived dashboards from normalized records instead of duplicated totals",
    ],
    security:
      "JWT access and refresh flows, role-based authorization, per-user ownership validation, input constraints, and protected financial mutations.",
    performance:
      "Indexed ownership and date queries, aggregate dashboard operations, bounded result sets, and concurrency-safe transaction handling.",
    contribution:
      "Designed the domain model, Spring Security boundary, REST contract, transfer workflow, PostgreSQL schema, and dashboard aggregations.",
    repository: "https://github.com/CHAITANYAGANDI/Personal-Finance-API",
    visual: "finance",
    accent: "#ffb36b",
  },
];

export const architectureServices = [
  {
    id: "frontend",
    label: "Product interface",
    tech: "Next.js / React",
    responsibility: "Renders fast, accessible product workflows and coordinates client state.",
    communication: "REST, server rendering, streamed responses",
    ownership: "Presentation state and interaction contracts",
    pattern: "Feature modules with server/client boundaries",
    scaling: "CDN distribution and stateless rendering",
    failure: "Progressive loading, retries, and explicit empty/error states",
  },
  {
    id: "gateway",
    label: "API gateway",
    tech: "Spring Cloud",
    responsibility: "Provides the external API boundary, routing, policy, and request context.",
    communication: "REST and gRPC",
    ownership: "Routing policy, rate limits, correlation IDs",
    pattern: "Gateway and backend-for-frontend",
    scaling: "Stateless horizontal replicas",
    failure: "Timeouts, circuit breakers, and controlled degradation",
  },
  {
    id: "services",
    label: "Domain services",
    tech: "Spring Boot",
    responsibility: "Owns business rules, authorization, transactions, and domain data.",
    communication: "REST, gRPC, Kafka events",
    ownership: "Bounded domain records in PostgreSQL",
    pattern: "Hexagonal services and transactional outbox",
    scaling: "Independent service replicas by demand",
    failure: "Idempotency, retries, dead-letter paths, and compensating actions",
  },
  {
    id: "intelligence",
    label: "AI intelligence",
    tech: "FastAPI / Agents",
    responsibility: "Runs retrieval, transcription, enrichment, and agent workflows.",
    communication: "REST, Kafka jobs, vector queries",
    ownership: "Model workflows, embeddings, and grounded evidence",
    pattern: "Pipeline orchestration with tool-using agents",
    scaling: "Queue-driven workers with workload-specific pools",
    failure: "Checkpointed jobs, bounded retries, validation, and human-visible status",
  },
  {
    id: "stream",
    label: "Event fabric",
    tech: "Kafka / Redis",
    responsibility: "Decouples long-running work and accelerates frequently accessed state.",
    communication: "Events, consumer groups, cache operations",
    ownership: "Transient events, locks, and cached projections",
    pattern: "Publish-subscribe and cache-aside",
    scaling: "Partitioned topics and clustered cache nodes",
    failure: "Replay, consumer offsets, TTLs, and dead-letter topics",
  },
  {
    id: "data",
    label: "Knowledge and data",
    tech: "PostgreSQL / Vector DB",
    responsibility: "Stores durable domain truth and semantically searchable evidence.",
    communication: "SQL, indexed vector search",
    ownership: "Normalized records, documents, citations, and embeddings",
    pattern: "Database per boundary with retrieval projections",
    scaling: "Read replicas, indexes, partitioning, and managed vector capacity",
    failure: "Transactions, backups, migrations, and recoverable ingestion",
  },
  {
    id: "platform",
    label: "Cloud platform",
    tech: "AWS / Kubernetes",
    responsibility: "Runs, observes, and secures services across environments.",
    communication: "Ingress, service discovery, metrics, and logs",
    ownership: "Runtime policy, secrets, object storage, and telemetry",
    pattern: "Container orchestration and infrastructure automation",
    scaling: "Autoscaling workloads and managed cloud primitives",
    failure: "Health probes, rollout controls, centralized logging, and alerting",
  },
];

export const capabilities = [
  {
    id: "backend",
    label: "Backend engineering",
    summary: "Reliable services with explicit boundaries and secure domain behavior.",
    skills: ["Java", "Spring Boot", "Spring Security", "JPA", "REST", "Microservices", "API Gateways", "SOLID", "Testing", "Rate Limiting"],
    applied: "NorthLedger domain workflows, MeetBrief service boundaries, and enterprise document-processing APIs.",
  },
  {
    id: "frontend",
    label: "Frontend engineering",
    summary: "Accessible product interfaces that make complex systems understandable.",
    skills: ["React", "Next.js", "TypeScript", "Redux", "HTML", "CSS", "Tailwind", "Responsive UI", "Accessibility", "UI Architecture"],
    applied: "MeetBrief workflow surfaces, Mentora learning journeys, and responsive analytical interfaces.",
  },
  {
    id: "ai",
    label: "AI engineering",
    summary: "Grounded intelligence designed as a dependable product subsystem.",
    skills: ["Python", "FastAPI", "LangChain", "LangGraph", "RAG", "Embeddings", "Vector DBs", "AI Agents", "MCP", "OpenAI"],
    applied: "Citation-grounded meeting intelligence, multimodal study retrieval, and agent-connected productivity workflows.",
  },
  {
    id: "data",
    label: "Data and messaging",
    summary: "Data movement built for traceability, throughput, and asynchronous work.",
    skills: ["PostgreSQL", "Redis", "Kafka", "ETL", "Pandas", "Apache NiFi", "Async Jobs", "Event-Driven Architecture"],
    applied: "Insurance extraction pipelines, event-driven AI processing, and transactional finance data.",
  },
  {
    id: "cloud",
    label: "Cloud and DevOps",
    summary: "Production-aware delivery across containers, automation, and observability.",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Monitoring", "Logging", "Performance Testing"],
    applied: "Kubernetes document services, independently scalable AI workloads, and containerized project environments.",
  },
];

export const navItems = [
  { id: "origin", label: "Origin" },
  { id: "work", label: "Work" },
  { id: "architecture", label: "Architecture" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];
