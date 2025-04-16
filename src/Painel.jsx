import React from 'react';
import './style.css';

export default function Painel() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">MAGNATA’S COMPANY</div>
        <nav>
          <ul>
            <li className="active"><span className="icon">🏠</span> Dashboard</li>
            <li><span className="icon">📊</span> Análises</li>
            <li><span className="icon">🧠</span> Módulos</li>
            <li><span className="icon">⚙️</span> Configurações</li>
          </ul>
        </nav>
      </aside>

      <main className="main-area">
        <header>
          <h1>EXECUTOR 13.0</h1>
          <p>SISTEMA PRIVADO DE INTELIGÊNCIA ESTRATÉGICA</p>
        </header>

        <section className="card-grid">
          <div className="card glow">
            <h2>MEGA MAGNATA’S V1</h2>
            <p>Módulo de Produto</p>
          </div>
          <div className="card glow">
            <h2>EXECUTOR 13.0</h2>
            <p>Módulo de Produto</p>
          </div>
          <div className="card glass">
            <h3>Conteúdos Recentes</h3>
            <ul>
              <li>Aula 01 - Estratégia</li>
              <li>Aula 02 - Execução</li>
            </ul>
          </div>
          <div className="card glass">
            <h3>Configurações</h3>
            <ul>
              <li>Conta</li>
              <li>Discord Vinculado</li>
              <li>Notificações</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
