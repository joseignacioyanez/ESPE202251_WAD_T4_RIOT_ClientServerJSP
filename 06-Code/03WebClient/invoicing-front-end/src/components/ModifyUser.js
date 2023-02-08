// Author: Jose Ignacio Yanez
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef  } from 'react';

const ModifyUser = () => {
    const navigate = useNavigate();

    const { state } = useLocation();
    const { username } = state || {};


    const [user , setUser] = useState({});


    const [isLoading, setLoading ] = useState(true);

    const axiosPrivate = useAxiosPrivate();

    // For react18 changed useEffect to run Twice
    const effectRan = useRef(false)

    // Get data
    useEffect(() => {
    
        console.log("Will Run, " + !effectRan.current);
        if (effectRan.current === false){

            const getUser = async () => {
                try {
                    const response = await axiosPrivate.get(`/restaurant/users/${username}`, {
                    });
                    console.log("Response: " + JSON.stringify(response.data[0]));
                    setUser(response.data[0]);
                    
                } catch (error) {
                    console.log(error);
                    // Handle the case the refreshToken of the DB expires, make Login but return to where user was
                    // Even though this is crashing because the first requests are getting canceled TODO
                    //navigate('/login', { state: { from: location }, replace: true });
                } finally {
                    setLoading(false);
                }
            }

            getUser();
            // Cleanup function
            return () => {
                effectRan.current = true;
                console.log("Unmounted Cleanup")
            }
        }
    }, [])

    // Handle Inputs Change
    function handleFullNameChange(e) {
        setUser({
            ...user,
            fullName: e.target.value
        });
    }

    function handleEmailChange(e){
        setUser({
            ...user,
            email: e.target.value
        })
    }

    // Handle Confirmation Modify
    const handleModify = async () => {

        const updateUser = async () => {
            try {
                await axiosPrivate.put(`/restaurant/users/${username}`,
                JSON.stringify(user));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        updateUser();
        // Based on https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep to give time for change
        await new Promise(r => setTimeout(r, 1000));
        navigate("/adminUsers");
    }

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    };

    return (

        <section>
            <h1>Modificar Usuario</h1>
            <form>

            <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    defaultValue={user.username}
                    required
                    readOnly
            />

                <label htmlFor="fullName">Nombre Completo:</label>
                <input
                    type="text"
                    id="fullName"
                    autoComplete="off"
                    defaultValue = { user.fullName }
                    onChange = {handleFullNameChange}
                    required
                />

            <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    defaultValue={user.email}
                    onChange = { handleEmailChange }
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

export default ModifyUser;