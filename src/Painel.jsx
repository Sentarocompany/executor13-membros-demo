import React from "react";
import { FaTachometerAlt, FaBoxOpen, FaFileAlt, FaCog, FaUserCircle } from "react-icons/fa";
import './style.css'; // 👈 Aqui o CSS é importado

const Painel = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <h2>DASHBOARD</h2>
          <nav>
            <div className="active"><FaTachometerAlt /> <span>Dashboard</span></div>
            <div><FaBoxOpen /> <span>Products</span></div>
            <div><FaFileAlt /> <span>Content</span></div>
            <div><FaFileAlt /> <span>Reports</span></div>
            <div><FaCog /> <span>Settings</span></div>
          </nav>
        </div>
        <div className="user">
          <FaUserCircle /> <span>Perfil</span>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <h1>EXECUTOR 13.0</h1>
        <p>ACCESS TO STRATEGIC INTELLIGENCE</p>

        <div className="card-grid">
          <div className="card">
            <h2>MEGA MAGNATA'S V1</h2>
            <p>PRODUCT MODULE</p>
          </div>
          <div className="card">
            <h2>EXECUTOR 1.3</h2>
            <p>CORE MODULE</p>
          </div>
        </div>

        <div className="card-grid">
          <div className="section-box">
            <h3>RECENT CONTENT</h3>
          </div>
          <div className="section-box">
            <h3>USER SETTINGS</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Painel;
