import React from 'react';
import './style.css';

export default function Painel() {
  return (
    <div className="genius-panel">
      <aside className="genius-sidebar">
        <div className="sidebar-logo-placeholder"></div>
        <ul className="sidebar-nav">
          <li className="active"><span className="dot" /> DASHBOARD</li>
          <li><span className="dot" /> ANALYTICS</li>
          <li><span className="dot" /> MODELS</li>
          <li><span className="dot" /> SETTINGS</li>
        </ul>
      </aside>

      <main className="genius-main">
        <header className="genius-header">
          <h1>EXECUTOR 13.0</h1>
          <p>PRIVATE AI SYSTEM FOR STRATEGIC INTELLIGENCE</p>
        </header>

        <section className="genius-top-cards">
          <div className="product-card glow">
            <h2>MEGA<br/>MAGNATA'S V1</h2>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="product-card glow">
            <h2>EXECUTOR 13.0</h2>
            <p>PRODUCT MODULE</p>
          </div>
        </section>

        <section className="genius-bottom-cards">
          <div className="glass-card">
            <h3>RECENT CONTENT</h3>
            <div className="content-line"></div>
            <div className="content-line"></div>
          </div>
          <div className="glass-card">
            <h3>USER SETTINGS</h3>
            <div className="content-line"></div>
            <div className="content-line"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
