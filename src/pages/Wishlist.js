import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
	return (
		<>
			<Meta title="Wishlist" />
			<BreadCrumb title="Wishlist" />
			<div className="wishlist-wrapper home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-3">
							<div className="wishlist-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="wishlist-card-image">
									<img
										src="images/watch.jpg"
										className="img-fluid w-100"
										alt="watch"
									/>
								</div>
								<div className="py-3 px-3">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price">₹ 3000</h6>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="wishlist-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="wishlist-card-image">
									<img
										src="images/watch.jpg"
										className="img-fluid w-100"
										alt="watch"
									/>
								</div>
								<div className="py-3 px-3">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price">₹ 3000</h6>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="wishlist-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="wishlist-card-image">
									<img
										src="images/watch.jpg"
										className="img-fluid w-100"
										alt="watch"
									/>
								</div>
								<div className="py-3 px-3">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price">₹ 3000</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Wishlist;
