import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList.js";
import SingleProduct from "./components/SingleProduct.js";
import "./App.css";

const App = () => {
    return (
        <div>
            <Router>
                <aside>
                    <Link to={`/`}>Products</Link>
                    <Link to={`/add-product`}>Add product</Link>
                </aside>

                <main>
                    <Routes>
                        <Route exact path="/" component={ProductsList} />
                        <Route path="/add-product" component={AddProduct} />
                        <Route path="/product/:slug" component={SingleProduct} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default App;
