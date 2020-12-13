import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/use-local-storage.hook'

export const DarkModeContext = React.createContext(false)

const DarkModeProvider = ({ options = {}, children }) => {
  const { automatic, darkByDefault } = options
  const [dark, setDark] = useLocalStorage('dark-mode', darkByDefault)
  const [deviceDarkMode, setDeviceDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const listener = (event) => {
      setDeviceDarkMode(event.matches)
    }

    if (!darkByDefault && automatic) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', listener)

      return () =>
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener(listener)
    }
  }, [])

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: dark !== null ? dark : deviceDarkMode,
        toggleDarkMode: () => setDark((d) => !d)
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
