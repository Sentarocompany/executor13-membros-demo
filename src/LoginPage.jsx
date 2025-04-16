import React, { useState } from 'react';
import './style.css';

function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario === 'admin' && senha === '123456') {
      window.location.href = '/painel';
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1>O próximo nível da inteligência estratégica</h1>
        <p>
          Transforme sua rotina de decisões com acesso exclusivo ao sistema Executor 13.0,
          desenvolvido para mentes que lideram e executam.
          Aqui, cada clique é um passo à frente no jogo.
        </p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <img src="/logo-magnata.png" alt="Logo" className="logo-premium-center" />
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
