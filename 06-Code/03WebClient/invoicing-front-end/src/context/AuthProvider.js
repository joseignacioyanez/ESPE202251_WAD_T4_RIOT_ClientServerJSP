// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=X3qyxo_UTR4
// This example is interesting because it is very complete
// It considers things like Accesibility and Screen Readers

// This provides context for whole app for sessions, so is imported on index.js

import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return(
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}