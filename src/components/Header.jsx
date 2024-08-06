import React from 'react'
import { useState } from 'react'
const Header = ({onDarkModeClick}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header >
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick} >
      {isDarkMode ? "Dark" : "Light"} Mode
    </button>
  </header>
  )
}

export default Header