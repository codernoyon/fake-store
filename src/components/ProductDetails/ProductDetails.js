import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProductDetails = (props) => {
    const { title, price, description, category, image, rating } = props.product;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Details</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton className='pb-0 border-0'>
                    {/* <Modal.Title>{title}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-7 mx-auto col-md-6 col-lg-4 mb-3 mb-md-0 p-3">
                            <img className='w-100' src={image} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-8">
                            <h3 className='mb-0'>{title}</h3>
                            <small className='text-muted'>{category}</small>
                            <h4 className="h4 mb-0">Price: ${price}</h4>
                            <small className="text-muted">Rating {rating.rate} People {rating.count}</small>
                            <p className="mt-2">{description}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProductDetails;