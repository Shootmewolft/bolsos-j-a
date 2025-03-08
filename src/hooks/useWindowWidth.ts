"use client"
import { SCREEN } from "@/constants"
import { useState, useEffect } from "react"

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (width >= SCREEN.LG){
    return { width, isMobile: false }
  }

  return { width, isMobile: true }
}
