// Author: Jose Ignacio Yanez
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faUsers, faUtensils, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


const Admin = () => {
    let navigate = useNavigate();

    return (
        <>
            <h1>Menú del Administrador</h1>
            <br />
            <p>Usted tiene el Rol de Administrador.</p>
            <br/>

            <div className="flexGrow">
                <div className="adminMenuContainer">
                    <div>
                        <Link to="/adminClients" className="menuButton">
                            <FontAwesomeIcon icon={faPeopleGroup} style={{color:'#fff'}} size={'3x'} />
                            <span>Administrar Clientes</span>
                        </Link>

                        <Link to="/adminMenuItems" className="menuButton">
                            <FontAwesomeIcon icon={faUtensils} style={{color:'#fff'}} size={'3x'} />
                            <span>Administrar el Menú</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/adminUsers" className="menuButton">
                            <FontAwesomeIcon icon={faUsers} style={{color:'#fff'}} size={'3x'} />
                            <span>Administrar Usuarios</span>
                        </Link>

                        <Link to="/adminInvoices" className="menuButton">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} style={{color:'#fff'}} size={'3x'} />
                            <span>Administrar Facturas</span>
                        </Link>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate("/")}>Volver</button>
        </>
    )
}

export default Admin