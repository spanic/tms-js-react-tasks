import { Popover, FloatButton } from 'antd';
import { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { ShopContext } from '../Shop.js';

import { ReactComponent as BasketIcon } from '../../shared/assets/shopping-cart.svg';

export default function Basket() {
  const basketItems = useContext(ShopContext);

  /**
   * Getting props for floating Basket button
   */
  const floatingButtonProps = useMemo(() => {
    const floatingButtonProps = {};
    if (basketItems?.length) {
      floatingButtonProps.badge = { count: basketItems.length };
    }
    return floatingButtonProps;
  }, [basketItems]);

  /**
   * Basket popover content
   */
  const basketPopoverContent = useMemo(() => {
    return (
      <>
        <BasketHeading>Basket</BasketHeading>
        {basketItems?.map((basketItem) => (
          <p key={basketItem.id}>{basketItem.name}</p>
        ))}
      </>
    );
  }, [basketItems]);

  return (
    <Popover
      placement="leftBottom"
      content={basketPopoverContent}
      trigger="click"
    >
      <FloatButton icon={<BasketIconSmall />} {...floatingButtonProps} />
    </Popover>
  );
}

const BasketIconSmall = styled(BasketIcon)`
  fill: black;
  width: 100%;
  height: 100%;
`;

const BasketHeading = styled.h2`
  margin-top: 0;
`;
