import { useState } from 'react'
import darkThemeLogo from '../assets/images/icon-moon.svg'
import lightThemeLogo from '../assets/images/icon-sun.svg'

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const handleThemeToggle = function() {
        setIsDarkMode((prev) => !prev);
    }

    return (
        <>
            <button onClick={handleThemeToggle} className={`logo ${isDarkMode ? 'light-logo' : 'dark-logo'}`}>
                <img src={isDarkMode ? lightThemeLogo : darkThemeLogo} alt="" />
            </button>
        </>
    )
}