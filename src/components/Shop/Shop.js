import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setNewCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(result => {
                setProducts(result)
                setDisplayProduct(result)
                setLoading(true)
            })
    }, [])

    const handleProduct = product => {
        const newCart = [...cart, product]
        setNewCart(newCart)

    }
    const handleSearch = event => {
           const searchText =  event.target.value;
           const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
           setDisplayProduct(matchedProduct)
    }

    return (
        <div>
            <div className='search-input'>
                 <input onChange={handleSearch} type="text" placeholder='search product'/>
            </div>
            <div className='shop-container'>
                <div className='product-container'>

                    {
                      loading ? displayProduct.map(product => <Product handleProduct={handleProduct} key={product.id} product={product}></Product>) :"Loading..."
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;