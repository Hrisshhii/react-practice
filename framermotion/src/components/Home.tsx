import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Framer Motion Cards</h1>
      <div className="projects">
        <Link to="" className="card"></Link>
      </div>
    </div>
  );
}