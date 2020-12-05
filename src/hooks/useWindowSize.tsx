import { useState, useEffect } from "react"

interface WindowSize {
  width: number
  height: number
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const changeWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize, { passive: true })
    // NB: force resize on intial browser render
    // React doesn't properly rehydrdate calling the effect
    // we have to force it
    window.dispatchEvent(new Event("resize"))

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
  }, [])

  return windowSize
}

export { useWindowSize }
