import React from 'react';
import './style.css';

function Painel() {
  return (
    <div className="painel-futurista-wrapper">
      <aside className="painel-futurista-sidebar">
        <div className="sidebar-title">MAGNATA’S COMPANY</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Produtos</li>
            <li>Conteúdos</li>
            <li>Configurações</li>
          </ul>
        </nav>
      </aside>

      <main className="painel-futurista-main">
        <header className="painel-futurista-header">
          <h1>Executor 13.0</h1>
          <p>Interface moderna, refinada e preparada para apresentar ao investidor.</p>
        </header>

        <section className="painel-futurista-cards">
          <div className="futurista-card">
            <h3>MEGA MAGNATA’S V1</h3>
            <p>Base estratégica para mentes em expansão.</p>
          </div>
          <div className="futurista-card">
            <h3>EXECUTOR 13.0</h3>
            <p>Sistema de execução lógica com IA integrada.</p>
          </div>
        </section>

        <section className="painel-futurista-grid">
          <div className="futurista-module">
            <h4>Últimos Conteúdos</h4>
            <ul>
              <li>Aula 01 - Apresentação</li>
              <li>Aula 02 - Execução Real</li>
              <li>PDF - Mapa de Foco</li>
            </ul>
          </div>
          <div className="futurista-module">
            <h4>Configurações</h4>
            <ul>
              <li>Alterar senha</li>
              <li>Ativar notificações</li>
              <li>Vincular Discord</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Painel;
