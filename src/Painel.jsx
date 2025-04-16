import React from 'react';
import './style.css';

function Painel() {
  return (
    <div className="painel-wrapper">
      <aside className="painel-sidebar">
        <h1>MAGNATA’S COMPANY</h1>
        <ul>
          <li>Dashboard</li>
          <li>Videoaulas</li>
          <li>Relatórios</li>
          <li>Configurações</li>
        </ul>
      </aside>

      <main className="painel-conteudo">
        <header className="painel-header">
          <h2>Executor 13.0</h2>
          <p>Controle completo da automação em Facebook Ads + acesso à central de aprendizado</p>
        </header>

        <section className="painel-grid">
          <div className="card video-box">
            <h3>Última Aula</h3>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Videoaula"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="card dashboard-box">
            <h3>Resumo da Ativação</h3>
            <ul>
              <li>Campanhas Ativas: <span>3</span></li>
              <li>Leads Coletados: <span>187</span></li>
              <li>Status da IA: <span className="ativo">Ativa</span></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Painel;
