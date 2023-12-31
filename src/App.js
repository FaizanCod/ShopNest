import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* the first index element is Home and the rest are for /about and /contact */}
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="product" element={<Store />} />
						<Route path="blogs" element={<Blog />} />
						<Route path="blog/:id" element={<SingleBlog />} />
						<Route path="compare-products" element={<Compare />} />
						<Route path="wishlist" element={<Wishlist />} />
						<Route path="login" element={<Login />} />						
						<Route path="forgot-password" element={<ForgotPassword />} />
						<Route path="signup" element={<Signup />} />
						<Route path="reset-password" element={<ResetPassword />} />
						<Route path="privacy-policy" element={<PrivacyPolicy />} />
						<Route path="refund-policy" element={<RefundPolicy />} />
						<Route path="shipping-policy" element={<ShippingPolicy />} />
						<Route
							path="terms-and-conditions"
							element={<TermsAndConditions />}
						/>
						<Route path="product/:id" element={<SingleProduct />} />
						<Route path="cart" element={<Cart />} />
						<Route path="checkout" element={<Checkout />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
