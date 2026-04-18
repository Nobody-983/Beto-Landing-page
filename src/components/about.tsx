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
        Full-stack developer in training.<br></br>
I build modern, responsive web apps using React, TypeScript, and Tailwind CSS.
Currently learning, building, and open to opportunities.
        </motion.div>
    )
}