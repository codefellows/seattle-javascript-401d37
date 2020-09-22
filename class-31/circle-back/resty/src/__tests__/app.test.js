import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'

describe('Navigation', () => {

  it('loads the home page', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link',{ name:"Home" }));
    expect(screen.getByRole('document'));
  })

  it('navigates to help page', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link',{ name:"Help" }));
    expect(screen.getByText('Help Goes Here'));
  })


})
