import { useState } from 'react';
import './Flight.scss';

function Flight({ flight }) {
  const [extendedFlightData, setExtendedFlightData] = useState();

  function getExtendedData() {
    const airlineCode = flight.airline_icao;
    fetch(`/airlabs/api/airlines?icao_code=${airlineCode}&api_key=`)
      .then((response) => response.ok && response.json())
      .then((response) => setExtendedFlightData(response.response[0]));
  }

  return (
    <>
      <div className="flight schedule__row" onClick={getExtendedData}>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.flight_icao}</div>
        </div>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.dep_icao}</div>
          <div className="schedule-cell__value">{flight.dep_time}</div>
        </div>
        <div className="schedule-row__cell">
          <div className="schedule-cell__value">{flight.arr_icao}</div>
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
        <div className="flight__extended-data">
          <div className="schedule__row">
            <div className="schedule-row__cell">
              <div className="schedule-cell__value schedule-cell__value_bold">
                Airline:
              </div>
              <div className="schedule-cell__value">
                {extendedFlightData.name}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Flight;
