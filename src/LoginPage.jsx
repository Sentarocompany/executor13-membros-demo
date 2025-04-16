.login-magnata-bg {
  background-color: #0d0d0d;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}

.login-card-magnata {
  background-color: rgba(26, 26, 26, 0.95);
  border: 1px solid #d4af37;
  border-radius: 16px;
  padding: 40px 30px;
  width: 360px;
  text-align: center;
  color: #fff;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.35);
  transition: all 0.3s ease;
}

.login-card-magnata:hover {
  box-shadow: 0 0 18px rgba(212, 175, 55, 0.45);
}

.logo-magnata {
  width: 110px;
  margin-bottom: 25px;
  border-radius: 10px;
  background: transparent;
}

/* Inputs refinados */
.login-card-magnata input {
  width: 100%;
  padding: 12px;
  margin-top: 14px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  border-radius: 8px;
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  transition: border 0.3s ease;
}

.login-card-magnata input:focus {
  border-color: #d4af37;
}

/* Placeholder leve */
.login-card-magnata input::placeholder {
  color: #999;
}

/* Botão refinado */
.login-card-magnata button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: #d4af37;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  transition: background 0.3s, box-shadow 0.3s;
}

.login-card-magnata button:hover {
  background-color: #f5c942;
  box-shadow: 0 0 8px #d4af37;
}
