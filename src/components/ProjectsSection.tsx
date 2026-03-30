import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiExternalLink, FiSmartphone } from "react-icons/fi";
import { MouseEvent } from "react";

const projects = [
    {
        title: "TeeUPCC — Golf Social Platform",
        description:
            "A comprehensive golf ecosystem merging social networking with utility. Features live scoring, tournament management, and a rich social feed with video trimming and group chat.",
        tech: ["React Native", "Video Processing", "Real-time Scoring", "E-Commerce", "Socket.io"],
        features: ["Live scorecard tracking", "Social media feed & group chat", "Tee-time & equipment booking", "Integrated e-commerce shop"],
        color: "from-emerald-500/20 to-teal-500/20",
        status: "Development Phase",
    },
    {
        title: "CalmCloud — Student Wellbeing App",
        description:
            "A student-focused wellbeing platform built with React Native to promote emotional resilience. Features interactive stress management activities, relaxation tools, and progress tracking shared between students, teachers, and parents.",
        tech: ["React Native", "Firebase", "Redux", "Push Notifications", "Interactive UI", "Performance Optimization"],
        features: ["Breathing & relaxation tools", "Educational videos & quizzes", "Student-Teacher-Parent portal", "Guided audio-visual experiences"],
        color: "from-teal-500/20 to-cyan-500/20",
    },
    {
        title: "MusicLearn — Music Education App",
        description:
            "An interactive music education platform for students and teachers. Offers structured lessons for piano, guitar, cello, and violin, featuring quizzes and live sessions to improve skills through engaging activities.",
        tech: ["React Native", "Live Streaming", "Firebase", "Interactive Quizzes", "Video lesson streaming", "Practice session tracker"],
        features: ["Instrument-specific courses", "Live interactive sessions", "Skill-building quizzes", "Personalized progress tracking"],
        color: "from-purple-500/20 to-pink-500/20",
    },
    /* 
    {
        title: "BidNinja — AI Home Improvement",
        description:
            "An AI-powered home improvement marketplace that streamlines project bidding using computer vision. Analyzes user-submitted media to extract project details, allowing contractors to provide accurate remote bids without on-site visits.",
        tech: ["React Native", "AI/Computer Vision", "Firebase", "Node.js", "Stripe"],
        features: ["AI photo/video analysis", "Remote bidding system", "Verified professional matching", "Real-time project management"],
        color: "from-blue-500/20 to-indigo-500/20",
    },
    */
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 12 }
    },
};

const ProjectCard = ({ proj }: { proj: any }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-xl bg-surface border-border overflow-hidden hover:glow-primary-sm transition-all shadow-lg"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            hsl(var(--primary) / 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Card inner content layer to sit above spotlight background if needed, but here spotlight shines over elements slightly */}
            <div className="relative z-10 h-full flex flex-col">
                <div className={`h-40 bg-gradient-to-br ${proj.color} flex items-center justify-center relative border-b border-border/50`}>
                    <FiSmartphone className="text-primary drop-shadow-lg" size={48} />
                    <div className="absolute top-4 right-4">
                        <FiExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{proj.title}</h3>
                        {proj.status && (
                            <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider animate-pulse">
                                {proj.status}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{proj.description}</p>

                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-primary/80 mb-3 uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                            {proj.features.map((f: string) => (
                                <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary mt-0.5">•</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tech.map((t: string) => (
                            <span key={t} className="px-2.5 py-1 rounded-md bg-secondary/50 text-[10px] font-medium text-primary border border-primary/10 backdrop-blur-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="section-padding bg-card/30 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        Mobile <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((proj) => (
                        <ProjectCard key={proj.title} proj={proj} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
