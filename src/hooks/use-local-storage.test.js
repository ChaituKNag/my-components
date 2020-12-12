import {
  UseLocalStorageCountExample,
  UseLocalStorageObjectExample,
  UseLocalStorageTruthExample
} from './use-local-storage.example'
import { render, screen, fireEvent } from '../../test-utils'
import * as React from 'react'

test('UseLocalStorageCountExample exists', () => {
  render(<UseLocalStorageCountExample />)
  expect(screen.getByTestId('count')).toBeInTheDocument()
  expect(screen.getByTestId('plus')).toBeInTheDocument()
  expect(screen.getByTestId('minus')).toBeInTheDocument()
})

test('UseLocalStorageTruthExample exists', () => {
  render(<UseLocalStorageTruthExample />)
  expect(screen.getByTestId('true')).toBeInTheDocument()
  expect(screen.getByTestId('truth')).toBeInTheDocument()
  expect(screen.getByTestId('false')).toBeInTheDocument()
})

test('UseLocalStorageObjectExample exists', () => {
  render(<UseLocalStorageObjectExample />)
  expect(screen.getByTestId('clap')).toBeInTheDocument()
  expect(screen.getByTestId('clapCount')).toBeInTheDocument()
})

test('useLocalStorage works for number values', () => {
  render(<UseLocalStorageCountExample />)
  const countEl = screen.getByTestId('count')
  const plusEl = screen.getByTestId('plus')
  const minusEl = screen.getByTestId('minus')
  expect(countEl).toHaveTextContent('0')
  fireEvent.click(plusEl)
  fireEvent.click(plusEl)
  expect(countEl).toHaveTextContent('2')
  expect(window.localStorage.getItem('example-count')).toBe('2')
  fireEvent.click(minusEl)
  expect(countEl).toHaveTextContent('1')
  expect(window.localStorage.getItem('example-count')).toBe('1')
})

test('useLocalStorage works for boolean values', () => {
  render(<UseLocalStorageTruthExample />)
  const trueBtn = screen.getByTestId('true')
  const falseBtn = screen.getByTestId('false')
  const truthEl = screen.getByTestId('truth')

  expect(truthEl).toHaveTextContent('false')
  expect(window.localStorage.getItem('example-truth')).toBe('false')

  fireEvent.click(trueBtn)

  expect(truthEl).toHaveTextContent('true')
  expect(window.localStorage.getItem('example-truth')).toBe('true')

  fireEvent.click(falseBtn)
  expect(truthEl).toHaveTextContent('false')
  expect(window.localStorage.getItem('example-truth')).toBe('false')
})

test('useLocalStorage works for object values', () => {
  render(<UseLocalStorageObjectExample />)

  const clapBtn = screen.getByTestId('clap')
  const clapCountEl = screen.getByTestId('clapCount')

  expect(clapCountEl).toHaveTextContent('0')
  expect(
    JSON.parse(window.localStorage.getItem('example-object'))
  ).toMatchObject({
    count: 0
  })

  fireEvent.click(clapBtn)
  fireEvent.click(clapBtn)

  expect(clapCountEl).toHaveTextContent('2')
  expect(
    JSON.parse(window.localStorage.getItem('example-object'))
  ).toMatchObject({
    count: 2
  })
})
