import React from 'react'
import store from '../redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import FlyMembersSelect from '../components/FlyMembersSelect'

describe('FlyMembersSelect ', () => {
  test('renders FlyMembersSelect component', () => {
    render(<Provider store={store}><FlyMembersSelect memberCount={ 1 } /></Provider>)
  });
});