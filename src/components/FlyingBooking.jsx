import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import FlyingBookingMembersSelect from './FlyMembersSelect.jsx'
import FlyingBookingLocation from './FlyingBookingLocation.jsx'

const FlyingBookingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
`

const FlyingBookingLocationContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const FlyingBookingMembersSelectContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const FlyingBooking = ({ location, flyMembers={ adults: 1, children: 2, infants: 3, total: 6 } }) => {

  const handleMemberCountChange = (key, count) => {

  }

  return (
    <FlyingBookingContainer>
      
      {/* LOCATION CONTAINER */}
      <FlyingBookingLocationContainer>
        <FlyingBookingLocation />
      </FlyingBookingLocationContainer>
      
      {/* MEMBERS CONTAINER */}
      <FlyingBookingMembersSelectContainer>
        <FlyingBookingMembersSelect memberCount={ flyMembers } onMemberCountChange={handleMemberCountChange} />
      </FlyingBookingMembersSelectContainer>

    </FlyingBookingContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(FlyingBooking)