import App from "./App.jsx";
import ProfileImage from "./profile.jsx";

export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="text-content">
          <App />
        </div>
        <div className="image-content">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
