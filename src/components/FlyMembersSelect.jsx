import React, { useState } from 'react'
import styled from 'styled-components'

import CountableItem from './CountableItem.jsx'
import { InputContainer, InputLabel, InputPlaceholder } from './Input.jsx'

const CountableItemContainer = styled.div`
  width: 100%;
`

const CountableOptionsContainer = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden' };
`

const CountableOption = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
`

const CountableOptionsCloseBtn = styled.button`
  display: block;
  width: 100%;
  font-size: 1.25rem;
  padding: 18px;
  background-color: #fff;
  border: 1px solid #ccc;
`

const FlyMemberSelect = ({ memberCount, onMemberCountChange }) => {

  const [showOptions, setShowOptions ] = useState(false)

  const categories = [
    {
      headerPlural: 'Adults',
      headerSingular: 'Adult',
      subheader: '12+ years',
      key: 'adults',
    },
    {
      headerPlural: 'Children',
      headerSingular: 'Children',
      subheader: '2-11 years',
      key: 'children'
    },
    {
      headerPlural: 'Infants',
      headerSingular: 'Infant',
      subheader: '0-1 years',
      key: 'infants'
    }
  ]

  // Handle when a category have increased or decreased its value
  const handleCountChange = (key, count) => {
    onMemberCountChange(key, count)
  }

  // Render the options that will appear in the Flying Member selector
  const renderOptions = () => categories.map((category) => {
    const { headerPlural, subheader, key } = category

    return (
      <CountableOption key={key}>
        <CountableItem 
          header={ headerPlural } 
          subheader={ subheader }
          count={ memberCount[key] || 0 }
          onChange={ (count) => handleCountChange(key, count) } 
        />
      </CountableOption>
    )
  })

  const prepareSummaryDetails = () => {
    const detailsPerCategory = categories.map((category) => {
      const { headerPlural, headerSingular, key } = category
      const count = memberCount[key] || 0
      return `${ count } ${count === 1 ? headerSingular : headerPlural }`
    })

    return detailsPerCategory.join(', ')
  }

  const toggleOptionsVisibility = () => {
    console.log('Toggling visibility')
    setShowOptions(!showOptions)
    console.log(showOptions)
  }

  return (
    <CountableItemContainer>
      {/* SELECT */}
      <InputContainer onClick={ toggleOptionsVisibility }>
        <InputLabel>
          { prepareSummaryDetails() }
        </InputLabel>
        <InputPlaceholder>
          { memberCount.total } Passenger{ memberCount.total > 1 ? 's': '' }
        </InputPlaceholder>
      </InputContainer>
      {/* OPTIONS */}
      <CountableOptionsContainer show={showOptions} >
        { renderOptions() }
        <CountableOptionsCloseBtn onClick={ toggleOptionsVisibility }>
          Close
        </CountableOptionsCloseBtn>
      </CountableOptionsContainer>
    </CountableItemContainer>
  )
}

export default FlyMemberSelect