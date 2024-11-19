// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
  
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
  
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent("-1");

});
