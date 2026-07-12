import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
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

const floatingTransition = {
    duration: 7,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut",
};

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const heroY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 70]), { stiffness: 110, damping: 24, mass: 0.5 });
    const phoneY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 140]), { stiffness: 100, damping: 24, mass: 0.5 });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 180, damping: 24, mass: 0.4 });
    const smoothY = useSpring(mouseY, { stiffness: 180, damping: 24, mass: 0.4 });

    const handleMockupMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    };

    return (
        <section ref={sectionRef} className="min-h-screen flex items-center relative overflow-hidden section-padding pt-28 theme-green bg-background">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <motion.div
                animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
                transition={floatingTransition}
                className="absolute left-[8%] top-[18%] h-20 w-20 rounded-full border border-primary/20 bg-primary/10 blur-[2px]"
            />
            <motion.div
                animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
                transition={{ ...floatingTransition, duration: 9 }}
                className="absolute right-[10%] top-[30%] h-24 w-24 rounded-full border border-primary/20 bg-primary/10"
            />

            <div className="max-w-7xl mx-auto w-full">
                <div className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-primary shadow-[0_35px_120px_-48px_rgba(0,0,0,0.16)]">
                    <div className="absolute inset-0 bg-primary" />
                    <div className="relative grid lg:grid-cols-[1.02fr_0.98fr] gap-8 p-8 lg:p-12">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 rounded-[2.5rem] bg-[#f3edda]/95 p-8 lg:p-12 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.18)] border border-[#c7c1a2]/70">
                            <motion.div
                                variants={itemVariants}
                                animate={{ y: [0, -4, 0], scale: [1, 1.01, 1] }}
                                transition={floatingTransition}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e6ddc5] border border-[#b2ac87] text-sm text-[#2d4d31] mb-6"
                            >
                                <HiDevicePhoneMobile className="text-primary" />
                                <span>Mobile FullStack Developer</span>
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#15421f]">
                                Hi, I'm{" "}
                                <span className="text-[#2c5f31]">Atishay Jain</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-lg text-[#2c4b33] max-w-lg mb-8 leading-relaxed">
                                React Native developer with 3+ years of experience building cross-platform
                                mobile applications for Android and iOS using React Native, TypeScript, JavaScript,
                                Firebase, Supabase, and REST APIs. Experienced in building scalable apps, app releases,
                                performance optimization, and production deployments.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
                                <Magnetic>
                                    <motion.a
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        href="#projects"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-[0_20px_50px_-30px_hsl(var(--primary)/0.5)] block"
                                    >
                                        View Projects <FiArrowRight />
                                    </motion.a>
                                </Magnetic>
                                <Magnetic>
                                    <motion.a
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#b2ac87] bg-[#e6ddc5] text-[#1e4322] font-medium hover:bg-[#d8cfb1] transition block"
                                    >
                                        Contact Me
                                    </motion.a>
                                </Magnetic>
                                <Magnetic>
                                    <motion.a
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        href="/assets/resume/AtishayJain_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#b2ac87] bg-[#e6ddc5] text-[#1e4322] font-medium hover:bg-[#d8cfb1] transition block"
                                    >
                                        <FiDownload /> Resume
                                    </motion.a>
                                </Magnetic>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-4">
                                {[
                                    { icon: FiGithub, href: "https://github.com/Atishay027", label: "GitHub" },
                                    { icon: FiLinkedin, href: "https://www.linkedin.com/in/atishayjain027/", label: "LinkedIn" },
                                    { icon: FiMail, href: "mailto:atishay027@gmail.com", label: "Email" },
                                ].map((s) => (
                                    <Magnetic key={s.label}>
                                        <motion.a
                                            whileHover={{ y: -4, scale: 1.06 }}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-[#e6ddc5] border border-[#b2ac87] flex items-center justify-center text-[#1e4322] hover:bg-[#d8cfb1] transition block"
                                        >
                                            <s.icon size={18} />
                                        </motion.a>
                                    </Magnetic>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                            style={{ y: phoneY, perspective: 1000 }}
                            transition={{
                                opacity: { duration: 0.8 },
                                scale: { duration: 1, type: "spring", bounce: 0.4 },
                                rotateY: { duration: 1.2, ease: "easeOut" },
                                rotateX: { duration: 1.2, ease: "easeOut" },
                            }}
                            className="flex justify-center items-start mt-8 lg:mt-0"
                        >
                            <div className="relative">
                                <motion.div
                                    onMouseMove={handleMockupMove}
                                    onMouseLeave={() => {
                                        mouseX.set(140);
                                        mouseY.set(260);
                                    }}
                                    animate={{ y: [0, -8, 0], rotate: [0, -1, 0, 1, 0], scale: [1, 1.01, 1] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        rotateX: useTransform(smoothY, [0, 520, 260], [8, -8, 0]),
                                        rotateY: useTransform(smoothX, [0, 280, 140], [-8, 8, 0]),
                                    }}
                                    className="relative w-[240px] sm:w-[280px] aspect-[280/520] rounded-[2.5rem] border-[6px] border-[#b2ac87]/70 bg-[#ede6cb] shadow-[0_35px_120px_-25px_rgba(0,0,0,0.18)] overflow-hidden"
                                >
                                    <motion.div
                                        animate={{ x: ["-20%", "120%", "-20%"], opacity: [0, 0.4, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl"
                                    />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_36%),linear-gradient(135deg,rgba(70,96,70,0.08),transparent_52%,rgba(90,110,90,0.08))]" />
                                    <div className="absolute inset-0 rounded-[2.5rem] border border-[#ffffff]/10" />
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#f7f1df] rounded-b-[1rem] z-20" />
                                    <div className="absolute inset-x-4 top-8 bottom-4 rounded-[1.4rem] border border-[#c7c1a2]/60 bg-[#f7f1df]/95 p-5 pt-8 shadow-inner">
                                        <div className="text-[10px] font-mono-code text-[#2c5d35] mb-3">// App.tsx</div>
                                        <div className="space-y-2 text-[11px] font-mono-code text-[#2c4f35] leading-relaxed">
                                            <p><span className="text-[#2c5d35]">import</span> React <span className="text-[#2c5d35]">from</span> <span className="text-[#3f7a53]">'react'</span>;</p>
                                            <p><span className="text-[#2c5d35]">import</span> {"{"} View {"}"} <span className="text-[#2c5d35]">from</span></p>
                                            <p className="pl-2"><span className="text-[#3f7a53]">'react-native'</span>;</p>
                                            <p className="mt-4"><span className="text-[#2c5d35]">const</span> <span className="text-[#1f4226]">App</span> = () =&gt; {"{"}</p>
                                            <p className="pl-2"><span className="text-[#2c5d35]">return</span> (</p>
                                            <p className="pl-4">&lt;<span className="text-[#3f7a53]">View</span>&gt;</p>
                                            <p className="pl-6 text-[#22533c]/80">// Mobile Magic ✨</p>
                                            <p className="pl-4">&lt;/<span className="text-[#3f7a53]">View</span>&gt;</p>
                                            <p className="pl-2">);</p>
                                            <p>{"}"};</p>
                                        </div>
                                        <div className="mt-6 flex gap-2 justify-center">
                                            <div className="h-1.5 w-7 rounded-full bg-primary/40" />
                                            <div className="h-1.5 w-7 rounded-full bg-border" />
                                            <div className="h-1.5 w-7 rounded-full bg-border" />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div animate={{ y: [0, -8, 0], x: [0, 6, 0] }} transition={floatingTransition} className="hidden lg:block absolute -left-12 top-20 px-3 py-1.5 rounded-lg bg-[#ede6cb] border border-[#b2ac87]/80 text-xs font-medium text-[#1f4529] shadow-lg">
                                    📱 React Native
                                </motion.div>
                                <motion.div animate={{ y: [0, 10, 0], x: [0, -6, 0] }} transition={{ ...floatingTransition, duration: 8 }} className="hidden lg:block absolute -right-10 top-40 px-3 py-1.5 rounded-lg bg-[#ede6cb] border border-[#b2ac87]/80 text-xs font-medium text-[#1f4529] shadow-lg">
                                    🍎 iOS
                                </motion.div>
                                <motion.div animate={{ y: [0, -10, 0], x: [0, 4, 0] }} transition={{ ...floatingTransition, duration: 6 }} className="hidden lg:block absolute -right-8 bottom-32 px-3 py-1.5 rounded-lg bg-[#ede6cb] border border-[#b2ac87]/80 text-xs font-medium text-[#1f4529] shadow-lg">
                                    🤖 Android
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
