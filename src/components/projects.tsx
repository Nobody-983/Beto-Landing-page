import { motion } from "framer-motion"
import { cardVariants } from "./variant"

export function Projects({ data }) {
        data.map((el)=>console.log(el))
    
    return (
        <motion.div
        variants={cardVariants}
        initial="initial"
        whileTap="active"
        whileHover="hover"
            className="border rounded-2xl  gap-4 
        border-amber-200 w-[100%] ">
            <div className="grid grid-cols-2 m-4">
                <div>
                    
        <img src="/projects/seeker.png" 
                alt=""
                className="lg:w-40 md:size-[90%] sm:size-[90%] " />
                    <p className="text-center">Seeker</p>
            
                </div>
                <div>

                    <img src="/projects/swiftly.png" 
                alt=""
                        className="lg:w-40 md:size-[90%] sm:size-[90%] " />
                    <p className="text-center">Swiftly</p>
                </div>
            </div>
            
        </motion.div>

            

        
    )
}