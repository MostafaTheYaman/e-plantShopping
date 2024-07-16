import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CreateSlice'; // Adjust import based on actual file structure
import './CartItem.css'; // Import CSS file for styling

const CartItem = ({ onContinueShopping }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Function to handle incrementing the quantity of an item
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
    };

    // Function to handle decrementing the quantity of an item
    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            dispatch(removeItem({ id: item.id }));
        } else {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
        }
    };

    // Function to handle removing an item from the cart
    const handleRemove = (item) => {
        dispatch(removeItem({ id: item.id }));
    };

    // Function to calculate subtotal for an item
    const calculateSubtotal = (item) => {
        const cost = parseFloat(item.cost.replace('$', '')); // Assuming cost format is "$xx"
        return item.quantity * cost;
    };

    // Function to calculate total cost of all items in the cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => {
            const itemSubtotal = calculateSubtotal(item);
            return total + itemSubtotal;
        }, 0);
    };

    // Function to handle continuing shopping
    const handleContinueShopping = () => {
        onContinueShopping();
    };

    // Placeholder function for handling checkout (to be implemented in future)
    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="cart-item-price">Unit Price: {item.cost}</p>
                            <div className="quantity-controls">
                                <button className="quantity-button" onClick={() => handleDecrement(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="quantity-button" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <p className="cart-item-subtotal">Subtotal: ${calculateSubtotal(item).toFixed(2)}</p>
                            <button className="cart-item-remove" onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h2>Total: ${calculateTotalAmount().toFixed(2)}</h2>
                <button className="summary-button" onClick={handleContinueShopping}>Continue Shopping</button>
                <button className="summary-button" onClick={handleCheckoutShopping}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;
