import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { updateLocations } from './redux/actions'

import FlyingBooking from './components/FlyingBooking.jsx'
import Locations from './../public/locations.json'

const App = ({ updateLocationsAction }) => {
  
  const loadLocations = async () => {
      return Locations
  }

  useEffect(() => {
    async function updateLocation() {
      try {
        const locations = await loadLocations()
        console.log(locations)
        updateLocationsAction(locations)
      } catch (err) {
        console.log(err)
      }
    }
    updateLocation()
    
  }, [])

  return (
      <FlyingBooking />
  )
}

const mapDispatchToProps = dispatch => ({
  updateLocationsAction: (payload) => dispatch(updateLocations(payload)),
});

export default connect(null, mapDispatchToProps)(App)