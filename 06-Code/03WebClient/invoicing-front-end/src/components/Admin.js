import { Link } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
    return (
        <section>
            <h1>Menú del Administrador</h1>
            <br />
            <p>Usted tiene el Rol de Administrador.</p>
            <br/>
            <Users />
            <br />
            <div className="flexGrow">
                <Link to="/adminClients">Administrar Clientes</Link><br/>
                <Link to="/adminMenu">Administrar el Menú</Link><br/>
                <Link to="/adminInvoices">Administrar Facturas</Link><br/>
                <Link to="/adminUsers">Administrar Usuarios</Link>
            </div>
        </section>
    )
}

export default Admin