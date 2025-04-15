import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === "admin" && password === "Luhanjoao123!") {
      setIsLoggedIn(true);
    } else {
      alert("Acesso negado. Verifique suas credenciais.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold mb-4 text-center text-black">Executor 13.0 - Área de Membros</h1>
          <input
            type="text"
            placeholder="Usuário"
            className="mb-4 w-full p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="mb-4 w-full p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full p-2 bg-black text-white rounded" onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="text-3xl font-bold mb-6">Painel - Executor 13.0</header>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-gray-800 p-4 rounded-2xl">
          <h2 className="text-xl font-semibold">Status do Sistema</h2>
          <p className="mt-2 text-green-400">✅ Rodando normalmente</p>
          <p className="text-sm text-gray-400">Última análise: 10:07h</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-2xl">
          <h2 className="text-xl font-semibold">Campanhas Ativas</h2>
          <ul className="mt-2 text-sm">
            <li>👟 COMPRE 1 LEVE 2 - R$20/dia</li>
            <li>🔥 Teste de Criativos - R$15/dia</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-2xl">
          <h2 className="text-xl font-semibold">Logs Recentes</h2>
          <ul className="mt-2 text-sm text-gray-300">
            <li>📌 Campanha duplicada às 09:32h</li>
            <li>⛔ Campanha pausada (CPA alto)</li>
            <li>✅ Nova campanha criada com sucesso</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
