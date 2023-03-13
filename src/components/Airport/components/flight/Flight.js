import './Flight.scss';

function Flight({ flight }) {
  return (
    <div className="flight schedule__row">
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
  );
}

export default Flight;
