import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "../index.css"

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme",theme);
    },[theme]);

  return (
    <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "dark" : "light"} Theme
    </button>
  )
}

export default ThemeToggle
