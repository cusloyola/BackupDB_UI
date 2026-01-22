import Dashboard from './pages/dashboard/Dashboard'
import LoginPage from './pages/login/Login'
import { Route, Routes, Navigate } from 'react-router-dom'
import './global.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

export default App
