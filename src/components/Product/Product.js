import React from 'react';
import './Products.css';
import { motion } from "framer-motion";
const Product = (props) => {
    const { name, img, seller, stock,price } = props.product;
     const {handleProduct} =  props;
    return (
        <motion.div  initial={{opacity:0}} animate={{opacity:1, translateX: 10}} transition={{duration: 1}} className='product'>
            <div className='product-img'>
                <img src={img} />
            </div>
            <div className='product-text'>
                <h4>{name}</h4>
                <p>Seller: {seller}</p>
                <p>Stock: {stock}</p>
                <h4>Price: ${price}</h4>
                <button onClick={() => handleProduct(props.product)} >add to cart</button>
            </div>

        </motion.div>
    );
};

export default Product;