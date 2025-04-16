
import React from 'react';
import './painel.css';

function PainelConteudo() {
  return (
    <div className="futuristic-panel">
      <aside className="sidebar">
        <h2>Magnata<span>’s</span></h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Produtos</li>
            <li>Conteúdos</li>
            <li>Configurações</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="painel-header">
          <h1>Executor 13.0</h1>
          <p>Acesso premium aos módulos do sistema Magnata</p>
        </header>

        <section className="card-grid">
          <div className="glass-card">
            <h3>MEGA MAGNATA’S V1</h3>
            <p>Introdução ao sistema de mentalidade e execução.</p>
          </div>
          <div className="glass-card">
            <h3>EXECUTOR 13.0</h3>
            <p>Módulo principal com ações, comandos e estratégias.</p>
          </div>
        </section>

        <section className="card-grid">
          <div className="glass-card content">
            <h4>Conteúdo: Introdução Estratégica</h4>
            <p>Assista à primeira aula e leia o material PDF de apoio.</p>
          </div>
          <div className="glass-card content">
            <h4>Configurações do Sistema</h4>
            <ul>
              <li>Atualizar informações</li>
              <li>Gerenciar permissões</li>
              <li>Conectar redes externas</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PainelConteudo;
