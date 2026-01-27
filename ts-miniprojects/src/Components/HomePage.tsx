import { Link } from "react-router";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="title">TS-Mini Projects</h1>

      <div className="projects">
        <Link to="/tabs" className="card">📂 Tabs Project</Link>
        <a href="/react-practice/" className="card">
          🏠 React Mini Projects
        </a>
      </div>

      <p className="footer">TypeScript-React Mini Projects</p>
    </div>
  );
};

export default HomePage;
