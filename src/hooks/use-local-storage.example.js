import React from 'react'
import useLocalStorage from './use-local-storage.hook'

export const UseLocalStorageCountExample = () => {
  const [count, setCount] = useLocalStorage('example-count', 0)
  return (
    <div>
      <button data-testid='plus' onClick={() => setCount((c) => ++c)}>
        +
      </button>
      <span data-testid='count'>{count}</span>
      <button data-testid='minus' onClick={() => setCount((c) => --c)}>
        -
      </button>
    </div>
  )
}

export const UseLocalStorageTruthExample = () => {
  const [truth, setTruth] = useLocalStorage('example-truth', false)
  return (
    <div>
      <button data-testid='true' onClick={() => setTruth((t) => true)}>
        true
      </button>
      <span data-testid='truth'>{truth ? 'true' : 'false'}</span>
      <button data-testid='false' onClick={() => setTruth((t) => false)}>
        false
      </button>
    </div>
  )
}

export const UseLocalStorageObjectExample = () => {
  const [claps, setClaps] = useLocalStorage('example-object', {
    count: 0
  })
  return (
    <div>
      <button
        data-testid='clap'
        onClick={() => setClaps((c) => ({ count: ++c.count }))}
      >
        clap
      </button>
      <span data-testid='clapCount'>{claps && claps.count}</span>
    </div>
  )
}
