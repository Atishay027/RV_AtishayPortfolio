import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

const HOVER_SELECTOR = 'a[href], button, input, textarea, select, [role="button"], [data-cursor-hover]';

// Shared arrow silhouette (lucide "mouse-pointer-2"). The click-sparkle glyph
// ("mouse-pointer-click") draws the identical arrow shifted by exactly
// (+5, +5) — translating its spark lines by (-5, -5) re-aligns them to this one.
const ARROW_PATH =
    "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z";
const SPARK_PATHS = ["M14 4.1 12 6", "m5.1 8-2.9-.8", "m6 12-1.9 2", "M7.2 2.2 8 5.1"];

// The arrow's tip sits at (4.037, 4.688) in the 24x24 viewBox; at 28px render
// size that's ~4.7px, 5.5px in — offsetting by that puts the tip exactly on
// the tracked mouse position, matching a native cursor's hotspot.
const CURSOR_SIZE = 28;
const TIP_OFFSET_X = (4.037 / 24) * CURSOR_SIZE;
const TIP_OFFSET_Y = (4.688 / 24) * CURSOR_SIZE;

const CustomCursor = () => {
    const { mouseX, mouseY, isFinePointer } = useMousePosition();
    const shouldReduceMotion = useReducedMotion();
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Under reduced motion, track the pointer 1:1 instead of with springy lag/overshoot.
    const springX = useSpring(mouseX, shouldReduceMotion ? { stiffness: 1000, damping: 100, mass: 0.1 } : { stiffness: 500, damping: 40, mass: 0.4 });
    const springY = useSpring(mouseY, shouldReduceMotion ? { stiffness: 1000, damping: 100, mass: 0.1 } : { stiffness: 500, damping: 40, mass: 0.4 });

    useEffect(() => {
        if (!isFinePointer) return;

        document.body.classList.add("custom-cursor-active");

        const handleOver = (event: MouseEvent) => {
            if ((event.target as HTMLElement)?.closest?.(HOVER_SELECTOR)) setIsHovering(true);
        };
        const handleOut = (event: MouseEvent) => {
            if ((event.target as HTMLElement)?.closest?.(HOVER_SELECTOR)) setIsHovering(false);
        };

        let hideSparkTimeout: number;
        const handleDown = () => {
            window.clearTimeout(hideSparkTimeout);
            setIsClicking(true);
        };
        const handleUp = () => {
            hideSparkTimeout = window.setTimeout(() => setIsClicking(false), 280);
        };

        document.addEventListener("mouseover", handleOver, { passive: true });
        document.addEventListener("mouseout", handleOut, { passive: true });
        window.addEventListener("mousedown", handleDown, { passive: true });
        window.addEventListener("mouseup", handleUp, { passive: true });
        return () => {
            document.body.classList.remove("custom-cursor-active");
            document.removeEventListener("mouseover", handleOver);
            document.removeEventListener("mouseout", handleOut);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
            window.clearTimeout(hideSparkTimeout);
        };
    }, [isFinePointer]);

    if (!isFinePointer) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[999]"
            style={{
                x: springX,
                y: springY,
                translateX: -TIP_OFFSET_X,
                translateY: -TIP_OFFSET_Y,
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
            }}
        >
            <motion.svg
                width={CURSOR_SIZE}
                height={CURSOR_SIZE}
                viewBox="0 0 24 24"
                animate={{
                    scale: isHovering ? 1.25 : 1,
                    filter: isHovering
                        ? "drop-shadow(0 2px 3px rgba(0,0,0,0.3)) drop-shadow(0 0 8px hsl(var(--primary) / 0.6))"
                        : "drop-shadow(0 2px 3px rgba(0,0,0,0.3))",
                }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 22 }}
                style={{ transformOrigin: `${TIP_OFFSET_X}px ${TIP_OFFSET_Y}px` }}
            >
                <path d={ARROW_PATH} fill="#f7f1df" stroke="hsl(var(--primary))" strokeWidth={2} strokeLinejoin="round" />
            </motion.svg>

            <AnimatePresence>
                {isClicking && (
                    <motion.svg
                        className="absolute inset-0"
                        width={CURSOR_SIZE}
                        height={CURSOR_SIZE}
                        viewBox="0 0 24 24"
                        style={{ overflow: "visible", filter: "drop-shadow(0 0 1.5px rgba(0,0,0,0.65))" }}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.3 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
                    >
                        <g stroke="#ffffff" strokeWidth={1.75} strokeLinecap="round" transform="translate(-5,-5)">
                            {SPARK_PATHS.map((d) => (
                                <path key={d} d={d} />
                            ))}
                        </g>
                    </motion.svg>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CustomCursor;
