import { Row } from 'antd';
import styled from 'styled-components';

import kicks from './assets/kicks.jpg';
import ShopItemCard from './components/ShopItemCard';

const shopItem = {
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
};

const ShopItem = () => {
  return (
    <>
      <MainRow align="middle">
        <ShopItemCard />
      </MainRow>
    </>
  );
};

const MainRow = styled(Row)`
  height: 100vh;
`;

export default ShopItem;
