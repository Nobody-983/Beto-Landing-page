  import { Profile } from './components/profile'
  import { Seeker } from './components/seeker'
  import './App.css'
  import { Skills } from './components/skills'
import { About } from './components/about'
import { Github } from './components/github'
import axios from "axios"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariants } from './components/variant'
import { Swiftly } from './components/swiftly'

type Repo = {
 id: number
 name: string
 stars: number
 forks: number
  language: string | null
  homepage: string,
  
  clone: string
 
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  console.log( import.meta.env.VITE_MY_API_KEY)
  // console.log(import.meta.env)
  //  console.log(import.meta.env.VITE_GITHUB_TOKEN)
  
  useEffect(() => {
    
    async function test() {
      try {
        const api = import.meta.env.VITE_MY_API_KEY
        const res = await axios.get(
          api,
          {
            headers: {
           Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
        }
        )
        const data = res.data
        const cleaned = data
  .filter((repo: any) => repo.disabled !== true)
  .map((repo: any): Repo => ({
  id: repo.id,
  name: repo.name,
  stars: repo.stargazers_count,
  forks: repo.forks_count,
    language: repo.language,
    homepage: repo.homepage,
  clone: repo.clone_url
}))
    
        console.log(data) // ✅ actual data
        setRepos(cleaned)
    
      } catch (error: any) {
        console.log("REAL ERROR:", error.response?.data)
      }
    }
    
    test()
  }, [])
  

        const topRepos = repos.slice(0, 5)   
  






  
 
// const topRepos = repos.slice(0, 3)
  
  return (
    <> 
      
      <motion.div
        className="mx-auto justify-center mt-4 
      grid gap-4 md:grid-cols-2 lg:grid-cols-3
      w-[90%] mb-8"
      variants={cardVariants}
  initial="initial"
  
  whileHover="hover"
      >
        <Profile />
        <Skills />
        <About />
        <Github data={topRepos} />
        <Seeker />
        <Swiftly />
        

  </motion.div>
      </>
    )
  }

  export default App
