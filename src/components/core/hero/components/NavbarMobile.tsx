"use client"
import { MESSAGE, PATHNAME, PHONE, URL_FETCHING_STRAPI } from "@/constants"
import { useFetching } from "@/hooks"
import { Arrow, Hamburger, X } from "@/icons"
import { Category } from "@/models"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { SearchBar } from "./SearchBar"

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const { data, loading } = useFetching<Category[]>(
    URL_FETCHING_STRAPI.CATEGORIES
  )
  const handleClick = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <motion.div layout>
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Hamburger
                onClick={handleClick}
                className="size-8 md:hidden z-30"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20, display: "none" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 p-6 bg-primary w- overflow-y-auto w-full max-h-dvh rounded-bl-md rounded-br-md shadow-xl"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
                hidden: {},
              }}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center justify-between"
              >
                <SearchBar className="bg-white rounded-md text-sm" />
              </motion.div>
              <motion.div className="flex items-center justify-between">
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-white font-bold text-lg font-fontTitle"
                >
                  Categorías
                </motion.h3>
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <X
                    onClick={handleClick}
                    className="relative size-8 md:hidden text-white"
                  />
                </motion.div>
              </motion.div>
              <motion.hr
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="text-accent-foreground"
              />
              {data &&
                !loading &&
                data.data.map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                    className="flex items-center justify-between ml-4 uppercase font-medium"
                  >
                    <Link
                      title={category.name}
                      href={`/${category.slug}`}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {category.name}
                    </Link>
                    <Arrow className="size-6 rotate-180 text-white" />
                  </motion.div>
                ))}

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="text-white font-bold text-lg font-fontTitle"
              >
                Nosotros
              </motion.h3>

              <motion.hr
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="text-accent-foreground"
              />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center justify-between"
              >
                <Link
                  href={PATHNAME.HOME}
                  className="text-white hover:text-gray-300 transition-colors uppercase ml-4 font-medium"
                >
                  Inicio
                </Link>
                <Arrow className="size-6 rotate-180 text-white" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center justify-between"
              >
                <Link
                  href={PATHNAME.ABOUT}
                  className="text-white hover:text-gray-300 transition-colors uppercase ml-4 font-medium"
                >
                  Acerca de nosotros
                </Link>
                <Arrow className="size-6 rotate-180 text-white" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center justify-between"
              >
                <Link
                  href={PATHNAME.CART}
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors uppercase ml-4 font-medium"
                >
                  Tu carrito
                </Link>
                <Arrow className="size-6 rotate-180 text-white" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center justify-between"
              >
                <Link
                  href={`https://api.whatsapp.com/send/?phone=${PHONE}&text=${MESSAGE.MANUFACTURING}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors uppercase ml-4 font-medium"
                >
                  Haz tu bolso a medida
                </Link>
                <Arrow className="size-6 rotate-180 text-white" />
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
