import React from 'react';
import './style.css';

export default function Painel() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo"></div>
        <nav className="sidebar-menu">
          <ul>
            <li>Dashboard</li>
            <li>Products</li>
            <li>Content</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div className="sidebar-profile"></div>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h1>EXECUTOR 13.0</h1>
          <p>ACCESS TO STRATEGIC INTELLIGENCE</p>
        </header>

        <section className="modules-row">
          <div className="card module-card">
            <h2>MEGA MAGNATA’S V1</h2>
            <span className="module-sub">PRODUCT MODULE</span>
          </div>
          <div className="card module-card">
            <h2>EXECUTOR 13.0</h2>
            <span className="module-sub">CORE MODULE</span>
          </div>
        </section>

        <section className="modules-row">
          <div className="card section-card">
            <h3>RECENT CONTENT</h3>
          </div>
          <div className="card section-card">
            <h3>USER SETTINGS</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ========== Painel.css ========== */
