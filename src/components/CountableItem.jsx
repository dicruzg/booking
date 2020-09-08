import React from 'react'
import styled from 'styled-components'

import Counter from './Counter.jsx'

const CountableItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CountableItemHeader = styled.label`
  font-size: 1.25rem;
  line-height: 1.2;
  color: #333;
`
const CountableItemSubheader = styled.small`
  font-size: 0.875rem;
  opacity: 0.6;
  display: block;
`
const CountableItem = ({ header, subheader, count, onChange }) => {

  const handleCountChange = ( count ) => {
    console.log('Count Updated to: ', count)
    onChange(count)
  }
  return (
    <CountableItemContainer>
      <div>
        <CountableItemHeader>
          { header}
          <CountableItemSubheader>
            { subheader }
          </CountableItemSubheader>
        </CountableItemHeader>
      </div>
      <Counter count={ count } setCount={ handleCountChange } />
    </CountableItemContainer>
  )
}

export default CountableItem