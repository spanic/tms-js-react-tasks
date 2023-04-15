import { Select } from 'antd';
import { useState } from 'react';

import Flight from './components/flight/Flight.js';

import './Airport.scss';

function Airport() {
  const [flights, setFlights] = useState();

  function subscribeToReqTypeChangeEvents() {
    document
      .querySelector('div.airport-container__controls')
      ?.addEventListener('change', function (event) {
        const requestType = event.target.value;
        // ...
      });
  }

  function emitChangeEventForCheckedReqTypeInputEl() {
    let checkedReqTypeInputEl = document.querySelector(
      'input[type="radio"][checked]'
    );
    if (!checkedReqTypeInputEl) {
      checkedReqTypeInputEl = document.querySelector('input[type="radio"]');
      checkedReqTypeInputEl.setAttribute('checked', true);
    }
    checkedReqTypeInputEl.dispatchEvent(new Event('change', { bubbles: true }));
  }

  async function getScheduledFlights(chosenReqType, airportIcaoCode) {
    return await fetch(
      `/airlabs/api/schedules?${chosenReqType}=${airportIcaoCode}`
    )
      .then((response) => response.ok && response.json())
      .then((response) => response.response);
  }

  async function getAirportsData() {
    return await fetch('/airlabs/api/airports')
      .then((response) => response.ok && response.json())
      .then((response) => response.response);
  }

  function updateFlightsWithExtendedAirportData(flights) {
    return flights.map((flight) => {
      const { dep_icao, arr_icao } = flight;
      return {
        ...flight,
        extended_data: {
          ...flight.extended_data,
          // dep_airport_name: airports.get(dep_icao).name,
          // arr_airport_name: airports.get(arr_icao).name,
        },
      };
    });
  }

  /**
   * Fetches additional airline data for selected flight & updates the component's state
   * @param {object} selectedFlight model of Flight component that user has clicked on
   */
  async function getAirlineData(selectedFlight) {
    let updatedFlights;
    // ...
    setFlights(updatedFlights);
  }

  function storeFlights(data) {
    data = data.map((flight) => {
      return {
        ...flight,
        key: flight.flight_icao + flight.dep_time_ts,
      };
    });
    setFlights(data);
  }

  function getAirportsDropdownValues(airports) {
    // ...
  }

  return (
    <>
      <div id="airportContainer" className="airport-container">
        <div className="airport-container__controls">
          <Select
            showSearch
            placeholder="Select an airport"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
          <input
            type="radio"
            id="arrivals"
            name="arr_dep_options"
            value="arr_icao"
          />
          <label htmlFor="arrivals">Arrivals</label>
          <input
            type="radio"
            id="departures"
            name="arr_dep_options"
            value="dep_icao"
            defaultChecked
          />
          <label htmlFor="departures">Departures</label>
        </div>
        {Array.isArray(flights) && flights.length ? (
          <div className="airport-container__flights airport-container-flights">
            <div className="airport-container-flights__wrapper">
              <div className="schedule__row schedule__row_head">
                <div className="schedule-row__cell">Flight number</div>
                <div className="schedule-row__cell">Departure</div>
                <div className="schedule-row__cell">Arrival</div>
                <div className="schedule-row__cell">Aircraft</div>
                <div className="schedule-row__cell">Status</div>
              </div>
              {flights?.map((flight) => (
                <Flight key={flight.key} flight={flight} />
              ))}
            </div>
          </div>
        ) : (
          <div className="airport-container__no-data airport-container-no-data">
            <div className="airport-container-no-data__icon"></div>
            <div className="airport-container-no-data__text">
              <span className="airport-container-no-data__text_bold">
                Sorry, no data for now.
              </span>
              <br />
              Please choose another airport or change your Arrival/Departure
              preference, or try again later
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Airport;
