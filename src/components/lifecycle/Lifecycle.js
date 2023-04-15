import { Card, Button, Space } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import Class from './components/class-based/Class';
import Functional from './components/functional/Functional';

const Lifecycle = function () {
  const [componentsState, setComponentsState] = useState({
    status: 'info',
    visible: true,
  });

  function updateState() {
    setComponentsState({
      ...componentsState,
      status: 'success',
    });
  }

  function removeComponents() {
    setComponentsState({
      ...componentsState,
      visible: false,
    });
  }

  return (
    <>
      <CardWrapper>
        <Card title="Controls">
          <Space>
            <Button type="primary" onClick={updateState}>
              Update state
            </Button>
            <Button type="primary" danger onClick={removeComponents}>
              Remove components
            </Button>
          </Space>
        </Card>
      </CardWrapper>
      {componentsState.visible && (
        <>
          <Class status={componentsState.status} />
          <Functional status={componentsState.status} />
        </>
      )}
    </>
  );
};

const CardWrapper = styled.div`
  padding: 16px;
`;

export default Lifecycle;
