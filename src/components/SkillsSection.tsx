import { motion } from "framer-motion";

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
        transition: { type: "spring", stiffness: 80, damping: 15 }
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
        transition: { type: "spring", stiffness: 150, damping: 10 }
    },
};

const skillCategories = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "C++"],
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React Native", "Express.js", "React.js", "Node.js"],
    },
    {
        title: "Mobile Development",
        skills: ["React Native", "Expo", "Android Studio", "Xcode", "App Store Deployment", "Play Store Deployment", "Push Notifications", "Deep Linking"],
    },
    {
        title: "State Management",
        skills: ["Redux", "Zustand", "Context API"],
    },
    {
        title: "Backend & APIs",
        skills: ["REST APIs", "Firebase", "Supabase", "Socket.IO", "Authentication"],
    },
    {
        title: "Testing & Quality",
        skills: ["Jest", "Maestro", "ESLint", "Prettier", "Husky"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "GitLab", "CI/CD", "Jira", "Figma", "Docker"],
    },
    {
        title: "Core Concepts",
        skills: ["Data Structures", "OOPS", "Pagination", "Performance Optimization"],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="section-padding bg-card/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((cat) => (
                        <motion.div
                            key={cat.title}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-xl bg-surface hover:glow-primary-sm transition-all shadow-lg border border-border/50"
                        >
                            <h3 className="font-display font-semibold text-primary mb-4">{cat.title}</h3>
                            <motion.div
                                variants={pillContainerVariants}
                                initial="hidden"
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
