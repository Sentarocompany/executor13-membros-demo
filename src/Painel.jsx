import React from 'react';

export default function Painel() {
  return (
    <div className="painel-wrapper">
      <aside className="sidebar">
        <div className="logo-placeholder" />
        <nav>
          <ul>
            <li><span className="icon" /> Dashboard</li>
            <li><span className="icon" /> Analytics</li>
            <li><span className="icon" /> Models</li>
            <li><span className="icon" /> Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>EXECUTOR 13.0</h1>
          <p>PRIVATE AI SYSTEM FOR STRATEGIC INTELLIGENCE</p>
        </header>

        <section className="top-section">
          <div className="card glow">
            <h2>MEGA MAGNATA’S V1</h2>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="card glow">
            <h2>EXECUTOR 13.0</h2>
            <p>PRODUCT MODULE</p>
          </div>
        </section>

        <section className="bottom-section">
          <div className="card glass">
            <h3>RECENT CONTENT</h3>
            <div className="line" />
            <div className="line" />
          </div>
          <div className="card glass">
            <h3>USER SETTINGS</h3>
            <div className="line" />
            <div className="line" />
          </div>
        </section>
      </main>
    </div>
  );
}
