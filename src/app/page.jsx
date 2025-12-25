"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Background from "@/components/Background";
import Music from "@/components/Music";
import Screen1 from "@/components/screens/Screen1";
import Screen2 from "@/components/screens/Screen2";
import Screen3 from "@/components/screens/Screen3";
import Screen4 from "@/components/screens/Screen4";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [musicOn, setMusicOn] = useState(false)

  const screens = [
    <Screen1 key="first" onNext={() => {
      setMusicOn(true)
      setCurrentScreen(1)
    }} />,
    <Screen2 key="second" onNext={() => setCurrentScreen(2)} />,
    <Screen3 key="third" onNext={() => setCurrentScreen(3)} />,
    <Screen4 key="fourth" />,
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Background />

      {musicOn && <Music shouldPlay={musicOn}/>}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-6 will-change-transform"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div> */}
    </div>
  );
}