// FadeIn.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeIn({ children, direction = "up", delay = 0 }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
