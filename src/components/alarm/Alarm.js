import { Card, Row, Progress } from 'antd';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

export default function Alarm() {
  const [dateData, setDateData] = useState();
  const [percent, setPercent] = useState();

  const intervalId = useRef();

  useEffect(() => {
    const alarmData = {
      startDate: moment().subtract(1, 'seconds'),
      endDate: moment().add(1, 'minute'),
    };
    setDateData(alarmData);

    const gaugeFillPercents = getRemainingTimeInPercents(alarmData);
    setPercent(gaugeFillPercents);

    intervalId.current = setInterval(() => {
      const gaugeFillPercents = getRemainingTimeInPercents(alarmData);
      setPercent(gaugeFillPercents);
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const getRemainingTimeInPercents = (alarmData) => {
    const { startDate, endDate } = alarmData;
    const totalTimeDiff = endDate.diff(startDate, 'seconds');
    let remainingTimeDiff = endDate.diff(moment(), 'seconds');
    remainingTimeDiff = remainingTimeDiff > 0 ? remainingTimeDiff : 0;
    return Math.floor((remainingTimeDiff / totalTimeDiff) * 100);
  };

  useEffect(() => {
    if (percent === undefined || percent > 0) return;
    clearInterval(intervalId.current);
  }, [percent]);

  return (
    <Row>
      <Card>
        <Progress
          type="circle"
          percent={percent}
          size={280}
          format={() => dateData?.endDate.fromNow()}
        />
        {dateData && (
          <>
            <p>{`Start: ${dateData.startDate.format(
              'dddd, MMMM Do YYYY, HH:mm:ss a'
            )}`}</p>
            <p>{`End: ${dateData.endDate.format(
              'dddd, MMMM Do YYYY, HH:mm:ss a'
            )}`}</p>
          </>
        )}
      </Card>
    </Row>
  );
}
