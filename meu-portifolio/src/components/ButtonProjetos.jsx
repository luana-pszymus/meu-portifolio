import { useState } from "react";

export default function ButtonProjetos() {
  const [showProjects, setShowProjects] = useState(false);

  function toggleProjects() {
    setShowProjects(!showProjects);
  }

  return (
    <div className="hero">
      <button onClick={toggleProjects}>
        {showProjects ? "Ocultar projetos" : "Confira meus projetos"}
      </button>

      {showProjects && (
        <div className="projects-section">
          <h3>✨ Meus Projetos no Git Hub</h3>
          <ul>
            <li>
              <a
                href="https://github.com/luana-pszymus/Geducaional"
                target="_blank"
              >
                Plataforma Escolar Triledu
              </a>
            </li>
            <li>
              <a
                href="https://github.com/luana-pszymus/meu-portifolio"
                target="_blank"
              >
                Meu Portifólio
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
