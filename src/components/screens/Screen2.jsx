import { motion } from "framer-motion";
import { secondHeading } from "@/data";

export default function Screen2({ onNext }) {
    return (
        <div className="shadow-xl bg-[#fffdf8] px-8 py-10 max-w-md w-full text-center flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(#e4e4f7bf 1px, transparent 1px), linear-gradient(90deg, #e4e4f7bf 1px, transparent 1px)",
                backgroundSize: "20px 20px"
            }}
        >

            {/* gif */}
            <motion.img
                src="/gifs/snowman.gif"
                alt="snowman"
                loading="lazy"
                className="h-36 mx-auto mb-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Main heading */}
            <motion.h2
                className="font-dancing-script text-4xl md:text-5xl font-semibold will-change-transform"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
            >
                {secondHeading}
            </motion.h2>

            {/* Button */}
            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
            >
                <button
                    onClick={onNext}
                    className="px-10 py-3 rounded-full font-medium text-white bg-linear-to-r from-sky-400 to-blue-500 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 will-change-transform"
                >
                    Open it
                </button>
            </motion.div>
        </div>
    );
}
