import { Result } from 'antd';
import { useEffect, useState, memo } from 'react';

const Functional = memo(
  function ({ status }) {
    console.log('Functional component has been rendered');

    const [state, setState] = useState({
      status: 'warning',
    });

    useEffect(() => {
      console.log('👻 "componentDidMount" has been called');
    }, []);

    useEffect(() => {
      console.log('👻 "componentDidUpdate" has been called');
    });

    useEffect(() => {
      return () => {
        console.log('❌ "componentWillUnmount" has been called');
      };
    }, []);

    return (
      <Result
        status={status}
        title="Functional component has been successfully mounted!"
        subTitle="Let's check how to use React hooks to bind to the component's lifecycle"
      />
    );
  },
  (prevProps, newProps) => prevProps.status === newProps.status
);

export default Functional;
