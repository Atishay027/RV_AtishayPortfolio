import { motion } from "framer-motion";
import { 
    FiTarget, 
    FiPenTool, 
    FiCode, 
    FiLayers, 
    FiServer, 
    FiDatabase, 
    FiCheckCircle, 
    FiActivity, 
    FiGitCommit, 
    FiTerminal, 
    FiSmartphone, 
    FiMonitor, 
    FiUploadCloud, 
    FiPackage, 
    FiTool,
    FiRefreshCw 
} from "react-icons/fi";

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

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1,
        y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
};

const steps = [
    { icon: FiTarget, title: "Idea / Requirements", desc: "Brainstorming and gathering core requirements for the mobile app" },
    { icon: FiPenTool, title: "UI Design (Figma)", desc: "Crafting beautiful interfaces and user experiences using Figma" },
    { icon: FiCode, title: "React Native Dev", desc: "Writing cross-platform views and complex business logic" },
    { icon: FiLayers, title: "State Management", desc: "Structuring data effectively with Redux & Zustand" },
    { icon: FiServer, title: "API Integration", desc: "Connecting effortlessly to robust REST and GraphQL APIs" },
    { icon: FiDatabase, title: "Backend Services", desc: "Hooking up Firebase or Supabase ecosystems to the frontend" },
    { icon: FiCheckCircle, title: "Unit Testing", desc: "Guaranteeing isolated logic validity with comprehensive Jest tests" },
    { icon: FiActivity, title: "UI Flow Testing", desc: "Automating user flows and visual testing using Maestro" },
    { icon: FiGitCommit, title: "Git Version Control", desc: "Managing clean branches and peer reviews through Git" },
    { icon: FiTerminal, title: "Pre-commit Hooks", desc: "Enforcing quality standards and formatting with Husky hooks" },
    { icon: FiRefreshCw, title: "CI/CD Pipeline", desc: "Automated builds, testing, and deployment using GitHub Actions or GitLab CI" },
    { icon: FiSmartphone, title: "Android Build", desc: "Compiling highly optimized APK/AAB outputs via Android Studio" },
    { icon: FiMonitor, title: "iOS Build", desc: "Signing and building secure IPA artifacts natively using Xcode" },
    { icon: FiUploadCloud, title: "Deployment Prep", desc: "Pushing artifacts seamlessly to TestFlight and Google Play Console" },
    { icon: FiPackage, title: "Store Release", desc: "Managing staged rollouts and App Store review validation processes" },
    { icon: FiTool, title: "Monitoring & Updates", desc: "Tracking live metrics, analyzing crash reports, and shipping patches" },
];

const WorkflowSection = () => {
    return (
        <section id="workflow" className="section-padding bg-card/10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-7xl mx-auto px-4 md:px-8"
                >
                    <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        Development <span className="text-gradient">Workflow</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
                </motion.div>

                {/* Horizontal Timeline Container */}
                <div className="relative w-full overflow-x-auto pb-16 pt-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex gap-6 w-max px-4 sm:px-8 relative"
                    >
                        {/* Connecting Continuous Line */}
                        <div className="absolute top-[34px] left-8 right-8 h-1 bg-border/40 shrink-0" />
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-[34px] left-8 w-[95%] h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent shrink-0 origin-left" 
                        />

                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative w-[280px] shrink-0 snap-center group pt-2 pb-2"
                            >
                                {/* Timeline Icon Node (76px = 68px center) */}
                                <div className="relative z-10 w-14 h-14 mx-auto bg-card border-[3px] border-background rounded-full flex items-center justify-center shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)] group-hover:scale-110 group-hover:border-primary/40 transition-all mb-8">
                                    <step.icon className="text-primary drop-shadow-sm" size={24} />
                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 text-[10px] font-mono-code font-bold text-background bg-primary px-2 py-0.5 rounded-full shadow-md z-20">
                                        {i + 1}
                                    </div>
                                </div>
                                
                                {/* Content Card */}
                                <div className="relative z-10 p-6 rounded-xl bg-surface border border-border/50 shadow-md group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] transition-all text-center h-[180px] flex flex-col justify-center">
                                    <h3 className="font-display font-semibold text-foreground text-sm mb-3 group-hover:text-primary transition-colors leading-tight">{step.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
