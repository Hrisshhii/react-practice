import { Link } from "react-router";
import { Home } from "lucide-react";
import './BackHome.css'
export const BackHome=()=>(
    <Link to="/" className='home-btn'>
        <Home size={25}/>
    </Link>
);
