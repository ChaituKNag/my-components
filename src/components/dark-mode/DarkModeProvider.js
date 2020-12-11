import React from 'react'

export const DarkModeContext = React.createContext(false);

const DarkModeProvider = ({ children }) => {
    const [dark, setDark] = React.useState(false);
    return (
        <DarkModeContext.Provider value={{
            darkMode: dark,
            toggleDarkMode: () => setDark(d => !d)
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider
