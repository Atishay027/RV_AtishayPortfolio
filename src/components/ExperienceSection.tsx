import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const experiences = [
    {
        company: "Dotsquares Technologies",
        role: "Associate Programmer (Full-Stack & Mobile)",
        period: "Sep 2025 – Present",
        points: [
            "Mobile: Contributed to 10+ core features on a Golf Enterprise Community App, a multi-module React Native golf booking and social-commerce platform — course/event booking, live scorecards, in-app chat, social feeds, food ordering, e-commerce, and subscriptions.",
            "Mobile: Engineered and bridged 3-5 custom native modules (Swift on iOS, Kotlin on Android) to integrate vendor SDKs beyond standard RN libraries, and implemented offline caching for core flows; enabled Hermes and explored Fabric/TurboModules (New Architecture).",
            "Backend/Web: Architected backend services with FastAPI and PostgreSQL (authentication, role-based access control, REST APIs) and developed React admin/vendor/super-admin dashboards for catalog, order, booking, content, and user management, with real-time features via Socket.IO shared across web and mobile.",
            "Full-stack delivery: Delivered UMNO end-to-end — consumer app, web application, and admin panel — for an Australian food-saving marketplace connecting restaurants with surplus meals to nearby diners, including vendor management and CO2/waste reporting.",
            "Release ownership: Authored Jest test suites and configured CI/CD pipelines; owned end-to-end release cycles (build signing, provisioning) across Agile sprints, shipping 9 production apps and their web panels with Crashlytics/Sentry monitoring.",
        ],
    },
    {
        company: "DataPecan",
        role: "Software Developer (Mobile & Web)",
        period: "Apr 2024 – Aug 2025",
        points: [
            "Mobile/Web: Led end-to-end development of a Music Learning Academy platform — a React Native app with 15+ interactive lessons and teacher-guided workflows, plus a web management side for lessons, users, and content — reaching production with a ~30% improvement in onboarding completion.",
            "Backend: Built 12 REST API endpoints and integrated the frontend with a Firebase backend.",
            "Quality: Engineered a comprehensive Jest unit/integration test suite, raising code coverage from 60% to 90% and cutting crash-related instability by ~20%, resolving key crash causes in two-week Agile sprints with product and design.",
        ],
    },
    {
        company: "Hidden Talent",
        role: "Junior Software Developer (Full-Stack)",
        period: "Jan 2023 – Mar 2024",
        points: [
            "Full-stack: Delivered the GreenValley School platform (React Native mobile app + web) supporting academic and communication workflows for students, staff, and administrators, integrating REST APIs alongside senior developers.",
            "Quality: Resolved 20+ critical bugs, improving platform robustness by ~15% through consistent Agile sprint delivery.",
        ],
    },
];

const ExperienceSection = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="experience" className="section-padding theme-green bg-background group section-hover-heading">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 right-0 h-20 w-20 rounded-full bg-primary/10 blur-3xl"
                    />
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 heading-hide">
                        <span className="text-foreground">Work</span> <span className="text-[#f7f1df]">Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

                    <motion.div
                        variants={containerVariants}
                        initial={shouldReduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-10"
                    >
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                variants={itemVariants}
                                className="relative pl-12 md:pl-16 group"
                            >
                                {/* Dot */}
                                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-green-600 glow-primary-sm group-hover:scale-150 transition-transform duration-300 z-10" />

                                <motion.div
                                    whileHover={{ y: -6, scale: 1.01, rotateX: 2 }}
                                    className="p-6 rounded-xl bg-[#f7f1df] border border-[#e8dcc4] shadow-md group-hover:glow-primary-sm transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <h3 className="font-display font-semibold text-lg text-[#2d5a3d] heading-hide transition-colors">{exp.company}</h3>
                                        <span className="text-xs font-mono-code text-green-700 bg-green-600/10 px-2.5 py-1 rounded-md mt-2 sm:mt-0">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-[#4a6b5b] mb-4 font-medium">{exp.role}</p>
                                    <ul className="space-y-2">
                                        {exp.points.map((p, j) => (
                                            <li key={j} className="text-sm text-[#4a6b5b] flex gap-2.5 items-start">
                                                <span className="text-green-700 mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                                <span className="leading-relaxed">{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
