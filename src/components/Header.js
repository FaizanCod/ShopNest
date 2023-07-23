import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import menu from "../images/menu.svg";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";

const Header = () => {
	return (
		<>
			<header className="header-top-strip py-3">
				<div className="container-xxl">
					<div className="row">
						<div className="col-7">
							<p className="text-white mb-0">
								Free Shipping on orders over ₹1000 & Free Returns
							</p>
						</div>
						<div className="col-5">
							<p className="text-end text-white mb-0">
								Hotline:{" "}
								<a className="text-white" href="tel: +91 7208279376">
									+91 7208279376
								</a>
							</p>
						</div>
					</div>
				</div>
			</header>
			<header className="header-upper py-3">
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-3">
							<h2>
								<Link to="/" className="text-white">ShopNest.</Link>
							</h2>
						</div>
						<div className="col-4">
							<div className="input-group">
								<input
									type="text"
									className="form-control py-2"
									placeholder="Search Product Here..."
									aria-label="Search Product Here..."
									aria-describedby="basic-addon2"
								/>
								<span className="input-group-text px-3" id="basic-addon2">
									<BsSearch className="fs-5" />
								</span>
							</div>
						</div>
						<div className="col-5">
							<div className="header-upper-links d-flex align-items-center justify-content-between">
								<div>
									<Link
										to="/compare-products"
										className="d-flex align-items-center gap-10 text-white"
									>
										<img src={compare} alt="compare" />
										<p className="mb-0">
											Compare <br /> Products
										</p>
									</Link>
								</div>
								<div>
									<Link
										to="/wishlist"
										className="d-flex align-items-center gap-10 text-white"
									>
										<img src={wishlist} alt="wishlist" />
										<p className="mb-0">
											Favourite <br /> Wishlist
										</p>
									</Link>
								</div>
								<div>
									<Link
										to="/login"
										className="d-flex align-items-center gap-10 text-white"
									>
										<img src={user} alt="user" />
										<p className="mb-0">
											Login <br /> My Account
										</p>
									</Link>
								</div>
								<div>
									<Link
										to="/cart"
										className="d-flex align-items-center gap-10 text-white"
									>
										<img src={cart} alt="cart" />
										<div className="d-flex flex-column">
											<span className="badge bg-white text-dark">0</span>
											<p className="mb-0">₹ 500</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<header className="header-bottom py-3">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="menu-bottom d-flex align-items-center gap-30">
								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<img src={menu} alt="menu" />
										<span className="me-2 d-inline-block">Shop Categories</span>
									</button>
									<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item text-white" to="#">
												Action
											</Link>
										</li>
										<li>
											<Link className="dropdown-item text-white" to="#">
												Another action
											</Link>
										</li>
										<li>
											<Link className="dropdown-item text-white" to="#">
												Something else here
											</Link>
										</li>
									</ul>
								</div>
								<div className="menu-links">
									<div className="d-flex align-items-center gap-15">
										<NavLink to="/">Home</NavLink>
										<NavLink to="/store">Our Store</NavLink>
										<NavLink to="/blogs">Blogs</NavLink>
										<NavLink to="/contact">Contact</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
