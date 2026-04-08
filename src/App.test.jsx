import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' 
import App from './App'

test('renders my name', () => {
  render(<App />)
  const nameElement = screen.getByText(/Rukaiya Pardawala/i)
  expect(nameElement).toBeInTheDocument()
})