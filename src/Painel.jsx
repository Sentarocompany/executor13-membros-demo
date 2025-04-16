import React from "react";
import "./style.css";
import { FaTachometerAlt, FaBox, FaFileAlt, FaCog, FaUser } from "react-icons/fa";

export default function Painel() {
  return (
    <div className="painel-container">
      <aside className="sidebar">
        <div className="sidebar-section">
          <span className="sidebar-title">DASHBOARD</span>
          <nav className="sidebar-menu">
            <ul>
              <li className="active"><FaTachometerAlt /> Dashboard</li>
              <li><FaBox /> Products</li>
              <li><FaFileAlt /> Content</li>
              <li><FaFileAlt /> Reports</li>
              <li><FaCog /> Settings</li>
            </ul>
          </nav>
        </div>
        <div className="user-icon">
          <FaUser />
        </div>
      </aside>

      <main className="main-panel">
        <div className="main-header">
          <h1>Magnata's Company</h1>
          <p className="subtext-br">ACESSO À INTELIGÊNCIA ESTRATÉGICA</p>
        </div>

        <div className="main-modules">
          <div className="module-card glow-left">
            <h2>MEGA MAGNATA'S V1</h2>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="module-card glow-right">
            <h2>EXECUTOR 1.3</h2>
            <p>CORE MODULE</p>
          </div>
        </div>

        <div className="bottom-modules">
          <div className="bottom-card">
            <h3>RECENT CONTENT</h3>
          </div>
          <div className="bottom-card">
            <h3>USER SETTINGS</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
