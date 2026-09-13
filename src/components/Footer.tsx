import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-border theme-beige bg-background">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <p className="text-sm text-foreground/80">
                        © {new Date().getFullYear()} Atishay Jain. Built with React & Tailwind CSS.
                    </p>
                    <motion.a
                        href="https://motion.dev/examples"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                        Animations inspired by Motion.dev
                    </motion.a>
                </div>
                <div className="flex items-center gap-3">
                    {[
                        { icon: FiGithub, href: "https://github.com/Atishay027", label: "GitHub" },
                        { icon: FiLinkedin, href: "https://www.linkedin.com/in/atishayjain027/", label: "LinkedIn" },
                        { icon: FiMail, href: "mailto:atishay027@gmail.com", label: "Email" },
                    ].map((s) => (
                        <motion.a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            whileHover={{ y: -2, scale: 1.08 }}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <s.icon size={16} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
