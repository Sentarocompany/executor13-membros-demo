import React from 'react';
import './style.css';

export default function Painel() {
  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo">MAGNATA’S COMPANY</div>
        <nav>
          <ul>
            <li>📊 Dashboard</li>
            <li>📈 Análises</li>
            <li>🧠 Módulos</li>
            <li>⚙️ Configurações</li>
          </ul>
        </nav>
      </aside>

      <main className="main-panel">
        <header>
          <h1>EXECUTOR 13.0</h1>
          <p>Sistema privado de inteligência estratégica</p>
        </header>

        <div className="grid">
          <div className="card">
            <h2>MEGA MAGNATA’S V1</h2>
            <p>Módulo de Produto</p>
          </div>
          <div className="card">
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
        </div>
      </main>
    </div>
  );
}
