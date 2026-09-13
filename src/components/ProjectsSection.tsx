import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { FiExternalLink, FiSmartphone, FiGlobe } from "react-icons/fi";
import { MouseEvent } from "react";

const projects = [
    {
        title: "TeeUPCC — Golf Enterprise Platform",
        description:
            "A comprehensive golf ecosystem merging social networking with utility. Features live scoring, tournament management, in-app chat, and a social feed, backed by FastAPI/PostgreSQL services and React admin, vendor & super-admin web dashboards.",
        tech: ["React Native", "React.js", "FastAPI", "PostgreSQL", "Socket.io"],
        features: ["Live scorecard tracking", "Social feed & group chat", "Tee-time & equipment booking", "Admin/vendor/super-admin web dashboards"],
        color: "from-secondary/20 to-primary/20",
        platform: "web",
        status: "Development Phase",
    },
    {
        title: "Oralift — Health & Fitness Platform",
        description:
            "A health & fitness platform helping users follow structured facial exercise and wellness routines through guided programs and progress tracking. Modernized the live production ecosystem — React Native mobile app, web platform, and admin portal.",
        tech: ["React Native", "Web Platform", "Admin Portal", "App Store Deployment"],
        features: ["Modernized production app & navigation architecture", "Replaced deprecated libraries & dependencies", "Web platform & admin portal support", "App Store & Play Store release management"],
        color: "from-primary/20 to-secondary/20",
        platform: "web",
        status: "Live",
        links: [
            { label: "Website", href: "https://oralift.com/" },
            { label: "App Store", href: "https://apps.apple.com/in/app/oralift/id1496482821" },
        ],
    },
    {
        title: "UMNO — Food Discovery & Savings Platform",
        description:
            "An Australian food-saving and dining platform connecting restaurants with food lovers — letting restaurants promote specials and real-time offers while helping customers discover quality meals at discounted prices, across a mobile app, web platform, and restaurant/admin portal.",
        tech: ["React Native", "React.js", "FastAPI", "PostgreSQL", "REST APIs"],
        features: ["Restaurant discovery with real-time specials & offers", "Mobile app + web platform for customers", "Restaurant/admin portal for menus & promotions", "Real-time availability & content workflows"],
        color: "from-primary/20 to-secondary/20",
        platform: "web",
        status: "Live",
        links: [
            { label: "Website", href: "https://umno.au/" },
            { label: "App Store", href: "https://apps.apple.com/in/app/umno/id6670157940" },
            { label: "Web App", href: "https://www.umnoapp.com.au/" },
            { label: "Admin Login", href: "https://umnoapp.com.au/Account/Login" },
        ],
    },
    {
        title: "Club Yakka — Sports Club Management Platform",
        description:
            "An all-in-one sports club management platform bringing team management, communication, events, memberships, volunteers, merchandise, and fundraising into a single platform for community sports clubs across AFL, rugby, soccer, netball, and cricket.",
        tech: ["React.js", "Web Platform", "Admin Panel", "Events & Fundraising"],
        features: ["Team/player management, attendance & memberships", "Club-wide & team-specific communication", "Events, RSVPs, ticketing & fundraising", "Admin panel for clubs, teams & volunteers"],
        color: "from-secondary/20 to-primary/20",
        platform: "web",
        status: "Live",
        links: [
            { label: "Website", href: "https://clubyakka.com.au/" },
            { label: "App Store", href: "https://apps.apple.com/in/app/club-yakka/id6755098725" },
            { label: "Admin Panel", href: "https://portal.clubyakka.com.au/" },
        ],
    },
    {
        title: "CalmCloud — Student Wellbeing App",
        description:
            "A student-focused mental health & wellbeing platform built with React Native to promote emotional resilience. Features interactive stress management activities, relaxation tools, and progress tracking shared between students, teachers, and parents.",
        tech: ["React Native", "Firebase", "Redux", "Push Notifications", "Interactive UI", "Performance Optimization"],
        features: ["Breathing & relaxation tools", "Educational videos & quizzes", "Student-Teacher-Parent portal", "Guided audio-visual experiences"],
        color: "from-secondary/20 to-primary/20",
        platform: "mobile",
        status: "Live",
        links: [
            { label: "Website", href: "https://calmcloud.com/" },
            { label: "App Store", href: "https://apps.apple.com/in/app/calmcloud-by-ambimind/id6720749589" },
        ],
    },
    {
        title: "Gweddi — Prayer & Devotional App",
        description:
            "A bilingual (Welsh & English) lifestyle and prayer application developed for the Presbyterian Church of Wales, giving users daily prayers, devotional content, church news, multimedia, and prayer updates at national and local levels.",
        tech: ["React Native", "Localization (Welsh/English)", "Push Notifications", "Admin/CMS Panel"],
        features: ["Bilingual Welsh & English experience", "Prayer feeds, devotionals, news & multimedia", "Personal prayer diary", "Admin/CMS panel for content management"],
        color: "from-primary/20 to-secondary/20",
        platform: "mobile",
        status: "Live",
        links: [
            { label: "App Store", href: "https://apps.apple.com/in/app/gweddi-prayer/id6743384650" },
            { label: "Admin Panel", href: "https://gweddiprayer.cymru/" },
        ],
    },
    {
        title: "HomeSafeAlert — Community Safety App",
        description:
            "A safety-focused Australian app for reporting and monitoring nearby incidents in the community, improving safety awareness and emergency response through real-time reporting and alerts.",
        tech: ["React Native", "Maps & Location", "Push Notifications", "In-App Subscriptions"],
        features: ["Incident reporting via voice, photo & video", "Location-based alerts & incident map", "Emergency contacts & direct emergency calling", "Monthly/yearly in-app subscriptions"],
        color: "from-secondary/20 to-primary/20",
        platform: "mobile",
        status: "Live",
        links: [
            { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.homeSafeAlert&pcampaignid=web_share" },
            { label: "Website", href: "https://www.homesafealertapp.com.au/" },
        ],
    },
    {
        title: "MusicLearn — Music Education Platform",
        description:
            "An interactive music education platform for students and teachers with a React Native app plus a web management side for lessons, users, and content. Offers structured lessons for piano, guitar, cello, and violin with quizzes and live sessions.",
        tech: ["React Native", "Live Streaming", "Firebase", "Interactive Quizzes", "Video lesson streaming"],
        features: ["Instrument-specific courses", "Web-based lesson & content management", "Live interactive sessions", "Personalized progress tracking"],
        color: "from-secondary/20 to-primary/20",
        platform: "web",
        status: "Live",
        links: [
            { label: "App Store", href: "https://apps.apple.com/in/app/musiclearn/id6749683631" },
        ],
    },
    /*
    {
        title: "BidNinja — AI Home Improvement",
        description:
            "An AI-powered home improvement marketplace that streamlines project bidding using computer vision. Analyzes user-submitted media to extract project details, allowing contractors to provide accurate remote bids without on-site visits.",
        tech: ["React Native", "AI/Computer Vision", "Firebase", "Node.js", "Stripe"],
        features: ["AI photo/video analysis", "Remote bidding system", "Verified professional matching", "Real-time project management"],
        color: "from-blue-500/20 to-indigo-500/20",
    },
    */
];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const ProjectCard = ({ proj }: { proj: any }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Clicking anywhere on the card opens the store listing (App Store, then Play Store) by default;
    // other chips (Website, Admin Panel, etc.) stop propagation to open their own link instead.
    const primaryHref: string | undefined =
        proj.links?.find((l: { label: string; href: string }) => l.label === "App Store")?.href ??
        proj.links?.find((l: { label: string; href: string }) => l.label === "Play Store")?.href ??
        proj.links?.[0]?.href;

    const openPrimary = () => {
        if (primaryHref) window.open(primaryHref, "_blank", "noopener,noreferrer");
    };

    return (
        <motion.div
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02, y: -5 }}
            data-cursor-hover
            onClick={primaryHref ? openPrimary : undefined}
            role={primaryHref ? "link" : undefined}
            tabIndex={primaryHref ? 0 : undefined}
            onKeyDown={
                primaryHref
                    ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openPrimary();
                          }
                      }
                    : undefined
            }
            className={`group relative rounded-xl bg-[#f7f1df] border border-border/50 overflow-hidden hover:glow-primary-sm transition-all shadow-lg ${primaryHref ? "cursor-pointer" : ""}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            hsl(var(--primary) / 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Card inner content layer to sit above spotlight background if needed, but here spotlight shines over elements slightly */}
            <div className="relative z-10 h-full flex flex-col">
                <div className={`h-40 bg-gradient-to-br ${proj.color} flex items-center justify-center relative border-b border-[#e8dcc4]`}>
                    {proj.platform === "web" ? (
                        <FiGlobe className="text-green-700 drop-shadow-lg" size={48} />
                    ) : (
                        <FiSmartphone className="text-green-700 drop-shadow-lg" size={48} />
                    )}
                    {primaryHref && (
                        <div className="absolute top-4 right-4">
                            <a
                                href={primaryHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Open ${proj.title}`}
                                className="block"
                            >
                                <FiExternalLink className="text-green-700" size={18} />
                            </a>
                        </div>
                    )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold text-lg text-[#2d5a3d] heading-hide transition-colors">{proj.title}</h3>
                        {proj.status && (
                            <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-green-600/20 text-green-700 border border-green-600/30 uppercase tracking-wider animate-pulse">
                                {proj.status}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-[#4a6b5b] mb-6 leading-relaxed flex-1">{proj.description}</p>

                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-[#2d5a3d] mb-3 uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                            {proj.features.map((f: string) => (
                                <li key={f} className="text-xs text-[#4a6b5b] flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5">•</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {proj.links && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {proj.links.map((l: { label: string; href: string }) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600/10 text-xs font-medium text-green-700 border border-green-600/20 hover:bg-green-600/20 transition-colors"
                                >
                                    <FiExternalLink size={12} /> {l.label}
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tech.map((t: string) => (
                            <span key={t} className="px-2.5 py-1 rounded-md bg-green-600/10 text-[10px] font-medium text-green-700 border border-green-600/20 backdrop-blur-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="projects" className="section-padding theme-green bg-background relative group section-hover-heading">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 right-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl"
                    />
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 heading-hide">
                        <span className="text-foreground">Featured</span> <span className="text-[#f7f1df]">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((proj) => (
                        <ProjectCard key={proj.title} proj={proj} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
