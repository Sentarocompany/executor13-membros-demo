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
              <li><FaBox /> Produtos</li>
              <li><FaFileAlt /> Conteúdo</li>
              <li><FaFileAlt /> Relatórios</li>
              <li><FaCog /> Configurações</li>
            </ul>
          </nav>
        </div>
        <div className="user-icon">
          <FaUser />
        </div>
      </aside>

      <main className="main-panel">
        <div className="main-header">
          <h1>Magnat's Company</h1>
          <p className="subtext-br">ACESSO À INTELIGÊNCIA ESTRATÉGICA</p>
        </div>

        <div className="main-modules">
          <div className="module-card glow-left">
            <h2>MEGA MÓDULO MAGNATA</h2>
            <p>MÓDULO DE PRODUTO</p>
          </div>
          <div className="module-card glow-right">
            <h2>EXECUTOR 1.3</h2>
            <p>MÓDULO CENTRAL</p>
          </div>
        </div>

        <div className="bottom-modules">
          <div className="bottom-card">
            <h3>CONTEÚDO RECENTE</h3>
          </div>
          <div className="bottom-card">
            <h3>CONFIGURAÇÕES DO USUÁRIO</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
