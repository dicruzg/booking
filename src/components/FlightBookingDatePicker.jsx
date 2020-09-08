import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { connect } from 'react-redux'

import { InputContainer, InputLabel } from './Input.jsx'

import { updateFlightDates, updateFlightType } from '../redux/actions'

const FlightBookingDatePickerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
`

const DatePickerContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  visibility: ${ props => props.show ? 'visible' : 'hidden' };
  top: 60px;
`

const FlightBookingDatePickerInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`
const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1.6rem 0.5rem 0.5rem 0.8rem;
  position: relative;
  top: 0;
  height: 56px;
  border-radius: 0;
  &:focus {
    border-radius: 0 !important;
    border: none !important;
    outline: none !important;
  }
`
const formatDate = (dt) => {
  let date
  if (dt && dt instanceof Date) {
    date = moment(dt)
  } else {
    date = moment()
  }

  return date.format('dd DD/MM/YYYY') || ''
}

const DatePickerInput = ({ date, label, isEnabled, onChange, onFocus }) => {
  const [ dt, setDt ] = useState(formatDate())

  useEffect(() => {
    setDt(formatDate(date))
  }, [date])

  
  const handleInputChange = (date) => {
    onChange(new Date(date))
  }

  return (
    <FlightBookingDatePickerInputContainer>
      <Input value={dt} onChange={ handleInputChange } onFocus={ onFocus } />
      <InputLabel>
        { label }
      </InputLabel>
    </FlightBookingDatePickerInputContainer>
  )
}

const FlightBookingDatePicker = ({ updateFlightDates, updateFlightType, flightDates }) => {
  const { isOneWay, start, end } = flightDates

  const [ startDate, setStartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
  const [ isRange, setIsRange ] = useState(false)
  const [ showDatepicker, setShowDatepicker ] = useState(false)

  useEffect(() => {
    if (start) {
      setStartDate(start)
    }
    if (end) {
      setEndDate(endDate)
    }

    setIsRange(!isOneWay)
    
  }, [flightDates])

  const handleStartDateChanged = (date) => {
    setStartDate(date)
    updateFlightDates({start: date})
  }

  const handleEndDateChanged = (date) => {
    setEndDate(date)
    setShowDatepicker(false)
    updateFlightDates({end: date})
  }

  const startDatePickerProps = isRange 
    ? {
        selectsStart: true,
        startDate: startDate,
        endDate: endDate,
        minDate: new Date()
      }
    : {}

    const endDatePickerProps = {
      selectsEnd: true,
      startDate: startDate,
      endDate: endDate,
      minDate: startDate
    }

  return (
    <FlightBookingDatePickerContainer>
      {/* HOLD THE DATEPICKERS INPUTS */}
      <FlightBookingDatePickerInputContainer>
        {/* START DATE */}
        <InputContainer>
          <DatePickerInput 
            date={startDate} 
            label={ isRange ? 'Outbound flight' : 'One-way'} 
            onFocus={ () => setShowDatepicker(true)} />
        </InputContainer>
        {/* END DATE */}
        <InputContainer>
          <DatePickerInput date={endDate} label="Return Flight" onFocus={ () => setShowDatepicker(true) }/>
        </InputContainer>
      </FlightBookingDatePickerInputContainer>

      {/* HOLD THE DATEPICKERS CALENDARS */}
      <DatePickerContainer show={ showDatepicker }>
        <DatePicker selected={ startDate } onChange={ handleStartDateChanged } { ...startDatePickerProps } inline />
        { isRange ? (
          <DatePicker selected={ endDate } onChange={ handleEndDateChanged } { ...endDatePickerProps } inline/>
        ) : null}
      </DatePickerContainer>
    </FlightBookingDatePickerContainer>
  )
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateFlightDates: (payload) => dispatch(updateFlightDates(payload)),
  updateFlightType: (payload) => dispatch(updateFlightType(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightBookingDatePicker)
