import { Layout, Typography, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import NewOrderModal from './components/new-order-modal/NewOrderModal';
import OrdersList from './components/orders-list/OrdersList';
import { fetchOrders, initOrder } from './orders.service';
import { clearNewOrderModalData, saveOrders } from './orders.state';

const { Title } = Typography;

export default function Orders() {
  const dispatch = useDispatch();
  const [isModalOpen, toggleModalOpen] = useState();

  useEffect(() => {
    fetchAndSaveOrders();
  }, []);

  const orders = useSelector((state) => state.orders.orders);

  async function fetchAndSaveOrders() {
    const orders = await fetchOrders();
    dispatch(saveOrders(orders));
  }

  const onCreateNewOrder = (restaurantId, offersIds) => {
    initOrder(restaurantId, offersIds).then(() => {
      fetchAndSaveOrders();
    });
    onClose();
  };

  const onClose = () => {
    dispatch(clearNewOrderModalData());
    toggleModalOpen(false);
  };

  return (
    <Layout>
      <OrdersContent>
        <TopTitle>Orders:</TopTitle>
        <OrdersList orders={orders} />
        <NewOrderButton
          type="primary"
          onClick={() => toggleModalOpen(true)}
          data-cy="new-order-button"
        >
          New order
        </NewOrderButton>
      </OrdersContent>
      <NewOrderModal
        isOpen={isModalOpen}
        close={onClose}
        createNewOrder={onCreateNewOrder}
      />
    </Layout>
  );
}

const OrdersContent = styled(Content)`
  padding: 0 16px 16px;
`;

const TopTitle = styled(Title)`
  margin-top: 32px;
`;

const NewOrderButton = styled(Button)`
  margin-top: 16px;
`;
