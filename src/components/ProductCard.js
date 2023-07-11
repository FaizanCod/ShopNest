import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
	return (
		<div className="col-2">
			<Link className="product-card position-relative">
				<div className="wishlist-icon position-absolute">
					<Link>
						<img src="images/wish.svg" alt="wishlist" />
					</Link>
				</div>
				<div className="product-img">
					<img
						src="images/tab1.jpg"
						alt="product image"
						className="img-fluid"
					/>
					<img
						src="images/tab2.jpg"
						alt="product image"
						className="img-fluid"
					/>
				</div>
				<div className="product-details">
					<h6 className="brand">Lenovo</h6>
					<h5 className="product-title">Sturdy and sleek tablet</h5>
					<ReactStars
						count={5}
						size={24}
						value="3"
						edit={false}
						activeColor="#febd69"
					/>
					<p className="product-price">₹ 7000</p>
				</div>
				<div className="action-bar position-absolute">
					<div className="d-flex flex-column">
						<Link>
							<img src="images/prodcompare.svg" alt="compare" />
						</Link>
						<Link>
							<img src="images/view.svg" alt="view" />
						</Link>
						<Link>
							<img src="images/add-cart.svg" alt="add cart" />
						</Link>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
