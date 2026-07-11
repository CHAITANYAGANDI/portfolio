import type { ReactNode } from "react";

/**
 * ArchitectureDiagram — a high-level, cinematic software system map built with
 * real HTML/CSS/SVG (no images). Nodes are absolutely positioned against a
 * fixed viewBox coordinate system so the SVG connectors line up at any size.
 * On small screens it collapses into a compact vertical system flow.
 */

const VW = 620;
const VH = 720;

/* ------------------------------- icons -------------------------------- */

function S({ children, w = 24 }: { children: ReactNode; w?: number }) {
  return (
    <svg viewBox={`0 0 ${w} 24`} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const IconDesktop = () => <S><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></S>;
const IconMobile = () => <S><rect x="8" y="3" width="8" height="18" rx="2" /><path d="M11 18h2" /></S>;
const IconGlobe = () => <S><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18" /></S>;
const IconApi = () => <S><circle cx="12" cy="12" r="2.3" /><circle cx="5" cy="6" r="1.6" /><circle cx="19" cy="7" r="1.6" /><circle cx="6" cy="18" r="1.6" /><path d="M10.3 10.6 6.3 7.2M13.7 11 17.5 7.9M10.4 13.4 7 16.6" /></S>;
const IconShield = () => <S><path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6z" /><path d="m9.2 11.7 2 2 3.6-3.8" /></S>;
const IconCube = () => <S><path d="M12 2 3 7v10l9 5 9-5V7z" /><path d="M3 7l9 5 9-5" /><path d="M12 12v10" /></S>;
const IconEventBus = () => <S><path d="M3 13h18" /><path d="M7 13V9M12 13V9M17 13V9" /><circle cx="7" cy="7.5" r="1.5" /><circle cx="12" cy="7.5" r="1.5" /><circle cx="17" cy="7.5" r="1.5" /></S>;
const IconJobs = () => <S><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" /><path d="M20 3.5V8h-4.5" /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" /><path d="M4 20.5V16h4.5" /></S>;
const IconAi = () => <S><path d="M12 3.5c.7 4 1.8 5.1 5.8 5.8-4 .7-5.1 1.8-5.8 5.8-.7-4-1.8-5.1-5.8-5.8 4-.7 5.1-1.8 5.8-5.8Z" /><path d="M18.5 15.5c.3 1.6.8 2.1 2.4 2.4-1.6.3-2.1.8-2.4 2.4-.3-1.6-.8-2.1-2.4-2.4 1.6-.3 2.1-.8 2.4-2.4Z" /></S>;
const IconModel = () => <S><rect x="9" y="3" width="6" height="4.6" rx="1" /><rect x="3" y="16" width="6" height="4.6" rx="1" /><rect x="15" y="16" width="6" height="4.6" rx="1" /><path d="M12 7.6v3.4M6 16v-2.4h12V16" /></S>;
const IconVector = () => <S><rect x="3.5" y="3.5" width="7" height="7" rx="1.2" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.2" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.2" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.2" /></S>;
const IconData = () => <S><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></S>;
const IconCache = () => <S><path d="M12 3 21 8l-9 5-9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 17l9 5 9-5" /></S>;
const IconMonitor = () => <S><path d="M3 12h4l2-5 3.5 11L15 12h6" /></S>;

/* ------------------------------ node data ----------------------------- */

interface ArchNodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  icon?: ReactNode;
  icons?: ReactNode[];
  primary?: boolean;
  delay?: number;
}

const NODES: ArchNodeData[] = [
  { id: "client", label: "Client Apps", x: 58, y: 340, w: 84, h: 250, icons: [<IconDesktop key="d" />, <IconMobile key="m" />, <IconGlobe key="g" />], delay: 0 },
  { id: "api", label: "API Layer", x: 168, y: 340, w: 86, h: 150, icon: <IconApi />, delay: 0.4 },
  { id: "auth", label: "Auth", x: 300, y: 64, w: 104, h: 64, icon: <IconShield />, delay: 0.8 },
  { id: "app", label: "Application Services", x: 300, y: 340, w: 120, h: 88, icon: <IconCube />, primary: true, delay: 0.2 },
  { id: "event", label: "Event Bus", x: 300, y: 498, w: 104, h: 64, icon: <IconEventBus />, delay: 0.6 },
  { id: "jobs", label: "Background Jobs", x: 300, y: 598, w: 120, h: 64, icon: <IconJobs />, delay: 1 },
  { id: "ai", label: "AI Services", x: 438, y: 150, w: 110, h: 74, icon: <IconAi />, delay: 0.5 },
  { id: "model", label: "Model Gateway", x: 438, y: 340, w: 116, h: 74, icon: <IconModel />, delay: 0.9 },
  { id: "vector", label: "Vector Store", x: 560, y: 250, w: 98, h: 64, icon: <IconVector />, delay: 0.3 },
  { id: "data", label: "Data Store", x: 560, y: 366, w: 98, h: 64, icon: <IconData />, delay: 0.7 },
  { id: "cache", label: "Cache", x: 560, y: 482, w: 98, h: 64, icon: <IconCache />, delay: 1.1 },
  { id: "monitor", label: "Monitoring", x: 340, y: 672, w: 124, h: 64, icon: <IconMonitor />, delay: 0.5 },
];

const byId: Record<string, ArchNodeData> = Object.fromEntries(NODES.map((n) => [n.id, n]));

type Side = "l" | "r" | "t" | "b";
function pt(id: string, side: Side, off = 0): [number, number] {
  const n = byId[id];
  if (side === "l") return [n.x - n.w / 2, n.y + off];
  if (side === "r") return [n.x + n.w / 2, n.y + off];
  if (side === "t") return [n.x + off, n.y - n.h / 2];
  return [n.x + off, n.y + n.h / 2];
}

/* Build an orthogonal path with softly rounded corners */
function roundedPath(points: [number, number][], r = 13): string {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]}`;
  }
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const l1 = Math.hypot(x1 - x0, y1 - y0) || 1;
    const l2 = Math.hypot(x2 - x1, y2 - y1) || 1;
    const rr = Math.min(r, l1 / 2, l2 / 2);
    const bx = (x1 - (x1 - x0) / l1 * rr).toFixed(1);
    const by = (y1 - (y1 - y0) / l1 * rr).toFixed(1);
    const ax = (x1 + (x2 - x1) / l2 * rr).toFixed(1);
    const ay = (y1 + (y2 - y1) / l2 * rr).toFixed(1);
    d += ` L ${bx} ${by} Q ${x1} ${y1} ${ax} ${ay}`;
  }
  const last = points[points.length - 1];
  d += ` L ${last[0]} ${last[1]}`;
  return d;
}

interface Conn {
  pts: [number, number][];
  delay: number;
}

const CONNECTIONS: Conn[] = [
  { pts: [pt("client", "r"), pt("api", "l")], delay: 0 },
  { pts: [pt("api", "r"), pt("app", "l")], delay: 0.3 },
  { pts: [pt("auth", "b"), pt("app", "t")], delay: 0.6 },
  { pts: [pt("app", "b"), pt("event", "t")], delay: 0.45 },
  { pts: [pt("event", "b"), pt("jobs", "t")], delay: 0.9 },
  { pts: [pt("app", "t", 30), [330, 150], pt("ai", "l")], delay: 0.5 },
  { pts: [pt("ai", "b"), pt("model", "t")], delay: 0.75 },
  { pts: [pt("model", "r", -20), [560, 320], pt("vector", "b")], delay: 1.05 },
  { pts: [pt("app", "b", 45), [345, 430], [560, 430], pt("data", "b")], delay: 0.65 },
  { pts: [pt("app", "b", 52), [352, 489], pt("cache", "l", 7)], delay: 1.2 },
  { pts: [pt("jobs", "b"), pt("monitor", "t", -40)], delay: 1.1 },
  { pts: [pt("cache", "b"), [560, 672], pt("monitor", "r")], delay: 0.85 },
];

/* ------------------------------ components ---------------------------- */

export function ArchitectureNode({ node }: { node: ArchNodeData }) {
  const style = {
    left: `${(node.x / VW) * 100}%`,
    top: `${(node.y / VH) * 100}%`,
    width: `${(node.w / VW) * 100}%`,
    height: `${(node.h / VH) * 100}%`,
    animationDelay: `${node.delay ?? 0}s`,
  } as const;

  return (
    <div className={`arch-node${node.primary ? " primary" : ""}`} style={style}>
      {node.icons ? (
        <>
          <span className="arch-label arch-label-top">{node.label}</span>
          <span className="arch-node-stack">
            {node.icons.map((ic, i) => (
              <span className="arch-ico" key={i}>{ic}</span>
            ))}
          </span>
        </>
      ) : (
        <>
          <span className="arch-ico">{node.icon}</span>
          <span className="arch-label">{node.label}</span>
        </>
      )}
    </div>
  );
}

export function ConnectorLine({ d, delay }: { d: string; delay: number }) {
  return <path className="arch-link" d={d} style={{ animationDelay: `${delay}s` }} />;
}

export default function ArchitectureDiagram() {
  return (
    <div
      className="arch-wrap"
      role="img"
      aria-label="High-level software architecture diagram: client apps connect through an API layer and auth into central application services, which link to an event bus and background jobs, AI services and a model gateway, a vector store, data store and cache, with systems reporting to monitoring."
    >
      {/* Desktop / tablet: full 2D system map */}
      <div className="arch" aria-hidden="true">
        <svg className="arch-svg" viewBox={`0 0 ${VW} ${VH}`} fill="none" preserveAspectRatio="xMidYMid meet">
          <g className="arch-rings">
            <circle cx="320" cy="360" r="150" />
            <circle cx="320" cy="360" r="238" />
            <circle cx="320" cy="360" r="326" />
          </g>
          <g className="arch-links">
            {CONNECTIONS.map((c, i) => (
              <ConnectorLine key={i} d={roundedPath(c.pts)} delay={c.delay} />
            ))}
          </g>
        </svg>
        {NODES.map((n) => (
          <ArchitectureNode key={n.id} node={n} />
        ))}
      </div>

      {/* Mobile: compact vertical system flow */}
      <ul className="arch-flow" aria-hidden="true">
        {NODES.map((n) => (
          <li className={`arch-flow-item${n.primary ? " primary" : ""}`} key={n.id}>
            <span className="arch-flow-ico">{n.icon ?? n.icons?.[0]}</span>
            <span className="arch-flow-label">{n.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
