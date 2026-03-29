import { motion } from "framer-motion";
import { FiExternalLink, FiAward, FiCheck } from "react-icons/fi";
import Magnetic from "./ui/magnetic";

const certifications = [
    {
        name: "Claude Code in Action",
        issuer: "Anthropic",
        description: "Learned AI-assisted development workflows, prompt-based coding, and improving developer productivity using AI coding assistants.",
        skills: ["AI-Assisted Dev", "Prompt-Based Coding", "Claude Code", "Developer Productivity"],
        image: "/assets/certificates/claude-code.png",
        link: "http://verify.skilljar.com/c/p33r268bupav"
    },
    {
        name: "AI Fluency Framework & Foundations",
        issuer: "Anthropic",
        description: "Learned fundamentals of AI systems, prompt engineering, AI workflows, and practical applications of AI in software development.",
        skills: ["AI Fundamentals", "Prompt Engineering", "AI Workflows", "Software Automation"],
        image: "/assets/certificates/ai-fluency.png",
        link: "http://verify.skilljar.com/c/jiqtufuj8jvt"
    },
    {
        name: "Introduction to Prompt Engineering",
        issuer: "Skillearn",
        description: "Learned prompt engineering techniques, structured prompting, AI interaction design, and building workflows using AI tools.",
        skills: ["Structured Prompting", "Interaction Design", "AI Tooling", "Workflow Automation"],
        image: "/assets/certificates/prompt-eng.png",
        link: "https://simpli-web.app.link/e/VKOFFXjdU1b"
    },
    {
        name: "Frontend Development",
        issuer: "OneRoadmap",
        description: "Covered modern frontend development including HTML, CSS, JavaScript, React fundamentals, and responsive web design.",
        skills: ["React.js", "JavaScript", "HTML5", "Tailwind CSS", "Responsive Design"],
        image: "/assets/certificates/frontend-dev.png",
        link: "https://www.oneroadmap.io/skills/frontend/certificate/CERT-8D7C42E1"
    }
];

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

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 60, damping: 12 } 
    },
};

const CertificationsSection = () => {
    return (
        <section id="certifications" className="section-padding bg-card/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FiAward className="text-primary text-2xl" />
                        <h2 className="font-display text-3xl sm:text-4xl font-bold">
                            Professional <span className="text-gradient">Certifications</span>
                        </h2>
                    </div>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {certifications.map((cert) => (
                        <motion.a
                            key={cert.name}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-surface border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/5 cursor-pointer block"
                        >
                            {/* Image Preview */}
                            <div className="w-full md:w-48 h-32 md:h-auto shrink-0 rounded-xl overflow-hidden relative">
                                <img 
                                    src={cert.image} 
                                    alt={cert.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <FiExternalLink className="text-white text-2xl" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <div className="mb-3">
                                    <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{cert.issuer}</span>
                                    <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                                </div>
                                
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {cert.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {cert.skills.map(skill => (
                                        <span key={skill} className="px-2 py-1 rounded-md bg-secondary/80 text-[10px] font-medium text-foreground/80 border border-border flex items-center gap-1">
                                            <FiCheck className="text-primary text-[10px]" /> {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-2">
                                    <Magnetic>
                                        <div className="px-4 py-2 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground text-xs font-bold transition-all inline-flex items-center gap-2 border border-border/50 group-hover:border-primary/30">
                                            View Certificate <FiExternalLink size={14} />
                                        </div>
                                    </Magnetic>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CertificationsSection;
