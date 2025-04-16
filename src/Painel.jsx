import React from 'react';
import './Painel.css';

export default function Painel() {
  return (
    <div className="painel-container">
      <aside className="sidebar">
        <div className="sidebar-logo" />
        <nav>
          <ul>
            <li><span className="icon">📊</span> Dashboard</li>
            <li><span className="icon">📈</span> Analytics</li>
            <li><span className="icon">🧠</span> Models</li>
            <li><span className="icon">⚙️</span> Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="painel-main">
        <header className="painel-header">
          <h1>EXECUTOR 13.0</h1>
          <p>PRIVATE AI SYSTEM FOR STRATEGIC INTELLIGENCE</p>
        </header>

        <section className="painel-grid">
          <div className="card highlight">
            <h2>MEGA MAGNATA'S V1</h2>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="card highlight">
            <h2>EXECUTOR 13.0</h2>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="card">
            <h3>RECENT CONTENT</h3>
            <div className="skeleton-line" />
            <div className="skeleton-line" />
          </div>
          <div className="card">
            <h3>USER SETTINGS</h3>
            <div className="skeleton-line" />
            <div className="skeleton-line" />
          </div>
        </section>
      </main>
    </div>
  );
}
