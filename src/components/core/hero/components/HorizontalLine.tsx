import { motion } from 'motion/react';

export function HorizontalLine() {
  return (
    <motion.hr
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      className="text-accent-foreground"
    />
  )
}