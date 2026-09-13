import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiSmartphone, FiGlobe, FiZap, FiLayers } from "react-icons/fi";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const highlights = [
    { icon: FiSmartphone, title: "Mobile Development", desc: "React Native cross-platform apps for iOS & Android, including native module bridging" },
    { icon: FiGlobe, title: "Web & Backend", desc: "React.js/Next.js dashboards backed by FastAPI/Node.js, PostgreSQL, and REST/GraphQL APIs" },
    { icon: FiZap, title: "Performance", desc: "App & web optimization, lazy loading, efficient rendering, and smooth 60fps animations" },
    { icon: FiLayers, title: "End-to-End Delivery", desc: "Shipping apps to the App Store & Play Store alongside their companion web panels with CI/CD" },
];

const AboutSection = () => {
    const shouldReduceMotion = useReducedMotion();
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: imageProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
    const imageParallaxY = useSpring(useTransform(imageProgress, [0, 1], [18, -18]), { stiffness: 100, damping: 30, mass: 0.5 });

    return (
        <section id="about" className="section-padding theme-green bg-background group section-hover-heading">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold mb-4 heading-hide">
                            <span className="text-foreground">About</span> <span className="text-[#f7f1df]">Me</span>
                        </motion.h2>
                        <motion.div variants={itemVariants} className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div variants={itemVariants} className="space-y-6 text-foreground/90 leading-relaxed text-balance">
                            <p className="border-l-2 border-primary/30 pl-4 text-foreground/90">
                                I build end-to-end products — starting from requirement analysis and UI/UX design in Figma, through cross-platform mobile development with React Native (Expo or CLI) and web dashboards with React.js/Next.js. I implement scalable state management using Redux or Zustand and design REST/GraphQL APIs with FastAPI and Node.js, backed by PostgreSQL, MySQL, Firebase, or Supabase.
                            </p>
                            <p className="border-l-2 border-primary/20 pl-4">
                                For code quality and reliability, I write unit and integration tests using Jest and perform end-to-end UI flow testing using Maestro. I maintain code quality using Git workflows, Husky pre-commit hooks, and automated linting and formatting.
                            </p>
                            <p className="border-l-2 border-primary/20 pl-4">
                                I use CI/CD pipelines to automate builds, testing, and deployment across mobile and web. Android builds are generated using Android Studio and iOS builds using Xcode, while web apps and admin dashboards are containerized with Docker and deployed alongside their APIs.
                            </p>
                            <p className="border-l-2 border-primary/30 pl-4 italic text-foreground/80">
                                Post-deployment, I monitor application performance with tools like Crashlytics and Sentry, fix issues, and continuously improve features, performance, and user experience through iterative updates and releases.
                            </p>
                            <p className="border-l-2 border-primary/30 pl-4 font-medium text-foreground/90">
                                I also leverage AI-assisted development workflows and structured project documentation to improve development speed, maintain consistency, and automate repetitive development tasks.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.01, rotateX: 2 }}
                                    className="p-5 rounded-xl bg-[#f7f1df] hover:glow-primary-sm transition-all shadow-md border border-[#e8dcc4] group"
                                >
                                    <item.icon className="text-green-700 mb-3 group-hover:scale-110 transition-transform origin-left" size={24} />
                                    <h3 className="font-display font-semibold text-[#2d5a3d] mb-1 heading-hide transition-colors">{item.title}</h3>
                                    <p className="text-sm text-[#4a6b5b]">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div variants={itemVariants} className="mt-12" ref={imageRef}>
                        <motion.img
                            src="/assets/profileimage/laptopcover.png"
                            alt="Portfolio website preview on a laptop"
                            loading="lazy"
                            decoding="async"
                            style={{ y: shouldReduceMotion ? 0 : imageParallaxY }}
                            className="w-[70%] mx-auto h-auto rounded-2xl shadow-2xl block"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
