import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { updateFlightOrigin, updateFlightDestination } from './../redux/actions'

import FlightBookingLocationInput from './FlightBookingLocationInput.jsx'

const FlightBookingLocationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: 0;
`

const FlightBookingLocationInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const FlightBookingLocation = ({ flightLocation, updateFlightOrigin, updateFlightDestination }) => {
  const { locations, origin, destination } = flightLocation

  const handleOriginUpdate = (location) => {
    updateFlightOrigin(location)
  }

  const handleDestinationUpdate = (location) => {
    updateFlightDestination(location)
  }

  return (
    <FlightBookingLocationContainer>
      {/* FROM */}
      <FlightBookingLocationInputContainer>
        <FlightBookingLocationInput 
          label="From" 
          locations={ locations } 
          currentLocation={ origin }
          onSelected={ handleOriginUpdate } />
      </FlightBookingLocationInputContainer>
      {/* TO */}
      <FlightBookingLocationInputContainer>
        <FlightBookingLocationInput 
          label="To"
          locations={ locations }
          currentLocation={ destination }
          onSelected={ handleDestinationUpdate } />
      </FlightBookingLocationInputContainer>
    </FlightBookingLocationContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateFlightOrigin: (payload) => dispatch(updateFlightOrigin(payload)),
  updateFlightDestination: (payload) => dispatch(updateFlightDestination(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightBookingLocation)