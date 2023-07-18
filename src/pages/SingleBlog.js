import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SingleBlog = () => {
	return (
		<>
			<Meta title="Dynamic Blog Page" />
			<BreadCrumb title="Dynamic Blog Page" />
			<div className="blog-wrapper home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="single-blog-card">
								<Link to="/blogs" className="d-flex align-items-center gap-10">
									<AiOutlineArrowLeft className="fs-6" /> Go Back
								</Link>
								<h3 className="title">
									A beautiful Sunday Morning Renaissance
								</h3>
								<img
									src="images/blog-1.jpg"
									className="img-fluid w-100 my-4"
									alt="blog"
								/>
								<p>
									Your. only 8' aooS as your Gst collectico. which is an
									enormous pressure. think there is saw—thing 800ut luxury -
									it's not scenethinq people "*ed. but its they went 't realty
									pulls 8t their heart I have tentastic relatlorvship with
									money.Scelerisque sociasqu ull.a-vcorper uma r.i.l rnoEs
									vestibulum gretium commodo inceptos cum condimenturn Øacer8t
									Gam venenetis bl.ndit hec eggt dis locus 8 parturient 8
									acc•-unsen nig ante vestibulum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleBlog;
