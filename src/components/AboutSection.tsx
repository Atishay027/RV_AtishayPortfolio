import { motion } from "framer-motion";
import { FiSmartphone, FiCode, FiZap, FiLayers } from "react-icons/fi";

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
        transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
};

const highlights = [
    { icon: FiSmartphone, title: "Mobile First", desc: "Specialized in React Native cross-platform development for iOS & Android" },
    { icon: FiCode, title: "Full Stack Mobile", desc: "Firebase, Supabase, REST APIs — complete backend integration for mobile apps" },
    { icon: FiZap, title: "Performance", desc: "App optimization, lazy loading, efficient rendering, and smooth 60fps animations" },
    { icon: FiLayers, title: "App Releases", desc: "End-to-end deployment to App Store & Google Play Store with CI/CD pipelines" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground leading-relaxed text-balance">
                            <p className="border-l-2 border-primary/20 pl-4">
                                I follow a structured mobile application development workflow starting from requirement analysis and UI/UX design in Figma, followed by cross-platform mobile development using React Native (Expo or CLI). I implement scalable state management using Redux or Zustand and integrate REST APIs with backend services such as Firebase and Supabase.
                            </p>
                            <p className="border-l-2 border-primary/20 pl-4">
                                For code quality and reliability, I write unit tests using Jest and perform end-to-end UI flow testing using Maestro. I maintain code quality using Git workflows, Husky pre-commit hooks, and automated linting and formatting.
                            </p>
                            <p className="border-l-2 border-primary/20 pl-4">
                                I also use CI/CD pipelines to automate builds, testing, and deployment processes for Android and iOS applications. Android builds are generated using Android Studio and iOS builds using Xcode, followed by deployment to the Google Play Store and Apple App Store.
                            </p>
                            <p className="border-l-2 border-primary/20 pl-4 italic opacity-80">
                                Post-deployment, I monitor application performance, fix issues, and continuously improve features, performance, and user experience through iterative updates and releases.
                            </p>
                            <p className="border-l-2 border-primary/20 pl-4 font-medium text-foreground/90">
                                I also leverage AI-assisted development workflows and structured project documentation to improve development speed, maintain consistency, and automate repetitive development tasks.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="p-5 rounded-xl bg-surface hover:glow-primary-sm transition-all shadow-md border border-border/50 group"
                                >
                                    <item.icon className="text-primary mb-3 group-hover:scale-110 transition-transform origin-left" size={24} />
                                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
