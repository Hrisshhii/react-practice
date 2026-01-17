import { Link } from "react-router";
import './Home.css';
export const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Mini Projects</h1>
      <div className="projects">
        <Link to="/counter" className="card">🔢 Counter App</Link>
        <Link to="/todo" className="card">📝 Todo App</Link>
      </div>
      <p className="footer">React Mini Projects</p>
    </div>
  );
};
