import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { type MouseEvent } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkflowSection from "@/components/WorkflowSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 140, damping: 24, mass: 0.4 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 140, damping: 24, mass: 0.4 });
    const { scrollYProgress } = useScroll();
    const glowY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
    const glowY2 = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
    const glowY3 = useTransform(scrollYProgress, [0, 0.35], [0, 60]);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    };

    return (
        <div
            className="min-h-screen bg-background relative overflow-x-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                mouseX.set(-300);
                mouseY.set(-300);
            }}
        >
            <motion.div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 16, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{ y: glowY }}
                    className="absolute -top-24 left-[6%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
                />
                <motion.div
                    animate={{ y: [0, 24, 0], x: [0, -14, 0], scale: [1, 0.96, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{ y: glowY2 }}
                    className="absolute top-[20%] right-[-4%] h-80 w-80 rounded-full bg-primary/10 blur-[130px]"
                />
                <motion.div
                    animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    style={{ y: glowY3 }}
                    className="absolute bottom-[10%] left-[-8%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
                />
                <motion.div
                    className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/20 blur-[120px]"
                    style={{ x: smoothMouseX, y: smoothMouseY, translateX: "-50%", translateY: "-50%" }}
                />
            </motion.div>

            <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <StatsSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <CertificationsSection />
                <ProjectsSection />
                <WorkflowSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    );
};

export default Index;
