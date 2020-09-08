import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { InputContainer, InputLabel } from './Input.jsx'
import InputAutocomplete from './InputAutocomplete.jsx'

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1.6rem 0.5rem 0.5rem 0.5rem;
  position: relative;
  top: 0;
  height: 56px;
  font-size: 1.25rem;
  border-radius: 0;
  &:focus {
    border-radius: 0 !important;
    border: none !important;
    outline: none !important;
  }
`

const LocationInput = ({ label, locations, currentLocation }) => {
  console.log(locations)
  const [ location, setLocation ] = useState('')
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ matchingLocations, setMatchingLocations ] = useState([])

  useEffect(() => {
    setLocation(currentLocation)
    setMatchingLocations(locations)
  }, [currentLocation, locations])

  const handleOptionSelected = (locationLabel) => {
    const selectedLocation = locations.find((location) => location.label === locationLabel)
    if (selectedLocation) {
      setLocation(selectedLocation)
    }
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchQuery(value)
    filterMatchingLocations(value)
  }

  const filterMatchingLocations = (searchQuery) => {
    if (searchQuery) {
      // Update matching locations with those matching the searchQuery 
      setMatchingLocations(locations.filter((location) => {
        const locationAsString = JSON.stringify(Object.values(location)).toLowerCase() // Convert Location into string for making a full search
        const searchRegex = new RegExp(searchQuery.toLowerCase().replace(new RegExp(/[^a-z0-9\s]/, 'ig'), '')) // remove invalid regex characters

        return locationAsString.match(searchRegex) // perform a regex matching operation to get only those matching
      }))
    } else { // If searchQuery is empty return the full locations array
      setMatchingLocations(locations)
    }
  }

  console.log(matchingLocations)
  return (
    <InputContainer>
      <Input onChange={ handleInputChange } />
      <InputLabel>
        { label }
      </InputLabel>
      <InputAutocomplete 
        items={ matchingLocations } 
        onSelected={ handleOptionSelected } 
        show={ !!searchQuery }
      />
    </InputContainer>
  )
}

export default LocationInput