import { UPDATE_LOCATIONS } from '../actionTypes'

const initialState = {
  locations: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATIONS:
      return handleUpdateLocation(state, action.payload)
    default:
      return state
  }
}

const handleUpdateLocation = (state, locations) => {
  return {
    ...state,
    locations
  }
}