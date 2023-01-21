import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const NewMenuItem = () => {
    const navigate = useNavigate();

    return (

        <section>
            <h1>Nuevo Ítem de Menú</h1>
            <form onSubmit={navigate("#")}>

            <span>
                <label htmlFor="status">¿Activo?:</label>
                <input
                    type="checkbox"
                    id="fullName"
                    required
                />
            </span>

            <label htmlFor="code">Código:</label>
                <input
                    type="text"
                    id="code"
                    autoComplete="off"
                    required
                />

                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    autoComplete="off"
                    required
                />

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    required
                />
                <br />
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    min={0}
                    step={'0.00'}
                    id="price"
                    required
                />
                <br />
                <span>
                    <label htmlFor="paysTaxes">Paga Impuestos:</label>
                    <input
                        type="checkbox"
                        id="paysTaxes"
                        required
                    />
                </span>
                <br/>
                <Button onClick={() => navigate("/adminMenuItems")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Ítem de Menú</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default NewMenuItem;