import './App.css'
import { useState } from 'react'
import AuthPage from './pages/AuthPage.jsx'
import LandingPage from './pages/LandingPage.jsx'

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return authenticated ? (
    <LandingPage />
  ) : (
    <AuthPage onAuthenticate={() => setAuthenticated(true)} />
  )
}

export default App
