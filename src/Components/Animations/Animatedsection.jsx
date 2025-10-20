
import { motion } from "framer-motion";

export default function AnimatedSection({ children, className = "", delay = 0, ...rest }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
      viewport={{ once: false, amount: 0.3 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
