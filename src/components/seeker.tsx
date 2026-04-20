import { motion } from "framer-motion"
import { cardVariants } from "./variant"
export function  Seeker() {

    return (
        <motion.div
        variants={cardVariants}
        initial="initial"
        whileTap="active"
        whileHover="hover"
            className="border rounded-2xl  p-4 
        border-amber-200 w-[100%]  m-4"
    
        >
                    
            
                
                    
            <p className="text-center text-3xl">Seeker</p>
        <img src="/projects/seeker.png" 
                alt=""
                className=" " />
            
                <p>Bridging the gap between on-chain data and career growth. Seeker is a dual-purpose engine designed to navigate the Solana ecosystem—tracking high-momentum tokens while simultaneously identifying talent gaps in the industry. It transforms raw market data into a roadmap for crypto-native professionals.</p>
            
                 
            
        </motion.div>

            

        
    )
}