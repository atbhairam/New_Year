import { firstHeading } from "@/data";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function Screen1({ onNext }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full text-center relative will-change-transform"
        >
            <motion.div
                className="mb-10 md:mb-12 font-dancing-script text-4xl md:text-5xl font-semibold tracking-wides will-change-transform"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {firstHeading}
            </motion.div>

            <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
                onClick={onNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative will-change-transform"
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative"
                >
                    <Gift size={120} className="text-primary fill-rose-50 drop-shadow-2xl relative z-10" />
                    <motion.div
                        className="absolute -top-5 -right-6 rotate-4"
                    >
                        <div className="bg-white/90 backdrop-blur-sm text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg border-2 border-primary/20">
                            Tap me!
                        </div>
                    </motion.div>
                </motion.div>
            </motion.button>
        </motion.div>
    )
}