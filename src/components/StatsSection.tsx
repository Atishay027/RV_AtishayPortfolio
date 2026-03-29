import { motion } from "framer-motion";

const stats = [
    { label: "Experience", value: "3+", suffix: "Years" },
    { label: "Apps Built", value: "5+", suffix: "Projects" },
    { label: "Store Releases", value: "10+", suffix: "Versions" },
    { label: "Users Impacted", value: "10K+", suffix: "Users" },
    { label: "Features Built", value: "50+", suffix: "Modules" },
];

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
};

const StatsSection = () => {
    return (
        <section className="py-12 relative z-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 rounded-2xl bg-surface/50 border border-border/50 backdrop-blur-md shadow-lg text-center flex flex-col justify-center items-center hover:border-primary/30 transition-all duration-300"
                        >
                            <span className="text-3xl font-display font-bold text-gradient mb-1">
                                {stat.value}
                            </span>
                            <span className="text-sm font-semibold text-foreground mb-0.5">
                                {stat.label}
                            </span>
                            <span className="text-xs text-muted-foreground opacity-70">
                                {stat.suffix}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
