import { backgroundMusic } from "@/data"
import { useEffect, useRef } from "react"

export default function Music({ shouldPlay }) {
  const audioRef = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const startAudio = () => {
      if (!audioRef.current || hasStarted.current) return

      audioRef.current.volume = 0.7
      audioRef.current
        .play()
        .then(() => {
          hasStarted.current = true
        })
        .catch(() => {})

      window.removeEventListener("click", startAudio)
      window.removeEventListener("touchstart", startAudio)
    }

    if (shouldPlay) {
      window.addEventListener("click", startAudio)
      window.addEventListener("touchstart", startAudio)
    }

    return () => {
      window.removeEventListener("click", startAudio)
      window.removeEventListener("touchstart", startAudio)
    }
  }, [shouldPlay])

  return (
    <audio ref={audioRef} loop preload="auto">
       <source src={backgroundMusic} type="audio/mpeg" />
    </audio>
  )
}