import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import LocationInput from './LocationInput.jsx'

const FlyingBookingLocationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: 0;
`

const FlyingBookingLocationInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const FlyingBookingLocation = ({ location }) => {

  return (
    <FlyingBookingLocationContainer>
      {/* FROM */}
      <FlyingBookingLocationInputContainer>
        <LocationInput label="From" locations={ location.locations } />
      </FlyingBookingLocationInputContainer>
      {/* TO */}
      <FlyingBookingLocationInputContainer>
        <LocationInput label="To" locations={ location.locations } />
      </FlyingBookingLocationInputContainer>
    </FlyingBookingLocationContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(FlyingBookingLocation)