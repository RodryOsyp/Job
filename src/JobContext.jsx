import { useState,createContext } from "react"
export const JobContext = createContext()

export const JobContextComponent = ({children}) =>{
  const [count, setCount] = useState("")


  return(
    <JobContext.Provider value={{count, setCount}}>
      {children}
    </JobContext.Provider>
  )
}