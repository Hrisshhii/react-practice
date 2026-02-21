import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="title">TS-Mini Projects</h1>

      <div className="projects">
        <Link to="/tabs" className="card">📂 Tabs Project</Link>
        <Link to="/blogs" className="card">📝 Blogs Project</Link>
        <Link to="/project-tracker" className="card">📊 Project Tracker</Link>
        <Link to="/ecommerce-filtering" className="card">🔍 Ecommerce Advanced Filtering</Link>
        <a href="https://hrisshhii.github.io/react-practice/" className="card" style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)" }}>
          🏠 React Mini Projects
        </a>
        <a href="https://hrisshhii.github.io/react-practice/framer" className="card" style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)" }}>
          🎴 Framer Motion Cards
        </a>
      </div>


      <p className="footer">TypeScript-React Mini Projects</p>
    </div>
  );
};

export default HomePage;
