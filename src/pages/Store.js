import React from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Store = () => {
	return (
		<>
			<Meta title={"Our Store"} />
			<BreadCrumb title={"Our Store"} />
			<div className="store-wrapper py-5 home-wrapper-2">
				<div className="container-xxl">
					<div className="row">
						<div className="col-3">
							<div className="filter-card mb-3">
								<h3 className="filter-title">Shop By Categories</h3>
								<div>
									<ul className="ps-0 mb-0">
										<li>Watches</li>
										<li>TV</li>
										<li>Camera</li>
										<li>Laptop</li>
									</ul>
								</div>
							</div>
							<div className="filter-card mb-3">
								<h3 className="filter-title">Filter By</h3>
								<div>
									<h5 className="sub-title">Availability</h5>
									<div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id=""
											/>
											<label className="form-check-label" htmlFor="">
												In Stock (1)
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id=""
											/>
											<label className="form-check-label" htmlFor="">
												Out of Stock (0)
											</label>
										</div>
									</div>
									<h5 className="sub-title">Price</h5>
									<div className="d-flex align-items-center gap-10">
										<div className="form-floating">
											<input
												type="number"
												className="form-control"
												style={{ height: "45px" }}
												id="floatingInput"
												placeholder="From"
											/>
											<label htmlFor="floatingInput">From</label>
										</div>
										<div className="form-floating">
											<input
												type="number"
												className="form-control"
												style={{ height: "45px" }}
												id="floatingInput2"
												placeholder="To"
											/>
											<label htmlFor="floatingInput2">To</label>
										</div>
									</div>
									<h5 className="sub-title">Colors</h5>
									<div>
										<ul className="colors ps-1">
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
									</div>
									<h5 className="sub-title">Size</h5>
									<div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="size-1"
											/>
											<label className="form-check-label" htmlFor="size-1">
												S (2)
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="size-2"
											/>
											<label className="form-check-label" htmlFor="size-2">
												M (2)
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="size-3"
											/>
											<label className="form-check-label" htmlFor="size-3">
												L (3)
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="size-4"
											/>
											<label className="form-check-label" htmlFor="size-4">
												XL (1)
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="size-5"
											/>
											<label className="form-check-label" htmlFor="size-5">
												XXL (0)
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="filter-card mb-3">
								<h3 className="filter-title">Product Tags</h3>
								<div>
									<div className="product-tags d-flex flex-wrap align-items-center gap-8">
										<span className="badge rounded-5 py-2 px-3">
											Headphones
										</span>
										<span className="badge rounded-5 py-2 px-3">Speakers</span>
										<span className="badge rounded-5 py-2 px-3">Tablets</span>
										<span className="badge rounded-5 py-2 px-3">Laptops</span>
										<span className="badge rounded-5 py-2 px-3">Mobile</span>
									</div>
								</div>
							</div>
							<div className="filter-card mb-3">
								<h3 className="filter-title">Random Products</h3>
								<div>
									<div className="random-products mb-3 d-flex">
										<div className="width">
											<img
												src="images/tab.jpg"
												className="img-fluid"
												alt="random product"
											/>
										</div>
										<div className="mt-3">
											<h5>Lenovo Smart Tablet 7</h5>
											<ReactStars
												count={5}
												size={22}
												value={3}
												edit={false}
												activeColor="#febd69"
											/>
											<b>₹ 7000</b>
										</div>
									</div>
									<div className="random-products d-flex">
										<div className="width">
											<img
												src="images/tab.jpg"
												className="img-fluid"
												alt="random product"
											/>
										</div>
										<div className="mt-3">
											<h5>Lenovo Smart Tablet 7</h5>
											<ReactStars
												count={5}
												size={22}
												value={3}
												edit={false}
												activeColor="#febd69"
											/>
											<b>₹ 7000</b>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-9"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Store;
