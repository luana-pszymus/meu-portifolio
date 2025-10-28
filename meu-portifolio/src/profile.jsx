export default function ProfileImage() {
  return (
    <div className="profile-container">
      <div className="profile-image-wrapper">
        <img
          src="/foto-luana.jpg"
          alt="Foto de perfil"
          className="profile-image"
          width={320}
          height={320}
        />
      </div>
    </div>
  );
}
