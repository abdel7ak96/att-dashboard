import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignUp from '@/pages/SignUp';
import { BrowserRouter } from 'react-router-dom';

// TODO: mock calls to backend to register new user
describe('📃 Sign Up Page', () => {
  // Test suite 1
  test('🎨 renders signup form inputs', () => {
    render(<SignUp />, { wrapper: BrowserRouter });

    // Test for the email input field
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();

    // Test for the password input field
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();

    // Test for the sign up submission button
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
  });

  // Test suite 2
  test('🔐 Toggles password visibility correctly',() => {
    render(<SignUp />, { wrapper: BrowserRouter });

    // select toggle function
    const toggleButton = screen.getByLabelText('toggle password visibility');

    // Toggle password visibility switch (password -> text)
    fireEvent.click(toggleButton);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute("type", "text");

    // Toggle password visibility switch (text -> password)
    fireEvent.click(toggleButton);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute("type", "password");
  });
});
