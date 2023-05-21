import { React, useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import DummyApi from '../../DummyApi';
import Loader from '../Loader/Loader';
import './ProductsList.css';

const ProductsList = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        (async () => {
            const response = await DummyApi.get('/products');
            setProducts(response.data.products);
        })();
    }, []);

    return (
        <div className="row products my-5">
            {products ? (
                products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.thumbnail}
                        />
                    );
                })
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ProductsList;
