import { useEffect, useState } from 'react'
import darkThemeLogo from '../../public/assets/images/icon-moon.svg'
import lightThemeLogo from '../../public/assets/images/icon-sun.svg'

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
    const [bodyClass, setBodyClass] = useState('')

    const handleThemeToggle = function() {
        setIsDarkMode((prev) => !prev)
        isDarkMode ? setBodyClass('') : setBodyClass('dark-mode')
    }

    useEffect(() => {
        document.body.className = bodyClass;

    }, [bodyClass])

    return (
        <>
            <button onClick={handleThemeToggle} className={`logo ${isDarkMode ? 'light-logo' : 'dark-logo'}`}>
                <img src={isDarkMode ? lightThemeLogo : darkThemeLogo} alt="" />
            </button>
        </>
    )
}