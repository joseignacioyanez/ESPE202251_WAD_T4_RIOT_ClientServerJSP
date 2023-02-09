import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const NewUser = () => {
    const navigate = useNavigate();

    const [user , setUser] = useState({});
    const axiosPrivate = useAxiosPrivate();

    function handleFullNameChange(e){
        setUser({
            ...user,
            fullName: e.target.value
        })
    }

    function handleEmailChange(e){
        setUser({
            ...user,
            email: e.target.value
        })
    }

    function handleUsernameChange(e){
        setUser({
            ...user,
            username: e.target.value
        })
    }

    function handlePasswordChange(e){
        setUser({
            ...user,
            passwordHash: e.target.value 
        })
    }

    const handleNewUser = async () => {

        const saveUser = async () => {
            try {
                console.log(user);
                await axiosPrivate.post(`/restaurant/users/`,
                JSON.stringify(user));
            } catch (error) {
                console.log(error);
            }
        }

        saveUser();
        // Based on https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep to give time for change
        await new Promise(r => setTimeout(r, 1000));
        navigate("/adminUsers");
    }


    return (

        <section>
            <h1>Nuevo Usuario</h1>
            <form autoComplete='off'>

                <label htmlFor="fullName">Nombre Completo:</label>
                <input
                    type="text"
                    id="fullName"
                    autoComplete="off"
                    onChange={handleFullNameChange}
                    required
                />

            <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    onChange={handleEmailChange}
                    required
                />

                <label htmlFor="username">Nombre de Usuario:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={handleUsernameChange}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePasswordChange}
                    required
                />
                <br />
                <Button onClick={handleNewUser} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Usuario</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default NewUser;