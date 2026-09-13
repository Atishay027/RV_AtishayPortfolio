import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { ModeToggle } from "./mode-toggle";
import Magnetic from "@/components/ui/magnetic";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Workflow", href: "#workflow" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={shouldReduceMotion ? false : { y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-glass shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight">
                    AJ<span className="text-primary">.</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((l) => (
                        <Magnetic key={l.href} amount={0.3}>
                            <a
                                href={l.href}
                                className="text-base font-semibold text-foreground hover:text-[#f7f1df] transition-colors block px-3 py-2"
                            >
                                {l.label}
                            </a>
                        </Magnetic>
                    ))}
                    
                    {/* <Magnetic amount={0.3}>
                        <div>
                            <ModeToggle />
                        </div>
                    </Magnetic> */}

                    <Magnetic amount={0.2}>
                        <a
                            href="#contact"
                            className="text-base px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-bold hover:opacity-90 shadow-lg glow-primary-sm transition block"
                        >
                            Hire Me
                        </a>
                    </Magnetic>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-card border-t border-border"
                    >
                        <div className="flex flex-col p-4 gap-3">
                            {navLinks.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-base font-semibold text-foreground hover:text-[#f7f1df] py-2 transition-colors"
                                >
                                    {l.label}
                                </a>
                            ))}
                            {/* <div className="flex justify-center my-2">
                                <ModeToggle />
                            </div> */}
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="text-base px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-bold text-center hover:opacity-90 transition"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
