import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem, removeItem } from './CreateSlice'; // Adjust this import based on your actual file structure
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    id: 1,
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    id: 2,
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    id: 3,
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    id: 4,
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    id: 5,
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    id: 6,
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        }
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

    const handleToggleCart = (plant) => {
        const itemInCart = cartItems.find(item => item.id === plant.id);
        if (itemInCart) {
            dispatch(removeItem({ id: plant.id }));
        } else {
            dispatch(addItem({ ...plant, quantity: 1 }));
        }
    };

    return (
        <div>
            {/* Navbar */}
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
                    <div className="cart">
                        <a href="#" onClick={handleCartClick}>
                            <h1 className='shopping-cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="48" width="48">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                                {cartItems.length > 0 && <span className="cart-item-count">{cartItems.length}</span>}
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {/* Product grid or other content based on showCart and showPlants states */}
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
                                        <button className="product-button" onClick={() => handleToggleCart(plant)}>
                                            {cartItems.find(item => item.id === plant.id) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Conditionally render cart item component */}
            {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
        </div>
    );
}

export default ProductList;
