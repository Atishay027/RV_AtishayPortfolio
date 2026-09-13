import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

interface MousePositionContextValue {
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    isFinePointer: boolean;
}

const MousePositionContext = createContext<MousePositionContextValue | null>(null);

export const MousePositionProvider = ({ children }: { children: ReactNode }) => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const [isFinePointer] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );

    // Batch native mousemove events to one motion-value update per animation
    // frame — avoids both layout reads and React re-renders on every pixel.
    useEffect(() => {
        if (!isFinePointer) return;

        const latest = { x: -1000, y: -1000 };
        let rafId: number | null = null;

        const applyLatest = () => {
            mouseX.set(latest.x);
            mouseY.set(latest.y);
            rafId = null;
        };

        const handleMouseMove = (event: MouseEvent) => {
            latest.x = event.clientX;
            latest.y = event.clientY;
            if (rafId === null) {
                rafId = requestAnimationFrame(applyLatest);
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, [isFinePointer, mouseX, mouseY]);

    return (
        <MousePositionContext.Provider value={{ mouseX, mouseY, isFinePointer }}>
            {children}
        </MousePositionContext.Provider>
    );
};

export const useMousePosition = () => {
    const ctx = useContext(MousePositionContext);
    if (!ctx) {
        throw new Error("useMousePosition must be used within a MousePositionProvider");
    }
    return ctx;
};
