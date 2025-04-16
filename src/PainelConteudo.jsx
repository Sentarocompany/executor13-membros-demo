import React from "react";
import "../style.css";

export default function PainelConteudo() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <img src="/logo-magnata.png" alt="Logo Magnata" className="mx-auto w-32" />
          <h1 className="text-4xl font-bold mt-4">Painel do Executor 13.0</h1>
          <p className="text-lg text-gray-600">Acesso exclusivo à central de comandos do seu sistema</p>
        </header>

        <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🔒 Acesso Rápido</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2">Ver Regras do Sistema</li>
            <li className="border-b pb-2">Logs de Ação</li>
            <li className="border-b pb-2">Relatórios de Atividade</li>
            <li className="border-b pb-2">Status do Executor</li>
          </ul>
        </section>

        <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📽️ Conteúdos em Vídeo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Demonstração"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/1Q8fG0TtVAY"
                title="Apresentação do Sistema"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📌 Detalhes Técnicos</h2>
          <p className="text-gray-700">
            Esta área fornece acesso às funcionalidades avançadas, integração com sistemas externos, comandos diretos da IA e tudo necessário para executar suas ações com eficiência máxima.
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          Executor 13.0 - Desenvolvido para performance e comando absoluto.
        </footer>
      </div>
    </div>
  );
}
