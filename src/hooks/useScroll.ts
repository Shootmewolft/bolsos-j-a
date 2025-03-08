"use client"
import { useState, useEffect } from "react"

export function useScroll() {
  const [isLocked, setIsLocked] = useState(false)
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isLocked])

  const toggleScroll = () => setIsLocked((prev) => !prev)

  return { toggleScroll, isLocked }
}
