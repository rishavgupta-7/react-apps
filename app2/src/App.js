import React from 'react'
import Toggle from './components/Toggle'
import { ThemeProvider, useTheme } from './context/Theme'

function Appcontent(){
  const {isDark}=useTheme();

  const appStyle = {
    backgroundColor: isDark ? "#121212" : "#f9f9f9",
    color: isDark ? "#f9f9f9" : "#121212",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease all",
  };

  return (
    <div style={appStyle}>
      <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <Toggle />
    </div>
  );
}


function App() {
  return (
    
      <ThemeProvider>
        <Appcontent/>
      </ThemeProvider>
      
    
  )
}

export default App
