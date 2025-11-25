import './style.css';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const users = [
    { id: 1, nome: 'Caique', email: 'caique@gmail.com', senha: '123456' },
    { id: 2, nome: 'Maria', email: 'maria@gmail.com', senha: '123456' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const user = users.find(
      u => u.email === credentials.email && u.senha === credentials.senha
    );

    if (user) {
      login(user);
      navigate('/dashboard');
    } else {
      setError('Email ou senha incorretos');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={credentials.senha}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Entrar</button>
        
        <div className="demo-credentials">
          <p><strong>Credenciais de teste:</strong></p>
          <p>Email: caique@gmail.com | Senha: 123456</p>
          <p>Email: maria@gmail.com | Senha: 123456</p>
        </div>
      </form>
    </div>
  );
}

export default Login;