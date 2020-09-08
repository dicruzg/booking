import React from 'react'
import store from '../redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import FlyingBooking from '../components/FlyingBooking'

describe('FlyingBooking', () => {
  test('renders FlyingBooking component', () => {
    render(<Provider store={store}><FlyingBooking /></Provider>);

    screen.getByLabelText('Adults');
  });
});