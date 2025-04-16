import React from 'react';
import './style.css';

function PainelConteudo() {
  return (
    <div className="painel-wrapper">
      <aside className="painel-sidebar">
        <h2>Magnata’s COMPANY</h2>
        <ul>
          <li>🏠 Dashboard</li>
          <li>📂 Conteúdos</li>
          <li>⚙️ Configurações</li>
          <li>🚪 Sair</li>
        </ul>
      </aside>
      <main className="painel-main">
        <header className="painel-header">
          <h1>Executor 13.0</h1>
          <p>Interface de demonstração com layout profissional</p>
        </header>
        <section className="painel-cards">
          <div className="painel-card">
            <h3>Módulo 1</h3>
            <p>Introdução ao Executor 13.0 com visão geral do sistema.</p>
          </div>
          <div className="painel-card">
            <h3>Vídeo Explicativo</h3>
            <p>Assista a uma apresentação visual de funcionalidades.</p>
          </div>
          <div className="painel-card">
            <h3>Materiais PDF</h3>
            <p>Arquivos de apoio e leitura complementar.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PainelConteudo;
