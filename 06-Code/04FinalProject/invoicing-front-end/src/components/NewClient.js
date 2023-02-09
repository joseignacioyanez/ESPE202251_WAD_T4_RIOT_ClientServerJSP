import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Button from '@mui/material/Button';

const NewClient = () => {
    const navigate = useNavigate();

    const [client , setClient] = useState({});
    const axiosPrivate = useAxiosPrivate();

    function handleNameChange(e) {
        setClient({
            ...client,
            name: e.target.value
        })
    }

    function handleEmailChange(e){
        setClient({
            ...client,
            email: e.target.value
        })
    }

    function handleIdCardChange(e) {
        setClient({
            ...client,
            idCard: e.target.value
        })
    }

    function handleCellphoneChange(e) {
        setClient({
            ...client,
            cellphone: e.target.value
        })
    }

    function handleAddressChange(e) {
        setClient({
            ...client,
            address: e.target.value
        })
    }

    const handleNewClient = async () => {

        const saveClient = async () => {
            try {
                console.log(client);
                await axiosPrivate.post(`/restaurant/clients/`,
                JSON.stringify(client));
            } catch (error) {
                console.log(error);
            }
        }

        saveClient();
        // Based on https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep to give time for change
        await new Promise(r => setTimeout(r, 1000));
        navigate("/adminClients");
    }

    return (

        <section>
            <h1>Nuevo Cliente</h1>
            <form>

                <label htmlFor="fullName">Nombre Completo:</label>
                <input
                    type="text"
                    id="fullName"
                    autoComplete="off"
                    onChange={ handleNameChange }
                    required
                />

            <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    onChange={ handleEmailChange }
                    required
                />

                <label htmlFor="idCard">Cédula/RUC:</label>
                <input
                    type="text"
                    id="idCard"
                    autoComplete="off"
                    onChange={handleIdCardChange}
                    required
                />
                <label htmlFor="cellphone">Teléfono:</label>
                <input
                    type="text"
                    id="cellphone"
                    autoComplete="off"
                    onChange={handleCellphoneChange}
                    required
                />

                <label htmlFor="address">Dirección:</label>
                <input
                    type="text"
                    id="address"
                    onChange={handleAddressChange}
                    required
                />
                <br />
                <Button onClick={handleNewClient} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Cliente</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default NewClient;