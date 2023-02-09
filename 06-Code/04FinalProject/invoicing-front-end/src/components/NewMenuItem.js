import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const NewMenuItem = () => {
    const navigate = useNavigate();

    const [menuItem , setMenuItem] = useState({});
    const axiosPrivate = useAxiosPrivate();

    function handleStatusChange(e){
        setMenuItem({
            ...menuItem,
            status: e.target.value
        })
    }

    function handleCodeChange(e){
        setMenuItem({
            ...menuItem,
            code: e.target.value
        })
    }

    function handleCategoryChange(e){
        setMenuItem({
            ...menuItem,
            category: e.target.value
        })
    }

    function handleNameChange(e){
        setMenuItem({
            ...menuItem,
            name: e.target.value
        })
    }

    function handlePriceChange(e){
        setMenuItem({
            ...menuItem,
            price: e.target.value
        })
    }

    function handlePaysTaxesChange(e){
        setMenuItem({
            ...menuItem,
            paysTaxes: true
        })
    }

    const handleNewMenuItem = async () => {

        const saveMenuItem = async () => {
            try {
                console.log(menuItem);
                await axiosPrivate.post(`/restaurant/menuItems/`,
                JSON.stringify(menuItem));
            } catch (error) {
                console.log(error);
            }
        }

        saveMenuItem();
        // Based on https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep to give time for change
        await new Promise(r => setTimeout(r, 1000));
        navigate("/adminMenuItems");
    }

    return (

        <section>
            <h1>Nuevo Ítem de Menú</h1>
            <form>

            <span>
                <label htmlFor="status">¿Activo?:</label>
                <input
                    type="checkbox"
                    id="fullName"
                    onChange={handleStatusChange}
                    required
                />
            </span>

            <label htmlFor="code">Código:</label>
                <input
                    type="text"
                    id="code"
                    autoComplete="off"
                    onChange={handleCodeChange}
                    required
                />

                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    autoComplete="off"
                    onChange={handleCategoryChange}
                    required
                />

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    onChange={handleNameChange}
                    required
                />
                <br />
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    min={0}
                    step={'0.00'}
                    id="price"
                    onChange={handlePriceChange}
                    required
                />
                <br />
                <span>
                    <label htmlFor="paysTaxes">Paga Impuestos:</label>
                    <input
                        type="checkbox"
                        id="paysTaxes"
                        onChange={handlePaysTaxesChange}
                        required
                    />
                </span>
                <br/>
                <Button onClick={handleNewMenuItem} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Ítem de Menú</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default NewMenuItem;