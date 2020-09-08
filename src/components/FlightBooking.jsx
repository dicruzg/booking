import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import FlightBookingMembersSelect from './FlightMembersSelect.jsx'
import FlightBookingLocation from './FlightBookingLocation.jsx'
import FlightBookingDatePicker from './FlightBookingDatePicker.jsx'

const FlightBookingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

const FlightBookingLocationContainer = styled.div`
  display: flex;
  padding-right: 20px;
`

const FlightBookingDateRangePickerContainer = styled.div`
  display: flex;
  padding-right: 20px;
`

const FlightBookingMembersSelectContainer = styled.div`
  display: flex;
`

const FlightBookingSearchBtnContainer = styled.div`
  display: flex;
  width: 24%;
  margin-left: 76%;
  justify-content: flex-end;
  padding: 1.0rem 0;
`

const FlightBookingSearchBtn = styled.button`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  padding: 12px 20px;
  border: 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  text-shadow: none;
  border-radius: 0;
  background-color: #c00;
  color: #fff;
  width: 260px;
  height: 56px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover, &:active, &:focus {
    outline: none !important;
  }
`

const FlightBooking = ({ flightLocation, flightMembers, flightDates }) => {
  console.log('FLIGHT DATES', flightDates)
  return (
    <FlightBookingContainer>
      
      {/* LOCATION CONTAINER */}
      <FlightBookingLocationContainer>
        <FlightBookingLocation />
      </FlightBookingLocationContainer>

      {/* DATE RANGE PICKER CONTAINER */}
      <FlightBookingDateRangePickerContainer>
        <FlightBookingDatePicker />
      </FlightBookingDateRangePickerContainer>
      
      {/* MEMBERS CONTAINER */}
      <FlightBookingMembersSelectContainer>
        <FlightBookingMembersSelect />
      </FlightBookingMembersSelectContainer>

      {/* SEARCH BTN */}
      <FlightBookingSearchBtnContainer>
        <FlightBookingSearchBtn>
          Search
        </FlightBookingSearchBtn>
      </FlightBookingSearchBtnContainer>
    </FlightBookingContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(FlightBooking)