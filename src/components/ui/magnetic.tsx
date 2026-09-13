import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface MagneticProps {
    children: ReactNode;
    amount?: number;
    className?: string;
}

// How far outside the element's own bounds it still feels the cursor's pull.
const PROXIMITY_PX = 30;

export default function Magnetic({ children, amount = 0.5, className = "" }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const { mouseX, mouseY, isFinePointer } = useMousePosition();
    const shouldReduceMotion = useReducedMotion();
    const isActive = isFinePointer && !shouldReduceMotion;

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Cache the bounding rect instead of measuring on every mousemove —
    // keeps the pointer-tracking path to pure arithmetic + transform writes.
    useEffect(() => {
        if (!isActive) return;
        const el = ref.current;
        if (!el) return;

        const measure = () => {
            rectRef.current = el.getBoundingClientRect();
        };
        measure();

        const ro = new ResizeObserver(measure);
        ro.observe(el);
        window.addEventListener("scroll", measure, { passive: true });
        window.addEventListener("resize", measure);

        return () => {
            ro.disconnect();
            window.removeEventListener("scroll", measure);
            window.removeEventListener("resize", measure);
        };
    }, [isFinePointer]);

    const applyPull = (mx: number, my: number) => {
        const rect = rectRef.current;
        if (!rect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = mx - centerX;
        const dy = my - centerY;

        // Distance from the cursor to the nearest point on the element's edge (0 = inside).
        const edgeDx = Math.max(rect.left - mx, 0, mx - rect.right);
        const edgeDy = Math.max(rect.top - my, 0, my - rect.bottom);
        const edgeDistance = Math.sqrt(edgeDx * edgeDx + edgeDy * edgeDy);

        if (edgeDistance === 0) {
            x.set(dx * amount);
            y.set(dy * amount);
        } else if (edgeDistance <= PROXIMITY_PX) {
            const fade = 1 - edgeDistance / PROXIMITY_PX;
            x.set(dx * amount * fade * 0.5);
            y.set(dy * amount * fade * 0.5);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    useMotionValueEvent(mouseX, "change", (latest) => {
        if (isActive) applyPull(latest, mouseY.get());
    });
    useMotionValueEvent(mouseY, "change", (latest) => {
        if (isActive) applyPull(mouseX.get(), latest);
    });

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
