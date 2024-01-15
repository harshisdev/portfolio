import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const GetProduct = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://dummyjson.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <Container className="min-height">Error: {error.message}</Container>;
  } else if (!isLoaded) {
    return (
      <Container className="min-height d-flex justify-content-center align-items-center">
        Loading...
      </Container>
    );
  } else
    return (
      <>
        <Container className="min-height">
          <Row>
            <Col xl={3}>
              <div className="card">
                <h1 className="fs-6">{items.title}</h1>
                <p>{items.description}</p>
                <p>{items.price}</p>
                <p>{items.discountPercentage}</p>
                <p>{items.stock}</p>
                <p>{items.brand}</p>
                <p>{items.category}</p>
                <img src={items.thumbnail} alt={items.title} />
                {items.images.map((img) => (
                  <img key={img} src={img} alt={items.title} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default GetProduct;
