import { List, Radio } from 'antd';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';

export default function ChooseRestaurant({
  restaurants,
  value,
  onLoad,
  onChoose,
}) {
  useEffect(() => {
    onLoad?.();
  }, []);

  return (
    <Radio.Group style={{ width: '100%' }} value={value}>
      <List
        bordered
        dataSource={Object.entries(restaurants || {})}
        renderItem={([restaurantId, restaurant]) => (
          <List.Item>
            <RadioButton
              value={restaurantId}
              onChange={() => onChoose?.(restaurantId)}
              data-cy="restaurant-radio-btn"
            >
              <RestaurantType italic>{restaurant.type}</RestaurantType>
              <Title>{restaurant.name}</Title>
              <Details>{restaurant.description}</Details>
              <Details italic>{restaurant.address}</Details>
            </RadioButton>
          </List.Item>
        )}
        data-cy="restaurants-list"
      />
    </Radio.Group>
  );
}

const RadioButton = styled(Radio)`
  &.ant-radio-wrapper span.ant-radio + * {
    padding-inline-start: 24px;
    padding-inline-end: 0;
  }
`;

const Title = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0.33em;
`;

const Details = styled.p`
  margin: 0;
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
`;

const RestaurantType = styled(Details)`
  margin-bottom: 0.45em;
`;
