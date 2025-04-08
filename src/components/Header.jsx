import '../styles/Header.css'
import PageTitle from './PageTitle'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Header( {isDarkMode, setIsDarkMode} ) {

    return (
        <header className='page-header'>
            <PageTitle isDarkMode={isDarkMode}/>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </header>
    )
}