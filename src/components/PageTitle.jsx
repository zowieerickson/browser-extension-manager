import appLogo from '../assets/images/logo.svg'


export default function PageTitle() {
    return (
        <a href="/">
            <img src={appLogo} alt="Extensions app logo" />
        </a>
    )
}