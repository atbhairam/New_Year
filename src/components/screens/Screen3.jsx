import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { thirdHeading, thirdSubtext, words } from "@/data";

const rotations = [-6, 4, -4, 6, -4];

export default function Screen3({ onNext }) {
    const [flipped, setFlipped] = useState([false, false, false, false, false]);

    const handleFlip = (index) => {
        setFlipped((prev) => {
            if (prev[index]) return prev;
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    // auto move to next screen when all cards flipped
    useEffect(() => {
        if (flipped.every(Boolean)) {
            const timer = setTimeout(() => {
                onNext();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [flipped, onNext]);

    return (
        <div className="shadow-xl bg-[#fffdf8] px-6 md:px-8 py-10 max-w-md w-full text-center flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage:
                    "linear-gradient(#e4e4f7bf 1px, transparent 1px), linear-gradient(90deg, #e4e4f7bf 1px, transparent 1px)",
                backgroundSize: "20px 20px",
            }}
        >
            {/* Heading */}
            <motion.h2
                className="font-dancing-script text-4xl md:text-5xl font-semibold mb-2 will-change-transform"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {thirdHeading}
            </motion.h2>

            {/* Subtext */}
            <motion.p
                className="text-sm text-stone-500 mb-6 will-change-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
            >
                {thirdSubtext}
            </motion.p>

            {/* Cards */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 will-change-transform">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className="w-20 h-24 md:w-24 md:h-28"
                        onClick={() => handleFlip(index)}
                    >
                        <motion.div
                            className="relative w-full h-full cursor-pointer"
                            animate={{
                                rotateY: flipped[index] ? 180 : 0,
                                rotateZ: rotations[index],
                            }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Front */}
                            <div
                                className="absolute inset-0 bg-rose-100 border-4 border-white
                                           shadow-md flex items-center justify-center"
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                <Heart className="text-rose-400 fill-current" />
                            </div>

                            {/* Back */}
                            <div
                                className="absolute inset-0 bg-rose-50 border-4 border-white
                                           shadow-md flex items-center justify-center
                                           text-sm font-medium "
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                }}
                            >
                                {word}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
