import { motion } from "framer-motion";

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
        transition: { type: "spring", stiffness: 70, damping: 14 } 
    },
};

const experiences = [
    {
        company: "Dotsquares Technologies",
        role: "Associate Programmer (React Native Developer)",
        period: "Sep 2025 – Present",
        points: [
            "Worked on TeeUPCC App, a multi-module golf booking and social commerce platform, contributing to 10+ core features including course/event booking, live scorecards, in-app chat, social feeds, and e-commerce.",
            "Developed and maintained 2+ scalable cross-platform mobile applications using React Native for mental wellbeing (CalmCloud) and safety (HomeSafeAlert) domains.",
            "Modernized 1+ live mobile applications by replacing deprecated libraries, improving navigation architecture, and applying performance optimization techniques to enhance scalability.",
            "Executed end-to-end mobile app releases for iOS and Android, managing sprint-based development, Jira ticket tracking, build generation, and store compliance.",
            "Collaborated with cross-functional teams (UI/UX, Backend, QA) to deliver high-quality features following Agile/Scrum methodologies and strict production timelines.",
        ],
    },
    {
        company: "DataPecan",
        role: "Software Developer",
        period: "Apr 2024 – Aug 2025",
        points: [
            "Led the end-to-end development of a Music Learning Academy mobile application with 15+ interactive lessons, achieving a 30% improvement in onboarding completion.",
            "Engineered a comprehensive suite of unit and integration tests, increasing code coverage from 60% to 90% and improving overall app stability by 20% including fixing crash causes.",
            "Implemented real-time features and state management solutions using Redux/Zustand to ensure seamless data synchronization and high-performance user experiences.",
            "Optimized application performance through advanced profiling and memory management, reducing overall crash rates and significantly improving responsiveness.",
        ],
    },
    {
        company: "Hidden Talent",
        role: "Junior Software Developer",
        period: "Jun 2023 – Mar 2024",
        points: [
            "Delivered and optimized the GreenValley School mobile application using React Native, focusing on UI consistency and performance.",
            "Collaborated with senior developers in an Agile environment to integrate REST APIs, resolve 20+ critical bugs, and deliver sprint-based features on schedule.",
            "Assisted in generating stable Android and iOS builds using Android Studio and Xcode, ensuring 100% compliance with platform-specific store guidelines.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
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
                                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary glow-primary-sm group-hover:scale-150 transition-transform duration-300 z-10" />

                                <div className="p-6 rounded-xl bg-surface border border-border/50 shadow-md group-hover:glow-primary-sm group-hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                                        <span className="text-xs font-mono-code text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md mt-2 sm:mt-0">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 font-medium">{exp.role}</p>
                                    <ul className="space-y-2">
                                        {exp.points.map((p, j) => (
                                            <li key={j} className="text-sm text-muted-foreground flex gap-2.5 items-start">
                                                <span className="text-primary mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                                <span className="leading-relaxed">{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
