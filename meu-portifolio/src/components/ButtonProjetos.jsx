import { useState } from "react";

export default function ButtonProjetos() {
  const [showProjects, setShowProjects] = useState(false);

  function toggleProjects() {
    setShowProjects(!showProjects);
  }

  return (
    <div className="hero">
      <div className="hero-section">
        {/* Botão existente, agora com evento */}
        <button onClick={toggleProjects}>
          {showProjects ? "Ocultar projetos" : "Confira meus projetos"}
        </button>

        {/* Seção condicional */}
        {showProjects && (
          <div className="projects-section">
            <h3>✨ Meus Projetos</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/seuusuario/projeto1"
                  target="_blank"
                >
                  Sistema de Gerenciamento Escolar
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/seuusuario/projeto2"
                  target="_blank"
                >
                  Portfólio Interativo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/seuusuario/projeto3"
                  target="_blank"
                >
                  Aplicativo de Turismo Digital
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
