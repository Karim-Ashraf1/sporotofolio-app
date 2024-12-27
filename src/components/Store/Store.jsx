import React, { useState } from "react";
import "./Store.css";
import LeftMenu from '../LeftMenu';
import Navbar from "../Navbar"; 

import NasserKit from "../../assets/nassr_kit.png";
import BarcelonaKit from "../../assets/barca_kit.png";
import ZamalekKit from "../../assets/zamalek_kit.png";
import Jabulani from "../../assets/real-madrid-third-shirt.jpg";
import LM10Boots from "../../assets/messi_wc_boot.jpg";
import shrimp from "../../assets/shrimp.jpg";

const Store = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "LM10 Official Boots WC 2022",
            image: LM10Boots,
            price: 34.95,
            stock: 12,
            quantity: 2,
        },
        {
            id: 2,
            name: "Jabulani Official Football WC 2010",
            image: Jabulani,
            price: 34.95,
            stock: 12,
            quantity: 2,
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const [favorites, setFavorites] = useState([]);
    
    const products = [
        {
            id: 1,
            title: "LM10 official Boots WC 2022",
            image: LM10Boots,
            price: "$34.95",
            rating: "★★★★☆",
            reviews: 1222,
            arrival: "Arrives: Saturday, May 18",
        },
        {
            id: 1,
            title: "جمبري بورسعي جامبو",
            image:  shrimp,
            price: "$100",
            rating: "★★★★★",
            reviews: 9999,
            arrival: "Arrives: Saturday, May 18",
        },
        {
            id: 1,
            title: "jabulani official footbal WC",
            image: Jabulani,
            price: "$34.95",
            rating: "★★★★☆",
            reviews: 1222,
            arrival: "Arrives: Saturday, May 18",
        },
        {
            id: 1,
            title: "ELNASSR official kit 2024",
            image: NasserKit,
            price: "$34.95",
            rating: "★★★★☆",
            reviews: 1222,
            arrival: "Arrives: Saturday, May 18",
        },
        {
            id: 1,
            title: "Barcelona official kit 2024",
            image: BarcelonaKit,
            price: "$34.95",
            rating: "★★★★☆",
            reviews: 1222,
            arrival: "Arrives: Saturday, May 18",
        },
        {
            id: 1,
            title: "Zamalek official kit 2024",
            image: ZamalekKit,
            price: "$34.95",
            rating: "★★★★☆",
            reviews: 1222,
            arrival: "Arrives: Saturday, May 18",
        },
        
        
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const toggleCart = () => setCartOpen(!cartOpen);

    const updateQuantity = (id, change) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                            ...item,
                            quantity: Math.max(0, item.quantity + change),
                            stock: Math.max(0, item.stock - change),
                        }
                    : item
            )
        );
    };

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
                ? prevFavorites.filter((favId) => favId !== id)
                : [...prevFavorites, id]
        );
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
    );

    const calculateTotals = () => {
        const total = cartItems.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
        );
        const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        return { total, totalItems };
    };

    const { total, totalItems } = calculateTotals();

    return (
        <div>
            <Navbar />
            <LeftMenu />
         <div className="mx-5">
            {/* Search Bar */}
            <div className="search-bar-container">
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button type="submit" className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            {/* Product Cards */}
            <main className="main">
                {filteredProducts.map((product) => (
                    <div className="product-card rounded-4" key={product.id}>
                        <div className="product-image">
                            <img src={product.image} alt={product.title} />
                            <button
                                className={`favorite-btn ${
                                    favorites.includes(product.id) ? "active" : ""
                                }`}
                                onClick={() => toggleFavorite(product.id)}
                            >
                                <span>
                                    {favorites.includes(product.id) ? "❤️" : "♡"}
                                </span>
                            </button>
                        </div>
                        <div className="product-details">
                            <h4 className="brand-name">Sportofolio</h4>
                            <p className="product-title">{product.title}</p>
                            <p className="price">{product.price}</p>
                            <div className="rating">
                                <span className="stars">{product.rating}</span>
                                <span className="review-count">({product.reviews})</span>
                            </div>
                            <p className="arrival-info">{product.arrival}</p>
                        </div>
                    </div>
                ))}
            </main>

            {/* Cart Button */}
            <button className="cart-btn" onClick={toggleCart}>
                <i className="fas fa-shopping-cart"></i>
            </button>

            {/* Cart Modal */}
            <div className={`cart-modal ${cartOpen ? "open" : ""}`}>
                <div className="cart-modal-content container">
                    <button className="close-btn" onClick={toggleCart}>
                        &times;
                    </button>
                    <h2>Your Shopping Cart</h2>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div
                                className="cart-item row align-items-center border-bottom py-2"
                                key={item.id}
                            >
                                {/* Item Image */}
                                <div className="col-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image img-fluid"
                                    />
                                </div>

                                {/* Item Name */}
                                <div className="col-3">
                                    <p>
                                        <strong>{item.name}</strong>
                                    </p>
                                </div>

                                {/* Item Stock */}
                                <div className="col-2">
                                    <p>
                                        <strong>In Stock:</strong> {item.stock}
                                    </p>
                                </div>

                                {/* Item Price */}
                                <div className="col-2">
                                    <p>
                                        <strong>Price:</strong> ${item.price.toFixed(2)}
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="col-3 d-flex align-items-center">
                                    <button
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        +
                                    </button>
                                    <p className="ms-3">
                                        <strong>Total:</strong> $
                                        {(item.quantity * item.price).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Totals */}
                    <div className="cart-total mt-4 text-end">
                        <p>
                            <strong>Total of Totals:</strong> ${total.toFixed(2)} &nbsp;&nbsp;&nbsp;
                            <strong>Total Items:</strong> {totalItems}
                        </p>
                    </div>

                    {/* Checkout and Continue Buttons */}
                    <div className="cart-summary row mt-4">
                        <div className="col-6 text-start"></div>
                        <div className="col-6 text-end">
                            <button
                                className="btn btn-primary"
                                style={{ backgroundColor: "green", borderColor: "green" }}
                                onClick={() => alert("Proceeding to checkout...")}
                            >
                                Go to Checkout
                            </button>
                            <button className="btn btn-secondary" onClick={toggleCart}>
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div> 
        </div>
    );
};

export default Store;
