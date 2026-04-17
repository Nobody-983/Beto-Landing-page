  import { Profile } from './components/profile'
  import { Projects } from './components/projects'
  import './App.css'
  import { Skills } from './components/skills'
import { About } from './components/about'
import { Github } from './components/github'
import axios from "axios"
import { useEffect, useState } from 'react'

type Repo = {
 id: number
 name: string
 stars: number
 forks: number
 language: string | null
}
function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  console.log(import.meta.env.VITE_MY_API_KEY)
  console.log(import.meta.env)
  //  console.log(import.meta.env.VITE_GITHUB_TOKEN)
  
  useEffect(() => {
    
    async function test() {
      const api = import.meta.env.VITE_MY_API_KEY
      try {
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
}))
    
        console.log(res.data) // ✅ actual data
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
      <div className="mx-auto justify-center mt-4 
      grid gap-4 md:grid-cols-2 lg:grid-cols-3
      w-[90%]">
        <Profile />
        <Skills />
        <Projects />
        <About />
        <Github data={topRepos} />
        

  </div>
    )
  }

  export default App
