import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Atishay Jain. Built with React & Tailwind CSS.
                </p>
                <div className="flex items-center gap-3">
                    {[
                        { icon: FiGithub, href: "https://github.com/Atishay027" },
                        { icon: FiLinkedin, href: "https://www.linkedin.com/in/atishayjain027/" },
                        { icon: FiMail, href: "mailto:atishay027@gmail.com" },
                    ].map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <s.icon size={16} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
