import { React } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ id, title, description, price, image }) => {
    return (
        <Card
            className="product m-3"
            key={id}
            style={{ width: '24rem', height: '20rem' }}
        >
            <div className="card-img">
                <Card.Img variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Link to={`/products/${id}`}>
                    <Button variant="primary">Product Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
