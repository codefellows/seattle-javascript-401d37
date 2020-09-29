import React from 'react'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from './test-utils'

import App from './app';

it('updates Mary votes', async () => {
  render(<App />)
  
  let maryContent = screen.getByText('Mary').parentElement.textContent;
  expect(maryContent).toBe('Mary00%');
  
  fireEvent.click(screen.getByText('Mary'));
  maryContent = screen.getByText('Mary').parentElement.textContent;
  expect(maryContent).toBe('Mary1100.00%');

  fireEvent.click(screen.getByText('Mary'));
  maryContent = screen.getByText('Mary').parentElement.textContent;
  expect(maryContent).toBe('Mary2100.00%');

})

it('prevents cheating', async () => {
  render(<App />)
  
  let maryContent = screen.getByText('Mary').parentElement.textContent;
  expect(maryContent).toBe('Mary00%');
  
  fireEvent.doubleClick(screen.getByText('Mary'));
  expect(maryContent).toBe('Mary00%');
  

})
