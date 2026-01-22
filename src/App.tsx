import Dashboard from './pages/Dashboard'
import LoginPage from './pages/Login'
import { Route, Routes, Navigate } from 'react-router-dom'

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
