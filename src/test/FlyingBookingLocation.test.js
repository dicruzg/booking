import React from 'react'
import store from '../redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import FlyingBookingLocation from '../components/FlyingBookingLocation'

describe('FlyingBookingLocation', () => {
  test('renders FlyingBookingLocation component', () => {
    render(<Provider store={store}><FlyingBookingLocation /></Provider>)
  });
});