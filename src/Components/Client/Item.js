import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Col, Row } from "antd";
import { SpinData } from "../Common";

const Item = ({ loading, products }) => {

  if (loading === true) {
    return (
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} span={6} xs={12} sm={8} xxl={6}>
            <Card
              size="small"
              extra={<Link href="#">More</Link>}
              hoverable
              title={product.name}
            >
              <Image
                alt={product.name}
                className="product_image"
                src={
                  "https://anhhuy37.herokuapp.com/user-content/" + product.image
                }
              />
              <Card.Meta description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  return <SpinData position="center"/>;
};

export default Item;
