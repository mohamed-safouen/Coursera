import { render, screen,fireEvent } from '@testing-library/react';
import {BookingForm} from '../components/Reservation/BookingForm/bookingform';
import { initializeTimes,updateTimes } from './../components/Reservation';

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("BOOK TABLE");
  expect(headingElement).toBeInTheDocument();
});

test("Initialise", () => {
  expect(initializeTimes(1, 2)).toBe(3);
});
test("updatetime", () => {
  expect(updateTimes(1, 2)).toBe(3);
});