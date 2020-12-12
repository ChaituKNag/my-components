import { useEffect, useState } from 'react'

const useLocalStorage = (name, defaultValue) => {
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
      const fromStorage = JSON.parse(localStorage.getItem(name))
      if (fromStorage !== null) setValue(fromStorage)
      else {
        localStorage.setItem(name, JSON.stringify(defaultValue))
      }
    }
  }, [])

  return [value, updateValue]
}

export default useLocalStorage
