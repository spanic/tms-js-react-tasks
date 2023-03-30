import { useEffect, useState } from 'react';
import Flight from './components/flight/Flight';
import './Airport.scss';

function Airport() {
  const [flights, setFlights] = useState();

  useEffect(() => {
    subscribeToReqTypeChangeEvents();
    emitChangeEventForCheckedReqTypeInputEl();
  }, []);

  function subscribeToReqTypeChangeEvents() {
    document
      .querySelector('div.airport-container__controls')
      ?.addEventListener('change', async (event) => {
        const chosenReqType = event.target.value;
        const scheduledFlights = await getScheduledFlights(chosenReqType);
        const flightsWithExtendedAirportData =
          await updateFlightsWithExtendedAirportData(scheduledFlights);
        storeScheduledFlights(flightsWithExtendedAirportData);
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

  async function getScheduledFlights(chosenReqType, airportIcaoCode = 'UMMS') {
    return await fetch(
      `/airlabs/api/schedules?${chosenReqType}=${airportIcaoCode}`
    )
      .then((response) => response.ok && response.json())
      .then((response) => response.response);
  }

  async function updateFlightsWithExtendedAirportData(scheduledFlights) {
    const uniqueCodesSet = scheduledFlights.reduce((acc, flight) => {
      return acc.add(flight.dep_icao).add(flight.arr_icao);
    }, new Set());

    const airportsCodesRequestParam = [...uniqueCodesSet].join(',');

    const airportsData = await fetch(
      `/airlabs/api/airports?icao_code=${airportsCodesRequestParam}`
    )
      .then((response) => response.ok && response.json())
      .then((response) => response.response);

    const icaoCodeToAiportNameMap = airportsData.reduce(
      (acc, airportData) => acc.set(airportData.icao_code, airportData.name),
      new Map()
    );

    scheduledFlights = scheduledFlights.map((flight) => {
      const { dep_icao, arr_icao } = flight;
      return {
        ...flight,
        extended_data: {
          ...flight.extended_data,
          dep_airport_name: icaoCodeToAiportNameMap.get(dep_icao),
          arr_airport_name: icaoCodeToAiportNameMap.get(arr_icao),
        },
      };
    });

    return scheduledFlights;
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

  function storeScheduledFlights(data) {
    data = data.map((flight) => {
      return {
        ...flight,
        key: flight.flight_icao + flight.dep_time_ts,
      };
    });
    setFlights(data);
  }

  return (
    <>
      <div id="airportContainer" className="airport-container">
        <div className="airport-container__controls">
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
        <div className="airport-container__flights">
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
      </div>
    </>
  );
}

export default Airport;
