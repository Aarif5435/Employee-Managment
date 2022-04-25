import { createContext, useState } from "react"

export const TotalContext = createContext();

export const  TotalContextProvider = ({children})=>{
    const [total,setTotal] = useState(0);

    const handleTotal = (inc)=>{
        setTotal(total + inc)
    }

    return <TotalContext.Provider value={{total,handleTotal}}>{children}</TotalContext.Provider>;

}