import React from 'react';
import './style.css';

function Painel() {
  return (
    <div className="painel-wrapper">
      <aside className="painel-sidebar">
        <h1>MAGNATA’S COMPANY</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Análises</li>
            <li>Módulos</li>
            <li>Configurações</li>
          </ul>
        </nav>
      </aside>

      <main className="painel-main">
        <header className="painel-header">
          <h2>EXECUTOR 13.0</h2>
          <p>SISTEMA PRIVADO DE INTELIGÊNCIA ESTRATÉGICA</p>
        </header>

        <section className="painel-cards">
          <div className="painel-card">
            <h3>MEGA MAGNATA’S V1</h3>
            <p>Módulo de Produto</p>
          </div>
          <div className="painel-card">
            <h3>EXECUTOR 13.0</h3>
            <p>Módulo de Produto</p>
          </div>
        </section>

        <section className="painel-modulos">
          <div className="modulo-box">
            <h4>Conteúdos Recentes</h4>
            <div className="linha-blur"></div>
            <div className="linha-blur"></div>
          </div>
          <div className="modulo-box">
            <h4>Configurações do Usuário</h4>
            <div className="linha-blur"></div>
            <div className="linha-blur"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Painel;
