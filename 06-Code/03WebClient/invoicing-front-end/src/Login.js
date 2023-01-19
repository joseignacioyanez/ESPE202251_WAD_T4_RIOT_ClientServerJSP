// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=X3qyxo_UTR4
// This example is interesting because it is very complete
// It considers things like Accesibility and Screen Readers
import { useRef, useState, useEffect, useContext } from "react";
import useAuth from './hooks/useAuth';
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "./api/axios";
const LOGIN_URL = "/login";

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username: user, passwordHash: pwd}), // Lo que espera la API Rest de Autenticacion
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            setAuth({ user, pwd, role, accessToken })
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (error) {
            if(!error?.response) {
                setErrMsg("No Server Response");
            }else if(error.response?.status === 400) {
                setErrMsg("Missing Username and Password");
            } else if (error.response?.status === 401) {
                setErrMsg("Unathorized");
            } else {
                setErrMsg("Login failed");
            }
            errRef.current.focus();
        }
    }
    
    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )
}

export default Login;