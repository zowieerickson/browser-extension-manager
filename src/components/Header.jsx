// import appLogo from '../../public/assets/images/logo.svg'
import appLogo from '../../public/assets/images/logo.svg'
import '../styles/Header.css'
import PageTitle from './PageTitle'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <header className='page-header'>
            <PageTitle isDarkMode={isDarkMode}/>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </header>
    )
}