import React from 'react'
import { useTheme } from '../context/Theme'
function Toggle() {
    const {isDark,toggleTheme}=useTheme();
  return (
    <div style={{
        backgroundColor:isDark ? "#333" : "#fff",
        color:isDark ? "#fff" : "#111",
        
    }}>
     <button 
     onClick={toggleTheme}
     style={{
        background:isDark ? "#333" : "#fff",
        color:isDark ? "#fff" : "#111",
     }} >switch to{isDark ? "light": "Dark"} Mode</button> 
    </div>
  )
}

export default Toggle
