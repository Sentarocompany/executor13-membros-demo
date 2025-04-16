import React from 'react';
import './style.css';

export default function Painel() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">MAGNATA’S COMPANY</div>
        <nav className="sidebar-menu">
          <ul>
            <li className="active">Dashboard</li>
            <li>Analytics</li>
            <li>Models</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <header className="main-header">
          <h1>EXECUTOR 13.0</h1>
          <p>Strategic Intelligence Access</p>
        </header>

        <section className="product-modules">
          <div className="card floating glow">
            <h2>MEGA MAGNATA'S V1</h2>
            <p>Product Module</p>
          </div>
          <div className="card floating glow">
            <h2>EXECUTOR 13.0</h2>
            <p>Product Module</p>
          </div>
        </section>

        <section className="modular-section">
          <div className="card glass">
            <h3>Recent Content</h3>
            <div className="placeholder-line" />
            <div className="placeholder-line" />
          </div>
          <div className="card glass">
            <h3>User Settings</h3>
            <div className="placeholder-line" />
            <div className="placeholder-line" />
          </div>
        </section>
      </main>
    </div>
  );
}
