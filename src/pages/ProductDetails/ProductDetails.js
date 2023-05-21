import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DummyApi from '../../DummyApi';
import './ProductDetails.css';
import Loader from '../../components/Loader/Loader';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const response = await DummyApi.get(`/products/${id}`);
            setProduct(response.data);
        })();
    }, []);

    return product ? (
        <div className="container product-details">
            <div className="row">
                <div className="col-12 col-md-8">
                    <img src={product.thumbnail} />
                </div>
                <div className="col-12 col-md-4">
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <Button variant="primary">BUY NOW</Button>
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default ProductDetails;
