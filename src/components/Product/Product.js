import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';
import "./Product.css"

const Product = (props) => {
    const { title, price, category, image, description } = props.product;
    const { updateCart } = props;
    // console.log(props);
    return (
        <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <Card className='single-product shadow-sm'>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{title.slice(0, 28) + "..."}</Card.Title>
                    <h3>${price}</h3>
                    <small className='text-muted'>{category}</small>
                    <Card.Text>{description.slice(0, 60)+ "..."}</Card.Text>
                    <div className="d-flex justify-content-evenly">
                        <Button className="px-3" onClick={updateCart} variant="success">Add to cart</Button>
                        <Button className="px-3" variant="danger">Delete</Button>
                        <ProductDetails product={props.product}></ProductDetails> 
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;