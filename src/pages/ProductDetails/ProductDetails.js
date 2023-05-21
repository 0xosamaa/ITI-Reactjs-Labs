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
        <div className="container product-details my-5">
            <div className="row">
                <div className="col-12 col-md-8 images">
                    <img src={product.thumbnail} />
                    <div style={{ margin: '1rem 0' }}>
                        {product.images.map((image, idx) => {
                            return (
                                <img
                                    style={{
                                        width: '6rem',
                                        marginRight: '1rem',
                                    }}
                                    src={image}
                                    key={idx}
                                />
                            );
                        })}
                    </div>
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
