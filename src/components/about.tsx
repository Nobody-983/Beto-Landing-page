import { motion } from "framer-motion"
import { cardVariants } from "./variant"

export function About() {
    return (
        <motion.div
        variants={cardVariants}
            initial="initial"
            whileTap="active"
  whileHover="hover" className="border rounded-xl 
        border-amber-200 m-4 p-4 lg:h-50 lg:mt-20 ">
            <p className="mt-8">
I architect high-performance web systems where technical precision meets refined UI. I specialize in building scalable, type-safe applications that bridge complex logic with intuitive design. My focus is simple: deliver resilient, production-ready code that scales.</p>
        </motion.div>
    )
}