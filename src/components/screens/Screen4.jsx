import { useState } from "react";
import { motion } from "framer-motion";
import { fourthSubHeading, message } from "@/data";

export default function Screen4() {
    const [isTapped, setIsTapped] = useState(false)
    return (
        <div className="shadow-xl bg-[#fffdf8] px-8 py-10 max-w-md w-full text-center flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(#e4e4f7bf 1px, transparent 1px), linear-gradient(90deg, #e4e4f7bf 1px, transparent 1px)",
                backgroundSize: "20px 20px"
            }}
        >

            {/* Main heading */}
            <motion.h2
                className="font-dancing-script text-4xl md:text-5xl font-semibold will-change-transform"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
            >
                Merry Christmas
            </motion.h2>
            <motion.h3
                className="font-dancing-script text-3xl md:text-4xl font-semibold will-change-transform"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {fourthSubHeading}
            </motion.h3>

            {/* Prevent sizing */}
            <p className="invisible -mb-6">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

              {/* Card */}
              <motion.div
                    className="bg-white rounded-[20px] p-2"
                    onClick={() => setIsTapped(!isTapped)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className={`card w-60 h-65 md:w-70 md:h-75 ${isTapped ? "tapped" : ""} will-change-auto`}>
                        <p className="text-sm px-4 py-3 max-h-[80%] overflow-y-auto text-left whitespace-pre-wrap">
                            {message}
                        </p>
                        <div className="cover will-change-transform">
                            <div className="ribbon">Tap to read</div>
                            <img loading="lazy" src="/gifs/santa.gif" className="w-40" alt="santa" />
                        </div>
                    </div>
                </motion.div>
        </div>
    );
}
