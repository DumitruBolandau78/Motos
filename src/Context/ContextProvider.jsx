import React, { useState } from "react";

export const UtilsContext = React.createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [url, setUrl] = useState(null);
    const [isModalOpenContact, setIsModalOpenContact] = useState(false);

    return (
        <UtilsContext.Provider value={{ url, setUrl, isModalOpenContact, setIsModalOpenContact }}>
            { children }
        </UtilsContext.Provider>
    )
}

export default ContextProvider;