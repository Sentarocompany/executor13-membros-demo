import React, { useState } from 'react';
import './style.css';

function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario === 'admin' && senha === '123456') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src="/logo-magnata.png" alt="Logo" className="logo-premium" />
        <h1>Bem-vindo de volta</h1>
        <p>Acesso exclusivo à área de membros da Magnata's Company</p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <h2>Entrar</h2>
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
          <button onClick={handleLogin}>Acessar Painel</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
