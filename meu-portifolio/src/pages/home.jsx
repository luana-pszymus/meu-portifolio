import Conteudo from "../components/conteudo.jsx";
import App from "../components/App.jsx";
import ProfileImage from "../components/profile.jsx";
import { personalData } from "../data/personalData.js";
import ButtonProjetos from "../components/ButtonProjetos.jsx";

export default function Home() {
  return (
    <div>
      <Conteudo nome={personalData.nome} curso={personalData.curso} />
      <div className="hero-section">
        <div className="text-content">
          <App descricao={personalData.descricao} />
          <ButtonProjetos />
        </div>
        <div className="image-content">
          <ProfileImage imagem={personalData.imagem} nome={personalData.nome} />
        </div>
      </div>
    </div>
  );
}
