import React from 'react';
import './style.css';

function PainelConteudo() {
  return (
    <div className="painel-wrapper">
      <aside className="painel-sidebar">
        <h2>Magnata’s COMPANY</h2>
        <ul>
          <li>🏠 Dashboard</li>
          <li>📦 Produtos</li>
          <li>📂 Conteúdos</li>
          <li>⚙️ Configurações</li>
          <li>🚪 Sair</li>
        </ul>
      </aside>
      <main className="painel-main">
        <header className="painel-header">
          <h1>Executor 13.0</h1>
          <p>Acesso à simulação de conteúdos internos da plataforma.</p>
        </header>

        <section className="painel-bloco">
          <h2>📦 Produtos Disponíveis</h2>
          <div className="painel-cards">
            <div className="painel-card">
              <h3>MEGA MAGNATA’S V1</h3>
              <p>Programa inicial com conteúdos base para mentalidade de execução e autonomia financeira.</p>
            </div>
            <div className="painel-card">
              <h3>EXECUTOR 13.0</h3>
              <p>Sistema completo de decisões e análise estratégica com acesso exclusivo à inteligência do Magnata.</p>
            </div>
          </div>
        </section>

        <section className="painel-bloco">
          <h2>📂 Conteúdos Recentes</h2>
          <ul className="painel-lista">
            <li>Aula 01 – Introdução ao Executor</li>
            <li>Aula 02 – Mindset de Execução Magnata</li>
            <li>PDF – Framework Decisões Rápidas</li>
            <li>Checklist de Ação Diária (download)</li>
          </ul>
        </section>

        <section className="painel-bloco">
          <h2>⚙️ Configurações</h2>
          <ul className="painel-lista">
            <li>Alterar senha de acesso</li>
            <li>Atualizar dados do perfil</li>
            <li>Vincular conta Discord para notificações</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default PainelConteudo;
