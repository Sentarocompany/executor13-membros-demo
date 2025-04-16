import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && senha === '123456') {
      navigate('/painel');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src="/logo-magnata.png" alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;
