import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Framer Motion Cards</h1>
      <div className="projects">
        <Link to="/water-drop" className="card">💧 Water Drop</Link>
        <Link to="/explosion" className="card">💥 Particle Explosion Button</Link>
        <Link to="/sound-reactive" className="card">📣 Sound-Reactive Animation</Link>
        <Link to="/glass-morphing" className="card">⬜️ Glass Morphing Card Transition</Link>
        <Link to="/loader-animation" className="card">⏳ Loader Animation</Link>
        <Link to="/flipping-card" className="card">🃏 Flipping Cards</Link>
        <Link to="/gesture" className="card">🖖 Gesture</Link>
        <Link to="/stagger" className="card">〰 Staggering Animation</Link>
        <a href="https://hrisshhii.github.io/react-practice/ts" className="card" style={{ background: "linear-gradient(135deg,#6366f1,#22d3ee)" }}>
          ⚡ TypeScript Mini Projects
        </a>
        <a href="https://hrisshhii.github.io/react-practice/" className="card" style={{ background: "linear-gradient(135deg,#9333ea,#ec4899)" }}>
          🏠 React Mini Projects
        </a>
      </div>
      <p className="footer">Framer motion practices</p>
    </div>
  );
}