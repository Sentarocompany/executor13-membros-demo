import React from 'react';
import './style.css';

function Painel() {
  return (
    <div className="executive-wrapper">
      <aside className="executive-sidebar">
        <h1>⚡</h1>
        <nav>
          <ul>
            <li>DASHBOARD</li>
            <li>ANALYTICS</li>
            <li>MODELS</li>
            <li>SETTINGS</li>
          </ul>
        </nav>
      </aside>

      <main className="executive-main">
        <header className="executive-header">
          <h2>EXECUTOR 13.0</h2>
          <p>PRIVATE AI SYSTEM FOR STRATEGIC INTELLIGENCE</p>
        </header>

        <section className="executive-products">
          <div className="product-card"> 
            <h3>MEGA MAGNATA’S V1</h3>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="product-card"> 
            <h3>EXECUTOR 13.0</h3>
            <p>PRODUCT MODULE</p>
          </div>
        </section>

        <section className="executive-modules">
          <div className="module-box">
            <h4>RECENT CONTENT</h4>
            <div className="module-line"></div>
            <div className="module-line"></div>
          </div>
          <div className="module-box">
            <h4>USER SETTINGS</h4>
            <div className="module-line"></div>
            <div className="module-line"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Painel;
