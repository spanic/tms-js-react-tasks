import { Row } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { ShopItemContextProvider } from './ShopItemContext';
import kicks from './assets/kicks.jpg';
import ShopItemCard from './components/ShopItemCard';

const ShopItem = () => {
  const [shopItem, setShopItem] = useState({
    image: kicks,
    title: 'Nike Air Jordan Vintage',
    description: (
      <>
        Voluptate deserunt duis cillum proident reprehenderit elit esse non
        laboris eu dolor dolor esse.
        <br />
        Eu duis Lorem ea tempor deserunt nisi et. Ut quis ea id labore qui nulla
        laborum duis nisi magna ea. Pariatur labore ea sunt amet in exercitation
        incididunt.
      </>
    ),
    subscribed: false,
  });

  function subscribe(email) {
    console.log(email);
    setShopItem({
      ...shopItem,
      subscribed: true,
    });
  }

  return (
    <>
      <MainRow align="middle">
        <ShopItemContextProvider value={{ shopItem, onSubscribe: subscribe }}>
          <ShopItemCard />
        </ShopItemContextProvider>
      </MainRow>
    </>
  );
};

const MainRow = styled(Row)`
  height: 100vh;
`;

export default ShopItem;
