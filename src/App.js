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
						<Route path="store" element={<Store />} />
						<Route path="blogs" element={<Blog />} />
						<Route path="compare-products" element={<Compare />} />
						<Route path="wishlist" element={<Wishlist />} />
						<Route path="login" element={<Login />} />
						<Route path="forgot-password" element={<ForgotPassword />} />
						<Route path="signup" element={<Signup />} />
						<Route path="reset-password" element={<ResetPassword />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
