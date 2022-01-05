import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct.js";
import ProductsList from "./components/ProductsList.js";
import SingleProduct from "./components/SingleProduct.js";

const App = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const deleteProduct = (index) => {
        let updatedProducts = [...products];
        updatedProducts = updatedProducts.slice(0, index).concat(updatedProducts.slice(index + 1, updatedProducts.length));
        setProducts(updatedProducts);
    };

    return (
        <Router>
            <div id="app">
                <aside>
                    <Link to={`/`}>Products</Link>
                    <Link to={`/add-product`}>Add product</Link>
                </aside>

                <main>
                    <Route exact path="/" render={() => <ProductsList products={products} deleteProduct={deleteProduct} />} />
                    <Route path="/add-product" render={({ history }) => <AddProduct addProduct={addProduct} history={history} />} />
                    <Route path="/product/:slug" component={SingleProduct} />
                </main>
            </div>
        </Router>
    );
};

export default App;
