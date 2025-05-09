import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import ExtensionCard from './components/ExtensionCard/ExtensionCard.jsx'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <ExtensionCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  )
}

export default App
