import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CreateSlice'; // Assuming this is where the addItem action creator is imported from

const ProductList = () => {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({}); // State to track which products are added to cart

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                // Other plant data
            ]
        },
        // Add other categories as needed...
    ];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
        setShowPlants(false);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        addItem(plant); // Dispatch action to add plant to cart
        setAddedToCart((prevAddedToCart) => ({
            ...prevAddedToCart,
            [plant.name]: true // Update addedToCart state to reflect that this product has been added
        }));
    };

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="menu">
                    <div>
                        <a href="#" onClick={handlePlantsClick}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={handleCartClick}>
                            <h1 className='shopping-cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="48" width="48">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            {!showCart && !showPlants && (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, idx) => (
                                    <div key={idx} className="product-card">
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                        <h3 className="product-title">{plant.name}</h3>
                                        <p className="product-description">{plant.description}</p>
                                        <p className="product-price">{plant.cost}</p>
                                        <button className="product-button" onClick={() => handleAddToCart(plant)}>
                                            Add to Cart
                                        </button>
                                        {addedToCart[plant.name] && <p style={{ color: 'green', fontWeight: 'bold' }}>Added to Cart</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
        </div>
    );
}

export default ProductList;
