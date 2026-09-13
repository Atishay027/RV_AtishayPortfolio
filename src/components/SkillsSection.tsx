import { motion, useReducedMotion } from "framer-motion";
import {
    FiCode,
    FiSmartphone,
    FiGlobe,
    FiServer,
    FiLayers,
    FiCheckCircle,
    FiTool,
    FiCpu,
} from "react-icons/fi";
import TechMarquee from "@/components/TechMarquee";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const pillContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const skillCategories = [
    {
        title: "Languages",
        icon: FiCode,
        skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "Kotlin", "Swift", "C++"],
    },
    {
        title: "Mobile",
        icon: FiSmartphone,
        skills: ["React Native", "React Navigation", "Redux", "Zustand", "NativeWind", "MMKV", "Native Modules (Swift/Kotlin)", "Push Notifications", "Deep Linking"],
    },
    {
        title: "Web & Frontend",
        icon: FiGlobe,
        skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web UI"],
    },
    {
        title: "Backend & Databases",
        icon: FiServer,
        skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.IO", "JWT/OAuth", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
        title: "App & Web Experience",
        icon: FiLayers,
        skills: ["Authentication", "Role-Based Access Control", "Onboarding Flows", "Offline Caching", "Performance Optimization"],
    },
    {
        title: "Testing & Delivery",
        icon: FiCheckCircle,
        skills: ["Jest", "React Native Testing Library", "GitHub Actions", "Docker", "App Store Connect", "Play Console", "Crashlytics", "Sentry"],
    },
    {
        title: "Tools & Methodologies",
        icon: FiTool,
        skills: ["Git", "GitHub", "GitLab", "Android Studio", "Xcode", "Jira", "Figma", "Postman", "Agile/Scrum", "Code Reviews", "DSA", "OOPs"],
    },
    {
        title: "AI & Productivity",
        icon: FiCpu,
        skills: ["Claude Code", "Cursor", "Prompt Engineering", "AI-assisted Development"],
    },
];

const SkillsSection = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="skills" className="section-padding theme-beige bg-[#f7f1df] group section-hover-heading">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], scale: [1, 1.02, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 right-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl"
                    />
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 heading-hide">
                        <span className="text-foreground">Technical</span> <span className="text-primary">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
                </motion.div>

                <div className="mb-12">
                    <TechMarquee />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((cat) => (
                        <motion.div
                            key={cat.title}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.01, rotateX: 2 }}
                            className="p-6 rounded-xl bg-card/95 hover:glow-primary-sm transition-all shadow-lg border border-border/70"
                        >
                            <h3 className="flex items-center gap-2 font-display font-semibold text-primary mb-4 heading-hide">
                                <cat.icon size={18} className="shrink-0" />
                                {cat.title}
                            </h3>
                            <motion.div
                                variants={pillContainerVariants}
                                initial={shouldReduceMotion ? false : "hidden"}
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {cat.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={pillVariants}
                                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary)/0.1)" }}
                                        className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-secondary-foreground border border-border cursor-pointer transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
