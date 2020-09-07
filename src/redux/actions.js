import { UPDATE_LOCATIONS } from './actionTypes'

export const updateLocations = (content) => {
  return {
    type: UPDATE_LOCATIONS,
    payload: content
  }
}