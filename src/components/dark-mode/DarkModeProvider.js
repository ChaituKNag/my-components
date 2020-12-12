import React from 'react'
import useLocalStorage from '../../hooks/use-local-storage.hook'

export const DarkModeContext = React.createContext(false)

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useLocalStorage('dark-mode')
  return (
    <DarkModeContext.Provider
      value={{
        darkMode: dark,
        toggleDarkMode: () => setDark((d) => !d)
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
