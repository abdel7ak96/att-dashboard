import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignIn from '@/pages/SignIn';
import { BrowserRouter } from 'react-router-dom';

describe('Sign In page tests', () => {
  it('Welcome texts renders correctly', () => {
    render(<SignIn />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});
