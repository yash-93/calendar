import React from 'react';
import { render, screen, } from '@testing-library/react';
import Calendar from '../components/Calendar';

test("Test invalid date should print Invalid Date", () => {
  const { debug } = render(<Calendar date='-23/03/2020' />)
  const ele = screen.getByText('Invalid Date');
  expect(ele).toBeInTheDocument();
  debug();
});

test("Test 03/10/2022 should highlight 3rd October Monday", () => {
  const { debug, container } = render(<Calendar date='03/10/2022' />)
  const highlightedElement = container.querySelector('.highlight');
  expect(highlightedElement).toHaveClass('highlight');
  expect(highlightedElement).toHaveTextContent('3');
  debug();
});

test("Test 23/03/2020 should highlight 23rd March Monday", () => {
  const { debug, container } = render(<Calendar date='23/03/2020' />)
  const highlightedElement = container.querySelector('.highlight');
  expect(highlightedElement).toHaveClass('highlight');
  expect(highlightedElement?.textContent).toBe('23');
  debug();
});

