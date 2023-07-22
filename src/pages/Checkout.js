import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import watch from "../images/watch.jpg";

const Checkout = () => {
	return (
		<>
			<div className="checkout-wrapper home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-7">
							<div className="checkout-left-data">
								<h3 className="website-name">ShopNest.</h3>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<Link className="text-secondary" to="/cart">Cart</Link>
										</li>
										<li className="breadcrumb-item active" aria-current="page">
											Information
										</li>
										<li className="breadcrumb-item active" aria-current="page">
											Shipping
										</li>
										<li className="breadcrumb-item active" aria-current="page">
											Payment
										</li>
									</ol>
								</nav>
								<h4 className="mb-2 mt-4">Contact Information</h4>
								<p className="user-details mb-4">
									Faizan Choudhary (choudharyfaizan15@gmail.com)
								</p>
                                <h4 className="mb-3">Shipping Address</h4>
								<form
									action=""
									className="d-flex gap-15  flex-wrap justify-content-between"
								>
									<div className="w-100">
										<select name="" className="form-control form-select" id="">
											<option value={""} selected disabled>
												Select Country
											</option>
										</select>
									</div>
									<div className="flex-grow-1">
										<input
											type="text"
											placeholder="First Name"
											className="form-control"
										/>
									</div>
									<div className="flex-grow-1">
										<input
											type="text"
											placeholder="Last Name"
											className="form-control"
										/>
									</div>
									<div className="w-100">
										<input
											type="text"
											placeholder="Address"
											className="form-control"
										/>
									</div>
									<div className="w-100">
										<input
											type="text"
											placeholder="Apartment/Suite"
											className="form-control"
										/>
									</div>
									<div className="flex-grow-1">
										<input
											type="text"
											placeholder="City"
											className="form-control"
										/>
									</div>
									<div className="flex-grow-1">
										<select name="" className="form-control form-select" id="">
											<option value={""} selected disabled>
												Select State
											</option>
										</select>
									</div>
									<div className="flex-grow-1 mb-3">
										<input
											type="text"
											placeholder="Zip Code"
											className="form-control"
										/>
									</div>
									<div className="w-100">
										<div className="d-flex justify-content-between align-items-center">
											<Link to="/cart" className="text-dark">
												<IoIosArrowBack className="fs-5" />
												&nbsp; Return to Cart
											</Link>
											<Link to="" className="button">
												Continue to Shipping
											</Link>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-5">
							<div className="border-bottom py-3">
								<div className="d-flex gap-10 mb-2 align-items-center">
									<div className="w-75 d-flex gap-20">
										<div className="w-25 position-relative">
											<span
												className="badge bg-secondary text-white p-2 position-absolute"
												style={{ top: "-10px", right: "-5px" }}
											>
												1
											</span>
											<img className="img-fluid" src={watch} alt="product" />
										</div>
										<div>
											<h5 className="title">Havells Watch</h5>
											<p className="desc">Attractive Design</p>
										</div>
									</div>
									<div className="flex-grow-1">
										<h5 className="price">₹ 3000</h5>
									</div>
								</div>
								<div className="d-flex gap-10 mb-2 align-items-center">
									<div className="w-75 d-flex gap-20">
										<div className="w-25 position-relative">
											<span
												className="badge bg-secondary text-white p-2 position-absolute"
												style={{ top: "-10px", right: "-5px" }}
											>
												1
											</span>
											<img className="img-fluid" src={watch} alt="product" />
										</div>
										<div>
											<h5 className="title">Havells Watch</h5>
											<p className="desc">Attractive Design</p>
										</div>
									</div>
									<div className="flex-grow-1">
										<h5 className="price">₹ 3000</h5>
									</div>
								</div>
							</div>
							<div className="border-bottom py-3">
								<div className="d-flex justify-content-between align-items-center">
									<p className="total">Shipping</p>
									<p className="total-price">₹ 0</p>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<p className="mb-0 total">Subtotal</p>
									<p className="mb-0 total-price">₹ 3000</p>
								</div>
							</div>
							<div className="d-flex mt-2 justify-content-between align-items-center">
								<h4 className="total">Total</h4>
								<h5 className="total-price">₹ 3000</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
