import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
	return (
		<div className="col-4 mb-3">
			<div className="special-product-card">
				<div className="d-flex justify-content-between">
					<div className="col-5">
						<img src="images/watch.jpg" className="img-fluid" alt="watch" />
					</div>
					<div className="col-7">
						<div className="special-product-content">
							<h5 className="brand">Havells</h5>
							<h6 className="title">Samsung Galaxy Note 7+</h6>
						</div>
						<ReactStars
							count={5}
							size={24}
							value={4}
							edit={false}
							activeColor="#febd69"
							classNames={"stars"}
						/>
						<p className="price">
							<span className="red-p">₹ 1500</span> &nbsp;{" "}
							<strike>₹ 2000</strike>
						</p>
						<div className="discount-till d-flex align-items-center gap-10">
							<p className="mb-0">
								<b>5 days</b>
							</p>
							<div className="d-flex align-items-center timer">
								<p className="badge bg-danger">12</p>:
								<p className="badge bg-danger">12</p>:
								<p className="badge bg-danger">12</p>
							</div>
						</div>
						<div className="prod-count my-3">
							<p>Products: 5</p>
							<div className="progress me-3">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
									style={{ width: "25%", color: "#febd69" }}
								></div>
							</div>
						</div>
						<div className="mt-2 add-cart-btn">
							<Link className="button">Add to Cart</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecialProduct;
