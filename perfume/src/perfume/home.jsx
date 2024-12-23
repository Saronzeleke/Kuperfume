

import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Home() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {src: '/public/p/p/g2.jpeg', price: '2000$', id: 'king' },
        { src: '/public/p/p/g.jpeg', price: '1000$', id: 'ariti' },
        { src: '/public/p/p/g1.jpeg', price: '500$', id: 'yesua' },
    ];

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section id="home">
                <div>
                    <div id="d">
                        <h1 className=" p-5"><i><span>Ku Perfume</span></i></h1>
                        <Row className="align-items-center">
                            <Col xs={12} md={5}>
                                <Image src="/public/p/p/g3.png" thumbnail id='overlay-image' className="mb-6 " />
                            </Col>
                            <Col xs={12} md={7}>
                                <p id="pu">
                                    Ku Perfume, a captivating fragrance that evokes the essence of elegance and sophistication. Its mesmerizing scent, a harmonious blend of floral and woody notes, will leave you feeling confident and alluring.
                                    <br /><br />
                                    Key Features:
                                    <br />
                                    Long-lasting fragrance: Experience the captivating scent of Ku Perfume throughout the day.
                                    <br />
                                    Elegant design: The sleek and sophisticated bottle is a true work of art.
                                    <br />
                                    Affordable luxury: Indulge in the luxury of Ku Perfume without breaking the bank.
                                    <br /><br />
                                    Experience the magic of Ku Perfume today!
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <section id="brand">
                <h1 className='text-center'>CATEGORIES-</h1>
                <Row className="justify-content-center " id='cat'>
                    {images.map((image) => (
                        <Col xs={12} md={4} className="mb-4 " key={image.id}>
                            <div className="card" onClick={() => handleImageClick(image.src)}>
                                <Image src={image.src} thumbnail className="card-img-top" />
                                <div className="card-body text-center">
                                    <p>{image.price}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Modal for displaying selected image */}
            <Modal show={!!selectedImage} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Selected Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && (
                        <Image src={selectedImage} fluid />
                    )}
                </Modal.Body>
                </Modal>
        </>
    );
}

export default Home;

