import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
	return (
		<>
			<Meta title="Dynamic Blog Page" />
			<BreadCrumb title="Dynamic Blog Page" />
			<Container class1="blog-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="single-blog-card">
							<Link to="/blogs" className="d-flex align-items-center gap-10">
								<AiOutlineArrowLeft className="fs-6" /> Go Back
							</Link>
							<h3 className="title">A beautiful Sunday Morning Renaissance</h3>
							<div className="d-flex align-items-center">
								<img src={blog} className="img-fluid" alt="blog" />
							</div>
							<p>
								Your. only 8' aooS as your Gst collectico. which is an enormous
								pressure. think there is saw—thing 800ut luxury - it's not
								scenethinq people "*ed. but its they went 't realty pulls 8t
								their heart I have tentastic relatlorvship with
								money.Scelerisque sociasqu ull.a-vcorper uma r.i.l rnoEs
								vestibulum gretium commodo inceptos cum condimenturn Øacer8t Gam
								venenetis bl.ndit hec eggt dis locus 8 parturient 8 acc•-unsen
								nig ante vestibulum.
							</p>
							<div className="blog-date d-flex gap-20 align-items-center">
								<p>1 Dec, 2022</p>
								<p>11:33 am</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default SingleBlog;
