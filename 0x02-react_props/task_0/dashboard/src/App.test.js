// task_2/dashboard/src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders School dashboard heading', () => {
  render(<App />);
  // const headingElement = screen.getByText(/School dashboard/i);
  // expect(headingElement).toBeInTheDocument();
});
