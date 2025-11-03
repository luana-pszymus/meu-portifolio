export default function ProfileImage({ imagem, nome }) {
  return (
    <div className="profile-container">
      <div className="profile-image-wrapper">
        <img src={imagem} alt={`Foto de ${nome}`} className="profile-image" />
      </div>
    </div>
  );
}
