import appLogo from '../assets/images/logo.svg'
import '../styles/Header.css'
import PageTitle from './PageTitle'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleThemeToggle = function() {
        setIsDarkMode((prev) => !prev)
        // isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)
        console.log(isDarkMode)
        isDarkMode ? setBodyClass('') : setBodyClass('dark-mode')
    }


    return (
        <header>
            <PageTitle isDarkMode={isDarkMode}/>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </header>
    )
}