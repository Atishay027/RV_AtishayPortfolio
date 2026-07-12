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
        color: "from-primary/20 to-secondary/20",
        status: "Development Phase",
    },
    {
        title: "CalmCloud — Student Wellbeing App",
        description:
            "A student-focused wellbeing platform built with React Native to promote emotional resilience. Features interactive stress management activities, relaxation tools, and progress tracking shared between students, teachers, and parents.",
        tech: ["React Native", "Firebase", "Redux", "Push Notifications", "Interactive UI", "Performance Optimization"],
        features: ["Breathing & relaxation tools", "Educational videos & quizzes", "Student-Teacher-Parent portal", "Guided audio-visual experiences"],
        color: "from-secondary/20 to-primary/20",
    },
    {
        title: "MusicLearn — Music Education App",
        description:
            "An interactive music education platform for students and teachers. Offers structured lessons for piano, guitar, cello, and violin, featuring quizzes and live sessions to improve skills through engaging activities.",
        tech: ["React Native", "Live Streaming", "Firebase", "Interactive Quizzes", "Video lesson streaming", "Practice session tracker"],
        features: ["Instrument-specific courses", "Live interactive sessions", "Skill-building quizzes", "Personalized progress tracking"],
        color: "from-secondary/20 to-primary/20",
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
            className="group relative rounded-xl bg-[#f7f1df] border border-border/50 overflow-hidden hover:glow-primary-sm transition-all shadow-lg"
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
                <div className={`h-40 bg-gradient-to-br ${proj.color} flex items-center justify-center relative border-b border-[#e8dcc4]`}>
                    <FiSmartphone className="text-green-700 drop-shadow-lg" size={48} />
                    <div className="absolute top-4 right-4">
                        <FiExternalLink className="text-green-700" size={18} />
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold text-lg text-[#2d5a3d] heading-hide transition-colors">{proj.title}</h3>
                        {proj.status && (
                            <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-green-600/20 text-green-700 border border-green-600/30 uppercase tracking-wider animate-pulse">
                                {proj.status}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-[#4a6b5b] mb-6 leading-relaxed flex-1">{proj.description}</p>

                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-[#2d5a3d] mb-3 uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                            {proj.features.map((f: string) => (
                                <li key={f} className="text-xs text-[#4a6b5b] flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5">•</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tech.map((t: string) => (
                            <span key={t} className="px-2.5 py-1 rounded-md bg-green-600/10 text-[10px] font-medium text-green-700 border border-green-600/20 backdrop-blur-sm">
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
        <section id="projects" className="section-padding theme-green bg-background relative group section-hover-heading">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 right-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl"
                    />
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 heading-hide">
                        <span className="text-foreground">Mobile</span> <span className="text-[#f7f1df]">Projects</span>
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
