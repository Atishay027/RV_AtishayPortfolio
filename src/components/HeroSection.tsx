import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import Magnetic from "@/components/ui/magnetic";

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden section-padding pt-28">
            {/* Background glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-6">
                        <HiDevicePhoneMobile className="text-primary" />
                        <span>React Native Mobile Developer</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Hi, I'm{" "}
                        <span className="text-gradient">Atishay Jain</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                        React Native developer with 3+ years of experience building cross-platform
                        mobile applications for Android and iOS using React Native, TypeScript, JavaScript,
                        Firebase, Supabase, and REST APIs. Experienced in building scalable apps, app releases,
                        performance optimization, and production deployments.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
                        <Magnetic>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:scale-105 transition glow-primary-sm block"
                            >
                                View Projects <FiArrowRight />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/50 hover:bg-secondary/50 transition block"
                            >
                                Contact Me
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="/assets/resume/AtishayJain_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/50 hover:bg-secondary/50 transition block"
                            >
                                <FiDownload /> Resume
                            </a>
                        </Magnetic>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                        {[
                            { icon: FiGithub, href: "https://github.com/Atishay027", label: "GitHub" },
                            { icon: FiLinkedin, href: "https://www.linkedin.com/in/atishayjain027/", label: "LinkedIn" },
                            { icon: FiMail, href: "mailto:atishay027@gmail.com", label: "Email" },
                        ].map((s) => (
                            <Magnetic key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition block"
                                >
                                    <s.icon size={18} />
                                </a>
                            </Magnetic>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Phone mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                    transition={{ 
                        opacity: { duration: 0.8 },
                        scale: { duration: 1, type: "spring", bounce: 0.4 },
                        rotateY: { duration: 1.2, ease: "easeOut" },
                        rotateX: { duration: 1.2, ease: "easeOut" }
                    }}
                    style={{ perspective: 1000 }}
                    className="hidden lg:flex justify-center"
                >
                    <div className="relative animate-float">
                        <div className="w-64 h-[500px] rounded-[3rem] border-4 border-border bg-card shadow-2xl overflow-hidden relative glow-primary">
                            {/* Phone notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-10" />
                            {/* Screen content */}
                            <div className="p-6 pt-10 h-full flex flex-col">
                                <div className="text-xs font-mono-code text-primary mb-2">// App.tsx</div>
                                <div className="space-y-2 text-xs font-mono-code text-muted-foreground">
                                    <p><span className="text-primary">import</span> React <span className="text-primary">from</span> <span className="text-accent">'react'</span>;</p>
                                    <p><span className="text-primary">import</span> {"{"} View {"}"} <span className="text-primary">from</span></p>
                                    <p className="pl-2"><span className="text-accent">'react-native'</span>;</p>
                                    <p className="mt-4"><span className="text-primary">const</span> <span className="text-foreground">App</span> = () =&gt; {"{"}</p>
                                    <p className="pl-2"><span className="text-primary">return</span> (</p>
                                    <p className="pl-4">&lt;<span className="text-accent">View</span>&gt;</p>
                                    <p className="pl-6 text-muted-foreground/70">// Mobile Magic ✨</p>
                                    <p className="pl-4">&lt;/<span className="text-accent">View</span>&gt;</p>
                                    <p className="pl-2">);</p>
                                    <p>{"}"};</p>
                                </div>
                                <div className="mt-auto flex gap-1 justify-center pb-2">
                                    <div className="w-8 h-1 rounded-full bg-primary/40" />
                                    <div className="w-8 h-1 rounded-full bg-border" />
                                    <div className="w-8 h-1 rounded-full bg-border" />
                                </div>
                            </div>
                        </div>
                        {/* Floating badges */}
                        <div className="absolute -left-12 top-20 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-primary shadow-lg">
                            📱 React Native
                        </div>
                        <div className="absolute -right-10 top-40 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-primary shadow-lg">
                            🍎 iOS
                        </div>
                        <div className="absolute -right-8 bottom-32 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-primary shadow-lg">
                            🤖 Android
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
