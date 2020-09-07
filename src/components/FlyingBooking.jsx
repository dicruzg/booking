import React from 'react'
import { connect } from 'react-redux'

const FlyingBooking = ({ location }) => {
  return (
    <h1>Booking - { JSON.stringify(location.locations) } </h1>
  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(FlyingBooking)