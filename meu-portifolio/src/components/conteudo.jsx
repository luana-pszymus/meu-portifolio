export default function Conteudo({ nome, curso }) {
  return (
    <div className="hero">
      <p className="intro">Hi, my name is</p>
      <h1>{nome}</h1>
      <h2>{curso}</h2>
    </div>
  );
}
