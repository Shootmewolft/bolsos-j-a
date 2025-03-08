import { motion } from "motion/react"

interface Props {
  title: string
}

export function TitleNavbar({ title }: Props) {
  return (
    <motion.h3
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      className="text-white font-bold text-lg font-fontTitle"
    >
      {title}
    </motion.h3>
  )
}
