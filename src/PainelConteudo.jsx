import React from 'react';
import './style.css';

function PainelConteudo() {
  return (
    <div className="painel-container">
      <aside className="sidebar">
        <img src="/logo-magnata.png" alt="Logo" className="sidebar-logo" />
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Conteúdos</li>
            <li>Configurações</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="painel-header">
          <h1>Bem-vindo à Magnata’s COMPANY</h1>
          <p>Área de Teste do Executor 13.0</p>
        </header>

        <section className="cards-area">
          <div className="card">
            <h2>Módulo 1</h2>
            <p>Conteúdo introdutório com explicações sobre o sistema.</p>
            <button>Acessar</button>
          </div>
          <div className="card">
            <h2>Vídeo de Apresentação</h2>
            <p>Assista ao overview do Executor 13.0 em ação.</p>
            <button>Play ▶️</button>
          </div>
          <div className="card">
            <h2>Materiais PDF</h2>
            <p>Downloads com conteúdos de apoio.</p>
            <button>Baixar</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PainelConteudo;
