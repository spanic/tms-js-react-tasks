import { Card, Col, Layout, Row, Button } from 'antd';
import { useEffect, useMemo, useState, createContext } from 'react';
import styled from 'styled-components';

import Basket from './components/Basket';

export const ShopContext = createContext([]);

const { Content } = Layout;

export default function Shop() {
  const [products, setProducts] = useState();
  const [basketItems, setBasketItems] = useState([]);

  /**
   * Placeholder for loading cards
   */
  const placeholder = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => {
      return (
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          key={index}
        >
          <Card loading={true} />
        </Col>
      );
    });
  }, []);

  /**
   * Fetching products on mount
   */
  useEffect(() => {
    async function fetchProducts() {
      const products = await fetch('/shop/api/products').then(
        (response) => response.ok && response.json()
      );
      setProducts(products);
    }
    fetchProducts();
  }, []);

  /**
   * Handling clicking on product card to add item to the Basket
   * @param {object} item to be added to the Basket
   */
  const onCardClick = (item) => {
    setBasketItems((basketItems) => [...basketItems, item]);
  };

  /**
   * Product cards
   */
  const productsCards = useMemo(() => {
    return products?.map((product) => (
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 12, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
        key={product.id}
      >
        <Card cover={<img alt={product.name} src={product.image} />}>
          <Card.Meta title={product.name} description={product.description} />
          <Price>{`${product.prices['rub'].value}${product.prices['rub'].symbol}`}</Price>
          <Button
            type="primary"
            onClick={() => onCardClick(product)}
            disabled={basketItems.find(
              (basketItem) => basketItem.id === product.id
            )}
            block
          >
            Add to Basket
          </Button>
        </Card>
      </Col>
    ));
  }, [products, basketItems]);

  return (
    <ShopContext.Provider value={basketItems}>
      <Layout>
        <ShopContent>
          <Row gutter={[16, 16]}>{products ? productsCards : placeholder}</Row>
          <Basket />
        </ShopContent>
      </Layout>
    </ShopContext.Provider>
  );
}

const ShopContent = styled(Content)`
  padding: 16px;
`;

const Price = styled.span`
  display: inline-block;
  font-size: 2em;
  margin: 16px 0;
`;
