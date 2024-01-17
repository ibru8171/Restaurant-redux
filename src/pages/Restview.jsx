import React, { useState } from 'react'
import { Button, Col, ListGroup, Modal, Row } from 'react-bootstrap'
import RestReview from '../components/RestReview';



function Restview() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row className='mt-5 mb-5'>
                <Col md={1}>

                </Col>
                <Col md={3}>
                    <img src="https://thumbs.dreamstime.com/z/art-restaurant-cafe-menu-template-design-59491854.jpg" alt="" width={"100%"} height={""} className='rounded' />
                </Col>
                <Col md={7} className='px-5'>
                    <h4 className='text-center' style={{ fontFamily: "-moz-initial" }}>
                        <span className='text-warning'>Restaurent</span> Details
                    </h4>
                    <hr />
                    <ListGroup style={{ fontFamily: "-moz-initial" }}>
                        <ListGroup.Item className='text-center p-3'>
                            Restaurent Name:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Neighbourhood:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cuisine Type:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Address:
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <button type="submit" className="btn btn-primary  text-white rounded-pill mt-2"
                                onClick={handleShow}
                            >Operating Hours</button>

                            {/* <div className='d-flex justify-content-center align-items-center'> */}
                                <RestReview />
                            {/* </div> */}

                        </ListGroup.Item>

                    </ListGroup>

                </Col>
                <Col md={1}></Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: "-moz-initial" }}>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontFamily: "-moz-initial" }}>
                    <ListGroup>
                        <ListGroup.Item>
                            Monday: <span className='text-primary ms-3'>10AM to 11PM</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Tuesday: <span className='text-primary ms-3'>10AM to 11PM</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Wednesday: <span className='text-primary ms-3'>10AM to 11PM</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Thursday: <span className='text-primary ms-3'>10AM to 11PM</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Friday: <span className='text-primary ms-3'>10AM to 11PM</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Saturday: <span className='text-primary ms-3'>10AM to 11PM</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Sunday: <span className='text-primary ms-3'>10AM to 3AM</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default Restview