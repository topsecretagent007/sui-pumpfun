import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [showCreateMemeModal, setShowCreateMemeModal] = useState(false);
    const [reloadThread, setReloadThread] = useState(false);
    const [bondingCurve, setBondingCurve] = useState();
    const [newMeme, setNewMeme] = useState();
    const [newTrade, setNewTrade] = useState();

    return (
        <GlobalContext.Provider value={{ 
            showCreateMemeModal, 
            setShowCreateMemeModal,
            reloadThread,
            setReloadThread,
            newMeme,
            setNewMeme,
            newTrade,
            setNewTrade,
            bondingCurve,
            setBondingCurve
         }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};