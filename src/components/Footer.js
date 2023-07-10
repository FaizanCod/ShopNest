import React from "react";
import { Link } from "react-router-dom";
import {
	BsLinkedin,
	BsGithub,
	BsInstagram,
	BsGooglePlay,
	BsApple,
} from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<footer className="py-4">
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-5">
							<div className="footer-top-data d-flex gap-20 align-items-center">
								<img src="images/newsletter.png" alt="newsletter" />
								<h5 className="mb-0 text-white">Sign Up for NewsLetter</h5>
							</div>
						</div>
						<div className="col-7">
							<div class="input-group">
								<input
									type="text"
									class="form-control py-1"
									placeholder="Your Email Address"
									aria-label="Your Email Address"
									aria-describedby="basic-addon2"
								/>
								<span class="input-group-text px-3" id="basic-addon2">
									Subscribe
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className="py-4">
				<div className="container-xxl">
					<div className="row">
						<div className="col-3">
							<h5 className="text-white mb-4">Contact Us</h5>
							<div>
								<address className="text-white fs-6">
									204, Gandhi Nagar, Gujarat <br />
									Pin Code: 123456
								</address>
								<a
									className="mt-3 d-block mb-1 text-white"
									href="tel: +91 7208279376"
								>
									+91 7208279376
								</a>
								<a
									className="mt-2 d-block mb-0 text-white"
									href="mailto: shopnest@gmail.com"
								>
									shopnest@gmail.com
								</a>
								<div className="social-icons d-flex align-items-center gap-20 mt-4">
									<a href="" className="text-white">
										{" "}
										<BsLinkedin className="fs-4" />
									</a>
									<a href="" className="text-white">
										{" "}
										<BsGithub className="fs-4" />
									</a>
									<a href="" className="text-white">
										{" "}
										<BsInstagram className="fs-4" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-2">
							<h5 className="text-white mb-4">Information</h5>
							<div className="footer-links d-flex flex-column">
								<Link className="text-white mb-1 py-2">Privacy Policy</Link>
								<Link className="text-white mb-1 py-2">Refund Policy</Link>
								<Link className="text-white mb-1 py-2">Shipping Policy</Link>
								<Link className="text-white mb-1 py-2">
									Terms and Conditions
								</Link>
								<Link className="text-white mb-1 py-2">Blogs</Link>
							</div>
						</div>
						<div className="col-2">
							<h5 className="text-white mb-4"> Account</h5>
							<div className="footer-links d-flex flex-column">
								<Link className="text-white mb-1 py-2">About Us</Link>
								<Link className="text-white mb-1 py-2">FAQ</Link>
								<Link className="text-white mb-1 py-2">Contact</Link>
							</div>
						</div>
						<div className="col-2">
							<h5 className="text-white mb-4">Quick Links</h5>
							<div className="footer-links d-flex flex-column">
								<Link className="text-white mb-1 py-2">Laptops</Link>
								<Link className="text-white mb-1 py-2">Headphones</Link>
								<Link className="text-white mb-1 py-2">Smartwatches</Link>
								<Link className="text-white mb-1 py-2">Tablets</Link>
							</div>
						</div>
						<div className="col-3">
							<h5 className="text-white mb-4">Our App</h5>
							<div className="d-flex flex-column">
								<p className="text-white mb-0">
									Download our app and get extra 15% discount on your first
									order!
								</p>
								<div className="d-flex mt-3">
									<div className="d-flex align-items-center download-btn">
										<button
											type="button"
											className="btn btn-light text-start d-flex align-items-center"
										>
											<i className="row-8 me-2 fs-4">
												<BsGooglePlay />
											</i>
											<span className="row-4 download-txt">
												Get it on <br />
												<span className="download-txt-2">Google Play</span>
											</span>
										</button>
									</div>
									<div className="d-flex align-items-center download-btn ms-1">
										<button
											type="button"
											className="btn btn-light text-start d-flex align-items-center"
										>
											<i className="row-8 me-2 fs-4">
												<BsApple />
											</i>
											<span className="row-4 download-txt">
												Download from <br />
												<span className="download-txt-2">App Store</span>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className="py-3">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<p className="text-white mb-0 text-left">
								&copy; {new Date().getFullYear()}, Powered by Developers.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
