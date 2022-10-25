import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<Form />);
  const linkElement = screen.getByText(/Welcome to our BMI Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

