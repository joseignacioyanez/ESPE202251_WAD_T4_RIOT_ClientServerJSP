import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

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
            <Link to="/admin">Ir al Menú de Administrador</Link>
            <Link to="/cashier">Ir a Facturación</Link>

            <div className="flexGrow">
                <button onClick={logout}>Cerrar Sesión</button>
            </div>
        </section>
    )
}

export default Home