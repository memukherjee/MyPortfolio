import React from 'react'
import './DarkLightToggler.css'

function DarkLightToggler({setTheme, theme}) {
  return (
    <>
        <label className="switch">
          <input type="checkbox" checked={theme==='dark'} onChange={()=>{
            let currentTheme = theme==='light'?'dark':'light'
            setTheme(currentTheme)
            localStorage.setItem("theme",currentTheme)
          }}/>
          <span className="slider round"></span>
        </label>
    </>
  )
}

export default DarkLightToggler