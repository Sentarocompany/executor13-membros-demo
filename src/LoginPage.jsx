import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario === 'admin' && senha === '123456') {
      navigate('/painel');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-magnata-bg">
      <div className="login-card-magnata">
        <img src="/logo-magnata.png" alt="Logo Magnata" className="logo-magnata" />
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
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
