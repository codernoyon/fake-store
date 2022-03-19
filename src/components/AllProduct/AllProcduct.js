import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import "./AllProduct.css"

const AllProcduct = (props) => {
    const { updateCart } = props;
    // console.log(updateCart);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <Container className="py-3 px-0 all-products">
            <Row className="g-4 px-3 px-md-0">
                {
                    products.map(product => <Product updateCart={updateCart} key={product.id} product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default AllProcduct;