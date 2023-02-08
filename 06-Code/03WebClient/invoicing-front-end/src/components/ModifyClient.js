// Author: Jose Ignacio Yanez
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef  } from 'react';

const ModifyClient = () => {
    const navigate = useNavigate();

    const { state } = useLocation();
    const { idCard } = state || {};


    const [client , setClient] = useState({});


    const [isLoading, setLoading ] = useState(true);

    const axiosPrivate = useAxiosPrivate();

    // For react18 changed useEffect to run Twice
    const effectRan = useRef(false)

    // Get data
    useEffect(() => {
    
        console.log("Will Run, " + !effectRan.current);
        if (effectRan.current === false){

            const getClient = async () => {
                try {
                    const response = await axiosPrivate.get(`/restaurant/clients/${idCard}`, {
                    });
                    console.log("Response: " + JSON.stringify(response.data[0]));
                    setClient(response.data[0]);
                    
                } catch (error) {
                    console.log(error);
                    // Handle the case the refreshToken of the DB expires, make Login but return to where user was
                    // Even though this is crashing because the first requests are getting canceled TODO
                    //navigate('/login', { state: { from: location }, replace: true });
                } finally {
                    setLoading(false);
                }
            }

            getClient();
            // Cleanup function
            return () => {
                effectRan.current = true;
                console.log("Unmounted Cleanup")
            }
        }
    }, [])

    // Handle Inputs Change
    function handleFullNameChange(e) {
        setClient({
            ...client,
            name: e.target.value
        });
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

    // Handle Confirmation Modify
    const handleModify = async () => {

        const updateClient = async () => {
            try {
                await axiosPrivate.put(`/restaurant/client/${idCard}`,
                JSON.stringify(client));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        updateClient();
        // Based on https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep to give time for change
        await new Promise(r => setTimeout(r, 1000));
        navigate("/adminClients");
    }

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    };

    return (

        <section>
            <h1>Modificar Cliente</h1>
            <form>

                <label htmlFor="name">Nombre Completo:</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    defaultValue = { client.name }
                    onChange = {handleFullNameChange}
                    required
                />

            <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    defaultValue={client.email}
                    onChange = { handleEmailChange }
                    required
                />

                <label htmlFor="idCard">Cédula/RUC:</label>
                <input
                    type="text"
                    id="idCard"
                    autoComplete="off"
                    defaultValue={client.idCard}
                    onChange = { handleIdCardChange }
                    required
                />
                <label htmlFor="cellphone">Teléfono:</label>
                <input
                    type="text"
                    id="cellphone"
                    autoComplete="off"
                    defaultValue={client.cellphone}
                    onChange = { handleCellphoneChange }
                    required
                />

                <label htmlFor="address">Dirección:</label>
                <input
                    type="text"
                    id="address"
                    defaultValue={client.address}
                    onChange = { handleAddressChange }
                    required
                />
                <br />
                <Button onClick={() => handleModify()} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Confirmar</Button>
                <br />
                <Button onClick={() => navigate(-1)} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    );
}

export default ModifyClient;