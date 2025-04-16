
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0a0a0a;
  color: #fff;
}
.futuristic-panel {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(145deg, #0d0d0d, #1c1c1c);
}
.sidebar {
  width: 240px;
  padding: 30px 20px;
  background-color: #111;
  border-right: 1px solid #222;
  display: flex;
  flex-direction: column;
}
.sidebar h2 {
  color: #d4af37;
  font-size: 1.5rem;
  margin-bottom: 40px;
  letter-spacing: 1px;
}
.sidebar h2 span {
  color: #888;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sidebar li {
  cursor: pointer;
  padding: 8px 10px;
  transition: 0.3s;
  border-radius: 6px;
}
.sidebar li:hover {
  background-color: #d4af3733;
  color: #d4af37;
}
.main-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
}
.painel-header h1 {
  font-size: 2rem;
  color: #d4af37;
}
.painel-header p {
  color: #aaa;
  margin-top: 6px;
  margin-bottom: 30px;
}
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
}
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid #333;
  padding: 24px;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
  transition: transform 0.3s ease;
}
.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.3);
}
.glass-card h3, .glass-card h4 {
  color: #f5c942;
}
.glass-card ul {
  padding-left: 20px;
  color: #ccc;
  margin-top: 10px;
}
