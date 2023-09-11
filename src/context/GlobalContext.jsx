import { createContext, useEffect, useState } from "react";


export const GlobalContext=createContext()

export const ContextProvider=({children})=> {
    const[mode,setMode]=useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : '')
    useEffect(()=> {
        let body=document.querySelector('body');
        localStorage.setItem('mode',mode)
        mode ? body.classList.remove('dark') : body.classList.add('dark')
        
        
      },[mode])
      console.log(mode);
      const toggleMode= () => {
 
        setMode(!mode)
      }

      return <GlobalContext.Provider value={{mode,setMode,toggleMode}}>
        {children}
      </GlobalContext.Provider>
}