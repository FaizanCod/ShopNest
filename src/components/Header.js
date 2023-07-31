import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
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
								Free Shipping on orders over ₹1000 & Free Returns *
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
					<div className="row align-items-center justify-content-between">
						<div className="col-3">
							<h2>
								<Link to="/" className="text-white">
									ShopNest.
								</Link>
							</h2>
						</div>
						<div className="col-4 search">
							<div className="input-group">
								<input
									type="text"
									className="form-control py-2"
									placeholder="Search Products..."
									aria-label="Search Products..."
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
										<div className="d-flex flex-column position-relative">
											<span className="badge bg-white text-dark position-absolute">
												10
											</span>
											<p className="ms-3 mb-0">
												Cart <br />₹ 500
											</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<header className="search-bar py-2" style={{ display: "none" }}>
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="input-group">
								<input
									type="text"
									className="form-control py-1"
									placeholder="Search Products..."
									aria-label="Search Products..."
									aria-describedby="basic-addon2"
								/>
								<span className="input-group-text px-3" id="basic-addon2">
									<BsSearch className="fs-6" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<nav className="navbar navbar-expand-lg header-bottom py-3">
				<div className="container-xxl d-flex justify-content-center">
					<div className="row">
						<div className="col-12">
							<div className="menu-bottom d-flex flex-wrap gap-15 align-items-center justify-content-between">
								<button
									className="navbar-toggler text-white"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon"></span>
								</button>
								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex align-items-center">
										<li className="nav-item dropdown">
											<button
												className="nav-link dropdown-toggle"
												href="#"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<img src={menu} alt="menu" />
												<span className="ms-2 me-2 d-in1ine-b10ck">
													Shop Categories
												</span>
											</button>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item text-white" href="#">
														Electronics
													</a>
												</li>
												<li>
													<a className="dropdown-item text-white" href="#">
														Utilities
													</a>
												</li>
												<li>
													<a className="dropdown-item text-white" href="#">
														Fashion
													</a>
												</li>
											</ul>
										</li>
										{/* <li className="nav-item"> */}
										<div className="ms-3 menu-links d-flex gap-15 align-items-center">
											<li className="nav-item">
												<NavLink to="/">Home</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/product">Our Store</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/blogs">Blogs</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/contact">Contact</NavLink>
											</li>
										</div>
										{/* </li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
