import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Se quiser personalizar por aqui

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar validação simples se quiser
    navigate("/painel");
  };

  return (
    <div style={styles.container}>
      <img src="/logo-magnata.png" alt="Logo" style={styles.logo} />
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    color: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  logo: {
    width: "180px",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "280px",
    gap: "16px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background 0.3s ease",
  }
};
