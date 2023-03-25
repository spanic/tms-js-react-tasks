import { useState, useEffect } from 'react';
import './Flight.scss';

function Flight({ flight }) {
  const [selected, toggleSelectedState] = useState(false);
  const [extendedFlightData, setExtendedFlightData] = useState();

  useEffect(() => {}, [selected]);

  return (
    <>
      <div
        className={`flight schedule__row ${selected ? 'flight_selected' : ''}`}
        onClick={toggleSelectedState.bind(this, !selected)}
      >
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
      </div>
      {extendedFlightData && (
        <div className={'flight__extended-data schedule__row'}>
          <div className="schedule-row__cell">
            <div className="schedule-cell__value schedule-cell__value_bold">
              Airline:
            </div>
            <div className="schedule-cell__value">
              {extendedFlightData.name}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Flight;
