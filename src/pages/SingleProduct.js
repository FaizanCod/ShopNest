import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { IoMdGitCompare } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Container from "../components/Container";

const SingleProduct = () => {
	const props = {
		width: 400,
		height: 600,
		zoomWidth: 600,
		img: "https://specialpricing.futureworldindia.in/image/cache/catalog/194253156741/MKU93_VW_34FR+watch-40-alum-starlight-nc-se_VW_34FR_WF_CO_GEO_IN-1400x1400.jpg",
	};

	const copyToClipboard = (text) => {
		console.log("text", text);
		var textField = document.createElement("textarea");
		textField.innerText = text;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand("copy");
		textField.remove();
	};

	const [orderedProduct, setOrderedProduct] = useState(true);
	return (
		<>
			<Meta title="Product Name" />
			<BreadCrumb title="Product Name" />
			<Container class1="main-product-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-6">
						<div className="main-product-img">
							<div>
								<ReactImageZoom {...props} />
							</div>
						</div>
						<div className="other-product-imgs d-flex flex-wrap gap-20">
							<div>
								<img
									className="img-fluid"
									src="https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UF1000,1000_QL80_.jpg"
								/>
							</div>
							<div>
								<img
									className="img-fluid"
									src="https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UF1000,1000_QL80_.jpg"
								/>
							</div>
							<div>
								<img
									className="img-fluid"
									src="https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UF1000,1000_QL80_.jpg"
								/>
							</div>
							<div>
								<img
									className="img-fluid"
									src="https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UF1000,1000_QL80_.jpg"
								/>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="main-product-details">
							<div className="border-bottom">
								<h3 className="title">Havells Watch</h3>
							</div>
							<div className="border-bottom py-3">
								<p className="price">₹ 3000</p>
								<div className="d-flex align-items-center gap-15">
									<ReactStars
										count={5}
										size={24}
										value={4}
										edit={false}
										activeColor="#febd69"
									/>
									<p className="mb-0 t-review">(2 reviews)</p>
								</div>
								<a className="review-btn" href="#review">
									Write a Review
								</a>
							</div>
							<div className="border-bottom">
								<div className="d-flex gap-10 align-items-center my-2">
									<h4 className="product-heading">Type: </h4>
									<p className="product-data">Watch</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h4 className="product-heading">Brand: </h4>
									<p className="product-data">Havells</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h4 className="product-heading">Category: </h4>
									<p className="product-data">Watch</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h4 className="product-heading">Tags: </h4>
									<p className="product-data">Watch</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h4 className="product-heading">Availability: </h4>
									<p className="product-data">In Stock</p>
								</div>
								<div className="d-flex gap-10 flex-column mt-2 mb-3">
									<h4 className="product-heading">Size: </h4>
									<div className="d-flex flex-wrap gap-15">
										<span className="badge border border-1 bg-white text-dark border-secondary">
											S
										</span>
										<span className="badge border border-1 bg-white text-dark border-secondary">
											M
										</span>
										<span className="badge border border-1 bg-white text-dark border-secondary">
											L
										</span>
										<span className="badge border border-1 bg-white text-dark border-secondary">
											XL
										</span>
										<span className="badge border border-1 bg-white text-dark border-secondary">
											XXL
										</span>
									</div>
								</div>
								<div className="d-flex gap-10 flex-column mt-2 mb-3">
									<h4 className="product-heading">Color: </h4>
									<Colors />
								</div>
								<div className="d-flex gap-10 align-items-center mt-3 mb-4">
									<h4 className="product-heading mb-0">Quantity: </h4>
									<div>
										<input
											type="number"
											min={1}
											max={10}
											style={{ width: "70px" }}
											className="form-control ps-2 pe-0 py-1"
											name=""
											id=""
										/>
									</div>
									<div className="d-flex align-items-center gap-20 ms-4">
										<button className="button border-0" type="submit">
											Add to Cart
										</button>
										<button className="button signup">Buy Now</button>
									</div>
								</div>
								<div className="d-flex align-items-center gap-15">
									<div>
										<a href="">
											<BsFillBookmarkHeartFill className="fs-6 me-1" /> Add to
											Wishlist
										</a>
									</div>
									<div>
										<a href="">
											<IoMdGitCompare className="fs-6 me-1" /> Add to Compare
										</a>
									</div>
								</div>
								<div className="d-flex gap-10 flex-column my-4">
									<h4 className="product-heading">Shipping & Returns</h4>
									<p className="product-data">
										Free shipping and returns available on all orders!
										<br /> We ship all US domestic orders within{" "}
										<b>5-10 business days!</b>
									</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-4">
									<h4 className="product-heading">Copy Product Link</h4>
									<a
										href="javascript:void(0)"
										onClick={() => {
											copyToClipboard("www.google.co.in");
										}}
										className="product-data"
									>
										Product Link Here
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="description-wrapper py-5 home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h4 className="mb-2 ms-2">Description</h4>
						<div className="bg-white p-4 desc-inner-wrapper">
							<p className="mb-0">
								lorem ipsum is the lorem ipsum is the lorem ipsum is the lorem
								ipsum is the lorem ipsum is the lorem ipsum is the lorem ipsum
								is the lorem ipsum is the lorem ipsum is the lorem ipsum is the
								lorem ipsum is the lorem ipsum is the lorem ipsum is the{" "}
							</p>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="reviews-wrapper home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h4 id="review" className="mb-2 ms-2">
							Reviews
						</h4>
						<div className="review-inner-wrapper">
							<div className="review-head d-flex justify-content-between align-items-end">
								<div>
									<h4 className="mb-2">Customer Reviews</h4>
									<div className="d-flex align-items-center gap-10">
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={false}
											activeColor="#febd69"
										/>
										<p className="mb-0">Based on 2 reviews</p>
									</div>
								</div>

								{orderedProduct && (
									<div>
										<a className="text-dark text-decoration-underline" href="">
											Write a review
										</a>
									</div>
								)}
							</div>
							<div className="review-form py-4">
								<h4>Write a Review</h4>
								<form action="" className="d-flex flex-column gap-15">
									<div>
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={true}
											activeColor="#febd69"
										/>
									</div>
									<div>
										<input
											type="text"
											className="form-control"
											placeholder="Name"
										/>
									</div>
									<div>
										<textarea
											name=""
											id=""
											className="w-100 form-control"
											cols="30"
											rows="5"
											placeholder="Comments"
										/>
									</div>
									<div className="d-flex justify-content-end">
										<button className="button border-0 mt-3">
											Submit Review
										</button>
									</div>
								</form>
							</div>
							<div className="reviews">
								<div className="review mt-3">
									<div className="d-flex gap-15 align-items-center">
										<h6 className="mb-0">Anonymous </h6>
										<ReactStars
											count={5}
											size={22}
											value={4}
											edit={false}
											activeColor="#febd69"
										/>
									</div>
									<p className="mt-2">
										lorem ipsum is the lorem ipsum is the lorem ipsum is the
										lorem ipsum is the lorem ipsum is the lorem ipsum is the
										lorem ipsum is the lorem ipsum is the lorem ipsum is the
										lorem ipsum is the lorem ipsum is the lorem ipsum is the{" "}
									</p>
								</div>
								<div className="review mt-3">
									<div className="d-flex gap-15 align-items-center">
										<h6 className="mb-0">Anonymous </h6>
										<ReactStars
											count={5}
											size={22}
											value={4}
											edit={false}
											activeColor="#febd69"
										/>
									</div>
									<p className="mt-2">
										lorem ipsum is the lorem ipsum is the lorem ipsum is the
										lorem ipsum is the lorem ipsum is the lorem ipsum is the
										lorem ipsum is the lorem ipsum is the lorem ipsum is the
										lorem ipsum is the lorem ipsum is the lorem ipsum is the{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
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
		</>
	);
};

export default SingleProduct;
