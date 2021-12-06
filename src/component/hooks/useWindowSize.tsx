import { useEffect, useState } from "react"

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowWidth
}

export default useWindowSize