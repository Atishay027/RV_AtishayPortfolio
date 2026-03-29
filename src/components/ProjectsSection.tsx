import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiExternalLink, FiSmartphone } from "react-icons/fi";
import { MouseEvent } from "react";

const projects = [
    {
        title: "CalmCloud — Mental Health App",
        description:
            "A cross-platform mental health and wellness mobile app built with React Native featuring guided meditation, mood tracking, journaling, and therapist booking with real-time chat support.",
        tech: ["React Native", "Firebase", "Redux", "Socket.IO", "Push Notifications"],
        features: ["Mood tracking & analytics", "Guided meditation player", "Real-time chat with therapists", "Push notification reminders"],
        color: "from-teal-500/20 to-cyan-500/20",
    },
    {
        title: "Home Services Marketplace",
        description:
            "A full-featured mobile marketplace app connecting homeowners with local service providers. Features real-time booking, in-app payments, location-based search, and rating system.",
        tech: ["React Native", "Firebase", "Google Maps API", "Stripe", "Node.js"],
        features: ["Real-time booking system", "GPS-based provider matching", "In-app payments via Stripe", "Ratings & review system"],
        color: "from-blue-500/20 to-indigo-500/20",
    },
    {
        title: "Music Learning Academy",
        description:
            "An interactive music learning platform mobile app with video lessons, practice tracking, progress dashboard, and instrument tutorials for students of all levels.",
        tech: ["React Native", "Supabase", "Zustand", "Video Player", "REST API"],
        features: ["Video lesson streaming", "Practice session tracker", "Progress dashboard", "Instrument-specific courses"],
        color: "from-purple-500/20 to-pink-500/20",
    },
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
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
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
