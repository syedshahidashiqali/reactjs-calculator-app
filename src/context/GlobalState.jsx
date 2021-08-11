import React, { createContext, useState } from 'react';

export const GlobalContext = createContext("");

export const GlobalProvider = ({ children }) => {
    const [ expression, setExpression ] = useState("");

    return(
        <GlobalContext.Provider value={{
            expression,
            setExpression
        }}>
            {children}
        </GlobalContext.Provider>
    )

}