import { Literatura } from "../pages/Literatura";
import { Gramatyka } from "../pages/Gramatyka";
import { Ortografia } from "../pages/Ortografia";
import { Egzamin } from "../pages/Egzamin";
import { LinkBtn } from "./LinkBtn";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import App from "../App";


export function NavBar(){
    const location = useLocation();


    // style dla navbar
    const nav_style={
        display: "flex",
        justifyContent: "space-around",
        
    }



    // Navbar ma się pojawiać TYLKO na stronie głównej
    if (location.pathname !== "/") {
        return null;
    }

    // Jeśli jesteśmy na stronie głównej, renderujemy navbar
    return (
        <>
            <nav>
                <div style={nav_style}>
                    <Link to="/Literatura">  <LinkBtn Text="Literatura" img="../Graphic/book.png" bg_color="#00d9ff"/>  </Link>
                    <Link to="/Gramatyka">  <LinkBtn Text="Gramatyka"/>  </Link>
                    <Link to="/Ortografia">  <LinkBtn Text="Ortografia"/>  </Link>
                    <Link to="/Egzamin">  <LinkBtn Text="Egzamin"/>  </Link>
                </div>
                
                <Routes>
                    <Route path="/" />
                    <Route path="/Literatura" element={<Literatura />} />
                    <Route path="/Gramatyka" element={<Gramatyka />} />
                    <Route path="/Ortografia" element={<Ortografia />} />
                    <Route path="/Egzamin" element={<Egzamin />} />
                </Routes>

            </nav>
        </>
        
        
    )
}