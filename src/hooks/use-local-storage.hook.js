import { useEffect, useState } from 'react'

const useLocalStorage = (name, defaultValue = null) => {
  const [value, setValue] = useState(defaultValue)
  const updateValue = (v) => {
    let newValue

    if (typeof v === 'function') {
      newValue = v(value)
    } else {
      newValue = v
    }

    setValue(newValue)

    if (localStorage) {
      localStorage.setItem(name, JSON.stringify(newValue))
    }
  }

  useEffect(() => {
    if (localStorage) {
      const fromStorage = localStorage.getItem(name)
      if (fromStorage !== null) {
        const parsedFromStorage = JSON.parse(fromStorage)
        setValue(parsedFromStorage)
      } else if (defaultValue !== null) {
        localStorage.setItem(name, JSON.stringify(defaultValue))
      }
    }
  }, [])

  return [value, updateValue]
}

export default useLocalStorage
