import type { IconType } from "react-icons";
import {
    SiAndroid,
    SiApple,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFigma,
    SiFirebase,
    SiGit,
    SiGraphql,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedux,
    SiSocketdotio,
    SiSupabase,
    SiTypescript,
} from "react-icons/si";

interface TechItem {
    name: string;
    icon: IconType;
    note: string;
}

const TECH_STACK: TechItem[] = [
    { name: "React Native", icon: SiReact, note: "Primary mobile framework — 3.8+ yrs building cross-platform apps" },
    { name: "Next.js", icon: SiNextdotjs, note: "React web dashboards & admin panels" },
    { name: "TypeScript", icon: SiTypescript, note: "Type-safe code across all recent projects" },
    { name: "JavaScript", icon: SiJavascript, note: "ES6+ fundamentals, daily driver" },
    { name: "Redux", icon: SiRedux, note: "Predictable state for complex app flows" },
    { name: "FastAPI", icon: SiFastapi, note: "Backend services, auth & role-based access control" },
    { name: "Firebase", icon: SiFirebase, note: "Auth, Firestore & push notifications" },
    { name: "Supabase", icon: SiSupabase, note: "Postgres-backed backend for newer apps" },
    { name: "Node.js", icon: SiNodedotjs, note: "REST APIs & backend services" },
    { name: "Express", icon: SiExpress, note: "Lightweight API layer for Node backends" },
    { name: "GraphQL", icon: SiGraphql, note: "Query layer for flexible data fetching" },
    { name: "PostgreSQL", icon: SiPostgresql, note: "Relational data for web dashboards & backends" },
    { name: "Socket.IO", icon: SiSocketdotio, note: "Real-time chat & live features across web and mobile" },
    { name: "Git", icon: SiGit, note: "Branching workflows & code review" },
    { name: "Docker", icon: SiDocker, note: "Containerized dev & deployment environments" },
    { name: "Figma", icon: SiFigma, note: "Design handoff & UI prototyping" },
    { name: "Android", icon: SiAndroid, note: "Native builds via Android Studio" },
    { name: "iOS", icon: SiApple, note: "Native builds & App Store releases" },
];

// Rendered twice back-to-back so translating the track by exactly -50% loops seamlessly.
const LOOP_ITEMS = [...TECH_STACK, ...TECH_STACK];

const TechMarquee = () => {
    return (
        <div
            // Setting only overflow-x hidden doesn't leave overflow-y truly
            // visible per spec (the browser computes it to `auto` too, which
            // still clips) — so the per-item tooltip above needs real
            // reserved space via padding-top instead of relying on that.
            className="group/marquee relative w-full overflow-x-hidden pb-2 pt-16 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
            aria-hidden="true"
        >
            <div className="flex w-max animate-marquee gap-4 group-hover/marquee:[animation-play-state:paused]">
                {LOOP_ITEMS.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        className="group/tip relative flex w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-border/60 bg-card/95 px-3 py-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                    >
                        <tech.icon size={26} className="text-primary" />
                        <span className="text-center text-[11px] font-medium leading-tight text-foreground/80">
                            {tech.name}
                        </span>

                        <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-max max-w-[200px] -translate-x-1/2 translate-y-1 rounded-lg bg-foreground px-3 py-1.5 text-xs text-background opacity-0 shadow-lg transition-all duration-200 group-hover/tip:translate-y-0 group-hover/tip:opacity-100">
                            {tech.note}
                            <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
