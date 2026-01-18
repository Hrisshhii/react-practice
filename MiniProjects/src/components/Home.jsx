import { Link } from "react-router";
import './Home.css';
export const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Mini Projects</h1>
      <div className="projects">
        <Link to="/counter" className="card">🔢 Counter App</Link>
        <Link to="/todo" className="card">📝 Todo App</Link>
        <Link to="/mealslist" className="card">🍽️ Meals List</Link>
        <Link to="/calculator" className="card">🧮 Calculator</Link>
        <Link to="/togglebgcolor" className="card">🎨 Toggle BG Color</Link>
        <Link to="/hiddensearchbar" className="card">🔍 Hidden Searchbar</Link>
        <Link to="/pokedex" className="card">🐉 Pokedex</Link>
        <Link to="/accordion" className="card">📂 Accordion</Link>
        <Link to="/formvalidation" className="card">✅ Form Validation</Link>
        <Link to="/ecommercefiltering" className="card">🛒 E-commerce (Filtering)</Link>

      </div>
      <p className="footer">React Mini Projects</p>
    </div>
  );
};
