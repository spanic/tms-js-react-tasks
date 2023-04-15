import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function Flight({ flight, onClick }) {
  console.log('Flight was rendered at', new Date().toLocaleTimeString());

  const [isAdditionalDataBlockVisible, setAdditionalDataBlockVisible] =
    useState();

  useEffect(() => {
    if (flight.selected) {
      setAdditionalDataBlockVisible(true);
    }
  }, [flight.selected]);

  function removeAdditionalDataBlock() {
    if (!flight.selected) {
      setAdditionalDataBlockVisible(false);
    }
  }

  return (
    <>
      <FlightScheduleRow onClick={onClick} selected={flight.selected}>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.flight_icao}</div>
        </div>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.dep_icao}</div>
          {flight.extended_data?.dep_airport_name && (
            <div className="schedule-cell__value">
              {flight.extended_data.dep_airport_name}
            </div>
          )}
          <div className="schedule-cell__value">{flight.dep_time}</div>
        </div>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.arr_icao}</div>
          {flight.extended_data?.arr_airport_name && (
            <div className="schedule-cell__value">
              {flight.extended_data.arr_airport_name}
            </div>
          )}
          <div className="schedule-cell__value">{flight.arr_time}</div>
        </div>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.aircraft_icao}</div>
        </div>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.status}</div>
        </div>
      </FlightScheduleRow>
      {isAdditionalDataBlockVisible && (
        <FlightAdditionalData
          visible={flight.selected}
          onAnimationEnd={removeAdditionalDataBlock}
        >
          <div className="schedule-row__cell">
            <BoldScheduleCellValue>Airline:</BoldScheduleCellValue>
            <div className="schedule-cell__value">
              {flight.additional_data?.airline_name}
            </div>
          </div>
        </FlightAdditionalData>
      )}
    </>
  );
}

const active_mixin = css`
  transform: scale(1.02);
  box-shadow: inset 0px 0px 0px 1px white;
  background-color: blue;
`;

const FlightScheduleRow = styled.div.attrs(() => ({
  className: 'schedule__row',
}))`
  grid-auto-columns: minmax(140px, 1fr);
  transition: transform 0.05s ease;
  cursor: pointer;
  box-shadow: inset 0px -0.3px 0px 0px white;
  white-space: unset;

  &:hover {
    ${active_mixin}
  }

  ${(props) => props.selected && active_mixin}
`;

const FlightAdditionalData = styled.div.attrs(() => ({
  className: 'schedule__row',
}))`
  background-color: white;
  color: black;

  @keyframes appear {
    from {
      transform: rotate3d(1, 0, 0, 90deg);
      transform-origin: top;
      opacity: 0;
    }
  }

  animation: appear 0.2s ease;

  ${(props) =>
    !props.visible &&
    css`
      transform: rotate3d(1, 0, 0, -90deg);
      transform-origin: top;
      opacity: 0;

      @keyframes hide {
        from {
          transform: none;
          opacity: 1;
        }
      }

      animation: hide 0.2s ease;
    `}
`;

const BoldScheduleCellValue = styled.div.attrs(() => ({
  className: 'schedule-cell__value',
}))`
  font-weight: bold;
`;

export default Flight;
