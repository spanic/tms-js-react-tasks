const scheduledFlights = [
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2775',
    flight_icao: 'BRU775',
    flight_number: '775',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-09 20:15',
    dep_time_utc: '2023-03-09 17:15',
    dep_estimated: '2023-03-09 19:56',
    dep_estimated_utc: '2023-03-09 16:56',
    dep_actual: '2023-03-09 19:56',
    dep_actual_utc: '2023-03-09 16:56',
    arr_iata: 'NQZ',
    arr_icao: 'UACC',
    arr_terminal: '1',
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 03:15',
    arr_time_utc: '2023-03-09 21:15',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'active',
    duration: 240,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'E195',
    arr_time_ts: 1678396500,
    dep_time_ts: 1678382100,
    dep_estimated_ts: 1678380960,
    dep_actual_ts: 1678380960,
  },
  {
    airline_iata: 'SU',
    airline_icao: 'AFL',
    flight_iata: 'SU1833',
    flight_icao: 'AFL1833',
    flight_number: '1833',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-09 21:10',
    dep_time_utc: '2023-03-09 18:10',
    dep_estimated: '2023-03-09 21:09',
    dep_estimated_utc: '2023-03-09 18:09',
    dep_actual: '2023-03-09 21:09',
    dep_actual_utc: '2023-03-09 18:09',
    arr_iata: 'SVO',
    arr_icao: 'UUEE',
    arr_terminal: 'B',
    arr_gate: null,
    arr_baggage: '2',
    arr_time: '2023-03-09 22:45',
    arr_time_utc: '2023-03-09 19:45',
    arr_estimated: '2023-03-09 22:20',
    arr_estimated_utc: '2023-03-09 19:20',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'active',
    duration: 95,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'A320',
    arr_time_ts: 1678391100,
    dep_time_ts: 1678385400,
    arr_estimated_ts: 1678389600,
    dep_estimated_ts: 1678385340,
    dep_actual_ts: 1678385340,
  },
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2953',
    flight_icao: 'BRU953',
    flight_number: '953',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-09 22:45',
    dep_time_utc: '2023-03-09 19:45',
    arr_iata: 'DME',
    arr_icao: 'UUDD',
    arr_terminal: null,
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 00:05',
    arr_time_utc: '2023-03-09 21:05',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 80,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: null,
    arr_time_ts: 1678395900,
    dep_time_ts: 1678391100,
  },
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2735',
    flight_icao: 'BRU735',
    flight_number: '735',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-09 22:50',
    dep_time_utc: '2023-03-09 19:50',
    arr_iata: 'TBS',
    arr_icao: 'UGTB',
    arr_terminal: null,
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 03:55',
    arr_time_utc: '2023-03-09 23:55',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 245,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'B733',
    arr_time_ts: 1678406100,
    dep_time_ts: 1678391400,
  },
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2729',
    flight_icao: 'BRU729',
    flight_number: '729',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-09 23:05',
    dep_time_utc: '2023-03-09 20:05',
    arr_iata: 'KUT',
    arr_icao: 'UGKO',
    arr_terminal: null,
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 04:25',
    arr_time_utc: '2023-03-10 00:25',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 260,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'E170',
    arr_time_ts: 1678407900,
    dep_time_ts: 1678392300,
  },
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2737',
    flight_icao: 'BRU737',
    flight_number: '737',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-09 23:20',
    dep_time_utc: '2023-03-09 20:20',
    arr_iata: 'BUS',
    arr_icao: 'UGSB',
    arr_terminal: null,
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 05:10',
    arr_time_utc: '2023-03-10 01:10',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 290,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'B733',
    arr_time_ts: 1678410600,
    dep_time_ts: 1678393200,
  },
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2727',
    flight_icao: 'BRU727',
    flight_number: '727',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-10 00:50',
    dep_time_utc: '2023-03-09 21:50',
    arr_iata: 'SHJ',
    arr_icao: 'OMSJ',
    arr_terminal: null,
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 08:00',
    arr_time_utc: '2023-03-10 04:00',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 370,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'B738',
    arr_time_ts: 1678420800,
    dep_time_ts: 1678398600,
  },
  {
    airline_iata: 'FZ',
    airline_icao: 'FDB',
    flight_iata: 'FZ1716',
    flight_icao: 'FDB1716',
    flight_number: '1716',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-10 00:55',
    dep_time_utc: '2023-03-09 21:55',
    arr_iata: 'DXB',
    arr_icao: 'OMDB',
    arr_terminal: '3',
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 08:25',
    arr_time_utc: '2023-03-10 04:25',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 390,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'B38M',
    arr_time_ts: 1678422300,
    dep_time_ts: 1678398900,
  },
  {
    airline_iata: 'SU',
    airline_icao: 'AFL',
    flight_iata: 'SU1835',
    flight_icao: 'AFL1835',
    flight_number: '1835',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-10 05:40',
    dep_time_utc: '2023-03-10 02:40',
    arr_iata: 'SVO',
    arr_icao: 'UUEE',
    arr_terminal: 'B',
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 07:15',
    arr_time_utc: '2023-03-10 04:15',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 95,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: 'A21N',
    arr_time_ts: 1678421700,
    dep_time_ts: 1678416000,
  },
  {
    airline_iata: 'B2',
    airline_icao: 'BRU',
    flight_iata: 'B2983',
    flight_icao: 'BRU983',
    flight_number: '983',
    dep_iata: 'MSQ',
    dep_icao: 'UMMS',
    dep_terminal: null,
    dep_gate: null,
    dep_time: '2023-03-10 06:45',
    dep_time_utc: '2023-03-10 03:45',
    arr_iata: 'DME',
    arr_icao: 'UUDD',
    arr_terminal: null,
    arr_gate: null,
    arr_baggage: null,
    arr_time: '2023-03-10 08:05',
    arr_time_utc: '2023-03-10 05:05',
    cs_airline_iata: null,
    cs_flight_number: null,
    cs_flight_iata: null,
    status: 'scheduled',
    duration: 80,
    delayed: null,
    dep_delayed: null,
    arr_delayed: null,
    aircraft_icao: null,
    arr_time_ts: 1678424700,
    dep_time_ts: 1678419900,
  },
];

module.exports = {
  scheduledFlights,
};