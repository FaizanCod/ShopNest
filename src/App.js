import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
