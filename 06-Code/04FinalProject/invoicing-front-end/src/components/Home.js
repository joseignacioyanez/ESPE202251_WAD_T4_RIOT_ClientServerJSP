// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=X3qyxo_UTR4

import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faReceipt } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/login');
    }

    return (
        <section>
            <h1>Inicio</h1>
            <br />
            <p>Ha iniciado sesión!</p>
            <br />
            
                <Link to="/admin"  className="menuButton">
                    <FontAwesomeIcon icon={faUserTie} style={{color:'#fff'}} size={'3x'} />
                    <span>Menú de Administrador</span>
                </Link>
                <Link to="/newInvoice" className="menuButton">
                    <FontAwesomeIcon icon={faReceipt} style={{color:'#fff'}} size={'3x'} />
                    <span>Facturación</span>
                </Link>

            <div className="flexGrow">
                <button onClick={logout}>Cerrar Sesión</button>
            </div>
        </section>
    )
}

export default Home