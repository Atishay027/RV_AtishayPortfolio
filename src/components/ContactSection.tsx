import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiLoader } from "react-icons/fi";
import { toast } from "@/components/ui/sonner";

const contactInfo = [
    { icon: FiMail, label: "Email", value: "atishay027@gmail.com", href: "mailto:atishay027@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91 7425085220", href: "tel:+917425085220" },
    { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/atishayjain027", href: "https://www.linkedin.com/in/atishayjain027/" },
    { icon: FiGithub, label: "GitHub", value: "github.com/Atishay027", href: "https://github.com/Atishay027" },
];

const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "f45c154d-e8c6-4c66-9857-3939863edb20",
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    subject: `[Portfolio Contact] New message from ${form.name}`,
                    from_name: "Portfolio Website",
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Message sent successfully!", {
                    description: "Thank you for reaching out. I'll get back to you soon.",
                });
                setForm({ name: "", email: "", message: "" });
            } else {
                throw new Error(result.message || "Failed to send message");
            }
        } catch (error) {
            console.error("Contact Form Error:", error);
            toast.error("Failed to send message", {
                description: "Something went wrong. Please try again or email me directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-card/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-muted-foreground leading-relaxed">
                            I'm always open to discussing new mobile app projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:border-primary/50 border border-border transition group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <info.icon className="text-primary" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">{info.label}</p>
                                        <p className="text-sm text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                            <input
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/50 disabled:opacity-50"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                            <input
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/50 disabled:opacity-50"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                            <textarea
                                required
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition resize-none placeholder:text-muted-foreground/50 disabled:opacity-50"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition glow-primary-sm disabled:opacity-80"
                        >
                            {isSubmitting ? (
                                <>
                                    Sending... <FiLoader className="animate-spin" size={16} />
                                </>
                            ) : (
                                <>
                                    Send Message <FiSend size={16} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
