import React,{useState,useContext,createContext} from "react";

//creating container
const ThemeContext=createContext();

//create provider
export function ThemeProvider({children}){
    const[isDark,setdark]=useState(false);
    const toggleTheme=()=>setdark((prev)=>!prev);
    return(
        <ThemeContext.Provider value={{isDark,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

//custome hook create
export function useTheme(){
    return useContext(ThemeContext);
}