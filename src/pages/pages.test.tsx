import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('click on login button', () => {
  render(<App />);
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton)
  expect(loginButton).not.toBeInTheDocument();
});

test('click on shape filter', () => {
  render(<App />);
  const listTitle = screen.getByText(/All items:/i);
  const squareFilter = screen.getByText(/Square/i);

  //deselect filter
  fireEvent.click(squareFilter)
  expect(listTitle.textContent).toEqual('Multiple items:')
  expect(squareFilter).not.toHaveClass('active');

  //select filter
  fireEvent.click(squareFilter)
  expect(listTitle.textContent).toEqual('All items:')
  expect(squareFilter).toHaveClass('active');
})

test('click on logout button', () => {
  render(<App />);
  const logoutDivButton = screen.getByText(/Logout/i);

  fireEvent.click(logoutDivButton)
  expect(logoutDivButton).not.toBeInTheDocument();
})