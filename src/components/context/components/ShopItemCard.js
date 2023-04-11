import { Card, Col } from 'antd';
import { useContext, useState } from 'react';
import styled from 'styled-components';

import { BellOutlined } from '@ant-design/icons';

import ShopItemContext from '../ShopItemContext';
import SubscribePopup from './SubscribePopup';

const ShopItemCard = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    shopItem: { image, title, description },
  } = useContext(ShopItemContext);

  return (
    <>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 8, offset: 8 }}
        xl={{ span: 6, offset: 9 }}
      >
        <Card
          actions={[
            <span
              key="subscribe"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Subscribe
              <SubscribeIcon />
            </span>,
          ]}
          cover={<img src={image} alt={title} />}
        >
          <Card.Meta title={title} description={description} />
        </Card>
      </Col>
      <SubscribePopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const SubscribeIcon = styled(BellOutlined)`
  margin-left: 4px;
`;

export default ShopItemCard;
