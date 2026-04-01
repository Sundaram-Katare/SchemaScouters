import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Explore from './pages/Explore.jsx'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const token = localStorage.getItem('authToken')
    if (storedUser && token) {
      setUser(JSON.parse(storedUser))
      setAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleAuthenticate = (userData) => {
    setUser(userData)
    setAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    setUser(null)
    setAuthenticated(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-cyan-400">Loading...</div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage onAuthenticate={handleAuthenticate} />} />
      <Route 
        path="/explore" 
        element={authenticated && user ? (
          <Explore user={user} onLogout={handleLogout} />
        ) : (
          <Navigate to="/" replace />
        )} 
      />
    </Routes>
  )
}

export default App
