import { motion } from "framer-motion"
import { cardVariants } from "./variant"
export function  Swiftly() {

    return (
        <motion.div
        variants={cardVariants}
        initial="initial"
        whileTap="active"
        whileHover="hover"
            className="border rounded-2xl  p-4 
        border-amber-200 gap-4 m-4"
    
        >
                    
            
                <h1 className="text-2xl font-bold">Swiftly: Campus E-commerce Ecosystem</h1>
                    
        <img src="/projects/swiftly.png" 
                alt=""
                className=" " />
                    <p className="text-xl gap-4 font-bold">A full-stack commerce solution designed for the University of Ilorin.</p>
            <p className="gap-4">The Problem: Fragmented student marketplaces and unreliable delivery.</p>
            <p className="gap-4">Stack: React, Tailwind CSS, and a custom-built inventory management system.</p>
            <div className="mt-4 flex justify-center gap-6 ">
                <a href="https://www.swiftlyweb.shop/" target="#blank">

            <img src="/icons/website.jpeg" alt=""
                    className="w-20 h-10 " />
                </a>
                 
                
                </div>
                 
            
        </motion.div>

            

        
    )
}