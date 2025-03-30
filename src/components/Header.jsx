import appLogo from '../assets/images/logo.svg'
import '../styles/Header.css'
import PageTitle from './PageTitle'
import ThemeToggle from './ThemeToggle'

export default function Header() {
    return (
        <header>
            <PageTitle />
            <ThemeToggle />
        </header>
    )
}