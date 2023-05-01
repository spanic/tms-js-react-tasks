import { Checkbox, List } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function ChooseOffers({ offers, value, onLoad, onChoose }) {
  useEffect(() => {
    onLoad?.();
  }, []);

  return (
    <OffersCheckboxGroup defaultValue={value} onChange={onChoose}>
      <List
        bordered
        dataSource={offers}
        renderItem={({ _id, name, price }) => (
          <List.Item>
            <OfferCheckbox value={_id} data-cy="offer-checkbox">
              <Name>{name}</Name>
              <Price>{price}</Price>
            </OfferCheckbox>
          </List.Item>
        )}
        data-cy="offers-list"
      />
    </OffersCheckboxGroup>
  );
}

const OffersCheckboxGroup = styled(Checkbox.Group)`
  display: block;
`;

const OfferCheckbox = styled(Checkbox)`
  .ant-checkbox {
    align-self: center;

    & + span {
      padding-inline-start: 24px;
      padding-inline-end: 0;
    }
  }
`;

const Name = styled.h3`
  margin: 0 0 0.5em;
`;

const Price = styled.p`
  margin: 0;
`;
