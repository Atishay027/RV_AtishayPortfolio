import { useEffect } from "react";
import Lenis from "lenis";

// Fixed navbar is h-16 (64px) — this leaves the target section clear of it
// plus a little breathing room when an anchor link scrolls to it.
const ANCHOR_OFFSET = -80;

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            anchors: { offset: ANCHOR_OFFSET },
            // Lenis's own docs recommend leaving touch scrolling un-smoothed:
            // syncTouch re-implements scroll over touch events and can make
            // mobile scrolling feel heavier/less responsive than the OS's
            // native (and already excellent) touch scroll.
            syncTouch: false,
            // `respectReducedMotion` defaults to true — under prefers-reduced-motion,
            // Lenis disables its own smoothing and makes anchor scrolls instant.
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
