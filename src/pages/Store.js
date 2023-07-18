import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Colors from "../components/Colors.js"

const Store = () => {
	// to set the grid style of the products
	const [grid, setGrid] = useState(4);
	// alert(grid);

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
										<Colors />
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
						<div className="col-9">
							<div className="filter-sort-grid mb-4">
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center gap-10">
										<p className="ms-2 mb-0 d-block" style={{ width: "100px" }}>
											Sort By:
										</p>
										<select
											name="sort by"
											className="form-control form-select"
											id=""
										>
											<option value="manual">Featured</option>
											<option value="best-selling" selected="selected">
												Best Selling
											</option>
											<option value="title-ascending">
												Alphabetically, A-Z
											</option>
											<option value="title-descending">
												Alphabetically, Z-A
											</option>
											<option value="price-ascending">
												Price, low to high
											</option>
											<option value="price-descending">
												Price, high to low
											</option>
											<option value="created-ascending">
												Date, old to new
											</option>
											<option value="created-descending">
												Date, new to old
											</option>
										</select>
									</div>
									<div className="d-flex align-items-center gap-10">
										<p className="total-products mb-0">21 Products</p>
										<div className="d-flex gap-10 align-items-center grid me-2">
											<img
												onClick={() => {
													setGrid(3);
												}}
												src="images/gr4.svg"
												alt="grid"
												className="d-block img-fluid"
											/>
											<img
												onClick={() => {
													setGrid(4);
												}}
												src="images/gr3.svg"
												alt="grid"
												className="d-block img-fluid"
											/>
											<img
												onClick={() => {
													setGrid(6);
												}}
												src="images/gr2.svg"
												alt="grid"
												className="d-block img-fluid"
											/>
											<img
												onClick={() => {
													setGrid(12);
												}}
												src="images/gr.svg"
												alt="grid"
												className="d-block img-fluid"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="products-list pb-5">
								<div className="d-flex gap-10 flex-wrap">
									<ProductCard grid={grid} />
									<ProductCard grid={grid} />
									<ProductCard grid={grid} />
									<ProductCard grid={grid} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Store;
