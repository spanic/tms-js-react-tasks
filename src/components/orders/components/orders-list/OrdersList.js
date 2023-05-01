import { Descriptions, List } from 'antd';
import moment from 'moment';
import { useMemo } from 'react';
import styled from 'styled-components';

export default function OrdersList({ orders }) {
  const ordersDataSource = useMemo(() => {
    return orders.map((order) => {
      return {
        restaurantName: order.restaurantName,
        created: moment(order.created).fromNow(),
        updated: moment(order.updated || order.created).format(
          'dddd, MMMM Do YYYY, HH:mm:ss'
        ),
        offers: order.offers,
        totalPrice: order.totalPrice,
      };
    });
  }, [orders]);

  return (
    <List
      bordered
      itemLayout="horizontal"
      dataSource={ordersDataSource}
      renderItem={(order, index) => (
        <OrderListItem>
          <List.Item.Meta
            title={`Order ${index + 1} from ${order.restaurantName}`}
            description={order.created}
          />
          <OrderDescriptionBlock
            bordered
            size="small"
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Restaurant">
              {order.restaurantName}
            </Descriptions.Item>
            <Descriptions.Item label="Offers">
              <OrderOffersList>
                {order.offers?.map((offer) => (
                  <li key={offer._id}>{offer.name}</li>
                ))}
              </OrderOffersList>
            </Descriptions.Item>
            <Descriptions.Item label="Last updated">
              {order.updated}
            </Descriptions.Item>
            <Descriptions.Item label="Total price">
              {order.totalPrice}
            </Descriptions.Item>
          </OrderDescriptionBlock>
        </OrderListItem>
      )}
    />
  );
}

const OrderDescriptionBlock = styled(Descriptions)`
  margin-top: 12px;
`;

const OrderListItem = styled(List.Item)`
  &.ant-list-item {
    flex-direction: column;
    align-items: stretch;
  }
`;

const OrderOffersList = styled.ul`
  padding-inline-start: 20px;
`;
