// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=nI8PYZNFtac
// This example is interesting because it is very complete
// It considers things like Accesibility and Screen Readers

import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Users = () => {
    const [ users, setUsers ] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController(); // To Cancel request if component unmounts

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/restaurant/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data); // If Component isMounted, set data
            } catch (error) {
                console.log(error);
                // Handle the case the refreshToken of the DB expires, make Login but return to where user was
                // Even though this is crashing because the first requests are getting canceled TODO
                //navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        // Cleanup function
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to Display</p>
            }
        </article>
    );
}

export default Users;