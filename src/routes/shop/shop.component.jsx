// import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    console.log({products});
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    );
};

export default Shop;