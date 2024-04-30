import '@testing-library/jest-dom';
import React from 'react';
import Banana from './banana';
import { render } from '@testing-library/react';

test('check word banana', () => {
  const { getByText } = render(<Banana />);
  const word = getByText('Banana');
  expect(word).toBeInTheDocument();
});