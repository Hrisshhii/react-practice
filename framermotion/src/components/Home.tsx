import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Framer Motion Cards</h1>
      <div className="projects">
        <Link to="" className="card"></Link>
        <a href="https://hrisshhii.github.io/react-practice/ts" className="card" style={{ background: "linear-gradient(135deg,#6366f1,#22d3ee)" }}>
          ⚡ TypeScript Mini Projects
        </a>
        <a href="https://hrisshhii.github.io/react-practice/" className="card" style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)" }}>
          🏠 React Mini Projects
        </a>
      </div>
    </div>
  );
}