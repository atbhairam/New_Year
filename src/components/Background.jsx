import { memo, useEffect, useState } from "react"
import { Snowflake } from "lucide-react"
import { motion } from "framer-motion";

function Background() {
    const [snowflakes, setSnowflakes] = useState([])

    useEffect(() => {
        const flakes = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 8,
            size: 4 + Math.random() * 8,
            opacity: 0.3 + Math.random() * 0.5,
            isIcon: Math.random() < 0.3,
            rotate: Math.random() * 360,
            scaleX: 0.85 + Math.random() * 0.3,
            scaleY: 0.85 + Math.random() * 0.3,
            radius: 40 + Math.random() * 20,
        }))
        setSnowflakes(flakes)
    }, [])


    return (
        <>
            <div className="absolute -top-30 -right-50 w-105 h-105 rounded-full bg-[radial-gradient(circle_at_center,#dee7ee_0%,#dee7ee_40%,transparent_70%)] blur-md opacity-90" />
            <div className="absolute top-[25%] -left-52.5 w-112.5 h-112.5 rounded-full bg-[radial-gradient(circle_at_center,#dfeaf0_0%,#dfeaf0_40%,transparent_72%)] blur-md opacity-80" />
            <div className="absolute -bottom-40 -right-50 w-105 h-105 rounded-full bg-[radial-gradient(circle_at_center,#bfd5e3_0%,#bfd5e3_40%,transparent_70%)] blur-sm opacity-90" />

            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />

            <div className="fixed inset-0 pointer-events-none overflow-hidden will-change-transform">
                {snowflakes.map((flake) => (
                    <motion.div
                        key={flake.id}
                        className="absolute will-change-transform"
                        style={{
                            left: `${flake.x}%`,
                            opacity: flake.opacity,
                        }}
                        initial={{ y: -20 }}
                        animate={{
                            y: "100vh",
                            x: [0, 20, -10, 15, 0],
                            rotate: flake.isIcon ? flake.rotate + 360 : 0,
                        }}
                        transition={{
                            duration: flake.duration,
                            delay: flake.delay,
                            repeat: Infinity,
                            ease: "linear",
                            x: {
                                duration: flake.duration / 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        {flake.isIcon ? (
                            <Snowflake
                                className="text-sky-300"
                                style={{
                                    width: flake.size + 10,
                                    height: flake.size + 10,
                                    opacity: flake.opacity,
                                }}
                            />
                        ) : (
                            <div
                                className="bg-sky-200"
                                style={{
                                    width: flake.size,
                                    height: flake.size,
                                    borderRadius: `${flake.radius}%`,
                                    transform: `scale(${flake.scaleX}, ${flake.scaleY})`,
                                    boxShadow: "0 0 8px rgba(255,255,255,0.6)",
                                }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

        </>
    )
}

export default memo(Background)