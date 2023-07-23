import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.jfif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";

const ProductCard = (props) => {
	const { grid } = props;
	// to track current route
	let location = useLocation();
	console.log(location);
	return (
		<div
			className={`${
				location.pathname == "/store" ? `gr-${grid}` : "col-2"
			} mb-2`}
		>
			<Link to="/product/:id" className="product-card position-relative">
				<div className="wishlist-icon position-absolute">
					<button className="bg-transparent border-0">
						<img src={wish} alt="wishlist" />
					</button>
				</div>
				<div className="product-img">
					<img src={watch} alt="product image" className="img-fluid" />
					<img src={watch2} alt="product image" className="img-fluid" />
				</div>
				<div className="product-details">
					<h6 className="brand">Lenovo</h6>
					<h5 className="product-title">Sturdy and sleek tablet</h5>
					<ReactStars
						count={5}
						size={24}
						value={3}
						edit={false}
						activeColor="#febd69"
					/>
					<p className={`${grid == 12 ? "d-block" : "d-none"} desc`}>
						lorem ipsum is simply a dummy text of wariting dummy text until you
						run out of words to fill up your container lorem ipsum is simply a
						dummy text of wariting dummy text until you run out of words to fill
						up your container
					</p>
					<p className="product-price">₹ 7000</p>
				</div>
				<div className="action-bar position-absolute">
					<div className="d-flex flex-column">
						<button className="bg-transparent border-0">
							<img src={prodcompare} alt="compare" />
						</button>
						<button className="bg-transparent border-0">
							<img src={view} alt="view" />
						</button>
						<button className="bg-transparent border-0">
							<img src={addcart} alt="add cart" />
						</button>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
