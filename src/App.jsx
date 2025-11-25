// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/Dashboard/Home';
import Sobre from './pages/Dashboard/Sobre';
import Servicos from './pages/Dashboard/Servicos';
import Clientes from './pages/Dashboard/Clientes';
import Trabalhe from './pages/Dashboard/Trabalhe';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="trabalhe" element={<Trabalhe />} />
          </Route>
          
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;