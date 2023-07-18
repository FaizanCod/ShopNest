import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";

const Compare = () => {
	return (
		<>
			<Meta title="Compare Products" />
			<BreadCrumb title="Compare Products" />
			<div className="compare-wrapper home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-3">
							<div className="compare-product-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="product-card-image">
									<img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
								</div>
								<div className="compare-product-details">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price mb-3 mt-3">₹ 3000</h6>
									<div>
										<div className="product-detail">
											<h6>Brand</h6>
											<p className="mb-2">Noise</p>
										</div>
										<div className="product-detail">
											<h6>Type</h6>
											<p className="mb-2">Watch</p>
										</div>
										<div className="product-detail">
											<h6>Availability</h6>
											<p className="mb-2">In Stock</p>
										</div>
										<div className="product-detail d-flex align-items-center">
											<h6 className="mt-1 mb-1">Color</h6>
											<Colors />
										</div>
										<div className="product-detail">
											<h6 className="mt-2">Size</h6>
											<div className="d-flex gap-10">
												<p className="mb-0">S</p>
												<p className="mb-0">M</p>
												<p className="mb-0">L</p>
												<p className="mb-0">XL</p>
												<p className="mb-0">XXL</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="compare-product-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="product-card-image">
									<img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
								</div>
								<div className="compare-product-details">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price mb-3 mt-3">₹ 3000</h6>
									<div>
										<div className="product-detail">
											<h6>Brand</h6>
											<p className="mb-2">Noise</p>
										</div>
										<div className="product-detail">
											<h6>Type</h6>
											<p className="mb-2">Watch</p>
										</div>
										<div className="product-detail">
											<h6>Availability</h6>
											<p className="mb-2">In Stock</p>
										</div>
										<div className="product-detail d-flex align-items-center">
											<h6 className="mt-1 mb-1">Color</h6>
											<Colors />
										</div>
										<div className="product-detail">
											<h6 className="mt-2">Size</h6>
											<div className="d-flex gap-10">
												<p className="mb-0">S</p>
												<p className="mb-0">M</p>
												<p className="mb-0">L</p>
												<p className="mb-0">XL</p>
												<p className="mb-0">XXL</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="compare-product-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="product-card-image">
									<img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
								</div>
								<div className="compare-product-details">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price mb-3 mt-3">₹ 3000</h6>
									<div>
										<div className="product-detail">
											<h6>Brand</h6>
											<p className="mb-2">Noise</p>
										</div>
										<div className="product-detail">
											<h6>Type</h6>
											<p className="mb-2">Watch</p>
										</div>
										<div className="product-detail">
											<h6>Availability</h6>
											<p className="mb-2">In Stock</p>
										</div>
										<div className="product-detail d-flex align-items-center">
											<h6 className="mt-1 mb-1">Color</h6>
											<Colors />
										</div>
										<div className="product-detail">
											<h6 className="mt-2">Size</h6>
											<div className="d-flex gap-10">
												<p className="mb-0">S</p>
												<p className="mb-0">M</p>
												<p className="mb-0">L</p>
												<p className="mb-0">XL</p>
												<p className="mb-0">XXL</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="compare-product-card position-relative">
								<img
									src="images/cross.svg"
									className="position-absolute cross"
									alt="close"
								/>
								<div className="product-card-image">
									<img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
								</div>
								<div className="compare-product-details">
									<h5 className="title">Smart Watch Series 7</h5>
									<h6 className="price mb-3 mt-3">₹ 3000</h6>
									<div>
										<div className="product-detail">
											<h6>Brand</h6>
											<p className="mb-2">Noise</p>
										</div>
										<div className="product-detail">
											<h6>Type</h6>
											<p className="mb-2">Watch</p>
										</div>
										<div className="product-detail">
											<h6>Availability</h6>
											<p className="mb-2">In Stock</p>
										</div>
										<div className="product-detail d-flex align-items-center">
											<h6 className="mt-1 mb-1">Color</h6>
											<Colors />
										</div>
										<div className="product-detail">
											<h6 className="mt-2">Size</h6>
											<div className="d-flex gap-10">
												<p className="mb-0">S</p>
												<p className="mb-0">M</p>
												<p className="mb-0">L</p>
												<p className="mb-0">XL</p>
												<p className="mb-0">XXL</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Compare;
