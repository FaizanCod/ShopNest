import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/data";

const Home = () => {
	return (
		<>
			<Container class1="home-wrapper-1 py-5">
				<div className="row banners">
					<div className="col-6">
						<div className="main-banner position-relative">
							<div className="main-banner-img">
								<img
									src="images/main-banner-1.jpg"
									className="img-fluid rounded-3"
									alt="main banner"
								/>
							</div>
							<div className="main-banner-content position-absolute">
								<h4>SUPERCHARGED FOR PROS.</h4>
								<h5>iPad S13+ Pro.</h5>
								<p>
									From ₹ 80,000 or ₹5,000/mo. <br />
									for 17 months.
								</p>
								<Link className="button">Buy Now</Link>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
							<div className="small-banner position-relative">
								<div className="small-banner-img">
									<img
										src="images/catbanner-01.jpg"
										className="img-fluid rounded-3"
										alt="main banner"
									/>
								</div>

								<div className="small-banner-content position-absolute">
									<h4>BEST SALE</h4>
									<h5>Laptops Max</h5>
									<p>
										From ₹ 80,000 <br />
										or ₹5,000/mo.
									</p>
								</div>
							</div>
							<div className="small-banner position-relative">
								<div className="small-banner-img">
									<img
										src="images/catbanner-02.jpg"
										className="img-fluid rounded-3"
										alt="main banner"
									/>
								</div>
								<div className="small-banner-content position-absolute">
									<h4>NEW ARRIVAL</h4>
									<h5>iPad S13+ Pro.</h5>
									<p>
										From ₹ 80,000 <br />
										or ₹5,000/mo.
									</p>
								</div>
							</div>
							<div className="small-banner position-relative">
								<div className="small-banner-img">
									<img
										src="images/catbanner-03.jpg"
										className="img-fluid rounded-3"
										alt="main banner"
									/>
								</div>
								<div className="small-banner-content position-absolute">
									<h4>SUPERCHARGED FOR PROS.</h4>
									<h5>iPad S13+ Pro.</h5>
									<p>
										From ₹ 80,000 <br />
										or ₹5,000/mo.
									</p>
								</div>
							</div>
							<div className="small-banner position-relative">
								<div className="small-banner-img">
									<img
										src="images/catbanner-04.jpg"
										className="img-fluid rounded-3"
										alt="main banner"
									/>
								</div>
								<div className="small-banner-content position-absolute">
									<h4>SUPERCHARGED FOR PROS.</h4>
									<h5>iPad S13+ Pro.</h5>
									<p>
										From ₹ 80,000 <br />
										or ₹5,000/mo.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="services d-flex align-items-center justify-content-around">
							{services?.map((i, j) => {
								return (
									<div className="d-flex align-items-center gap-15" key={j}>
										<img src={i.image} alt="services" />
										<div>
											<h6>{i.title}</h6>
											<p className="mb-0">{i.tagline}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</Container>
			<Container class1="home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="categories d-flex justify-content-between flex-wrap align-items-center">
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Cameras</h6>
									<p>10 Items</p>
								</div>
								<img src="images/camera.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Smart TV</h6>
									<p>10 Items</p>
								</div>
								<img src="images/tv.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Smart Watch</h6>
									<p>10 Items</p>
								</div>
								<img src="images/camera.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Headphones</h6>
									<p>10 Items</p>
								</div>
								<img src="images/headphone.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Cameras</h6>
									<p>10 Items</p>
								</div>
								<img src="images/camera.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Headphones</h6>
									<p>10 Items</p>
								</div>
								<img src="images/headphone.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Smart TV</h6>
									<p>10 Items</p>
								</div>
								<img src="images/tv.jpg" alt="camera" />
							</div>
							<div className="d-flex gap-20 align-items-center">
								<div>
									<h6>Smart Watch</h6>
									<p>10 Items</p>
								</div>
								<img src="images/camera.jpg" alt="camera" />
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="featured-wrapper py-5 home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h3 className="section-heading">Featured Collections</h3>
					</div>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</Container>
			<Container class1="famous-wrapper py-2 home-wrapper-2">
				<div className="row">
					<div className="col-3 mt-4">
						<div className="famous-card position-relative">
							<img
								src="images/famous-1-2.jpg"
								alt="famous"
								className="img-fluid"
							/>
							<div className="famous-content position-absolute">
								<h6>Big Screen</h6>
								<h5>Smart Watch Series 7</h5>
								<p>From ₹ 3000</p>
							</div>
						</div>
					</div>
					<div className="col-3 mt-4">
						<div className="famous-card position-relative">
							<img
								src="images/famous-2-3.jpg"
								alt="famous"
								className="img-fluid"
							/>
							<div className="famous-content position-absolute">
								<h6 className="text-dark">Studio Display</h6>
								<h5 className="text-dark">600 nits of brightness</h5>
								<p className="text-dark">27-in 5k retina display</p>
							</div>
						</div>
					</div>
					<div className="col-3 mt-4">
						<div className="famous-card position-relative">
							<img
								src="images/famous-2-3.jpg"
								alt="famous"
								className="img-fluid"
							/>
							<div className="famous-content position-absolute">
								<h6 className="text-dark">Studio Display</h6>
								<h5 className="text-dark">600 nits of brightness</h5>
								<p className="text-dark">27-in 5k retina display</p>
							</div>
						</div>
					</div>
					<div className="col-3 mt-4">
						<div className="famous-card position-relative">
							<img
								src="images/famous-2-3.jpg"
								alt="famous"
								className="img-fluid"
							/>
							<div className="famous-content position-absolute">
								<h6 className="text-dark">Studio Display</h6>
								<h5 className="text-dark">600 nits of brightness</h5>
								<p className="text-dark">27-in 5k retina display</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="special-wrapper py-5 home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h3 className="section-heading">Special Products</h3>
					</div>
				</div>
				<div className="row">
					<SpecialProduct />
					<SpecialProduct />
					<SpecialProduct />
				</div>
			</Container>
			<Container class1="popular-wrapper py-5 home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h3 className="section-heading">Our Popular Products</h3>
					</div>
				</div>
				<div className="row">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</Container>
			<Container class1="marquee-wrapper py-5">
				<div className="row">
					<div className="col-12">
						<div className="marquee-inner-wrapper card-wrapper">
							<Marquee className="d-flex">
								<div className="mx-4 w-25">
									<img src="images/brand-01.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-02.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-03.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-04.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-05.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-06.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-07.png" alt="brand" />
								</div>
								<div className="mx-4 w-25">
									<img src="images/brand-08.png" alt="brand" />
								</div>
							</Marquee>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="blog-wrapper py-5 home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h3 className="section-heading">Our Latest Blogs</h3>
					</div>
					<div className="row d-flex align-items-center justify-content-between w-100">
						<div className="col-3 mb-3">
							<BlogCard />
						</div>
						<div className="col-3 mb-3">
							<BlogCard />
						</div>
						<div className="col-3 mb-3">
							<BlogCard />
						</div>
						<div className="col-3 mb-3">
							<BlogCard />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
