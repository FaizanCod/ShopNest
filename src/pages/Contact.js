import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Container from "../components/Container";

const Contact = () => {
	return (
		<>
			<Meta title="Contact Us" />
			<BreadCrumb title="Contact Us" />
			<Container class1="contact-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-6">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.12441961082!2d77.27917925654398!3d28.56228954390046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38c9ea28f03%3A0xcf085976f2110601!2sJamia%20Millia%20Islamia%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1689359640768!5m2!1sen!2sin"
							width="600"
							height="100%"
							className="border-0 w-100"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="col-6">
						<div className="contact-form">
							<div>
								<h3 className="contact-title mb-3">Get in Touch with us</h3>
								<form action="" className="d-flex flex-column gap-15">
									<div>
										<input
											type="text"
											className="form-control"
											placeholder="Name"
										/>
									</div>
									<div>
										<input
											type="email"
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div>
										<input
											type="tel"
											className="form-control"
											placeholder="Mobile Number"
										/>
									</div>
									<div>
										<textarea
											name=""
											id=""
											className="w-100 form-control"
											cols="30"
											rows="5"
											placeholder="Write to us"
										/>
									</div>
									<div>
										<button className="button border-0 mt-3">Submit</button>
									</div>
								</form>
							</div>
							<div className="contact-details mt-4">
								{/* <hr></hr> */}
								<ul className="ps-2">
									<li className="mb-3 d-flex gap-15 align-items-center">
										<AiFillHome className="fs-5" />
										<address className="mb-0">
											Jamia Millia Islamia, New Delhi
										</address>
									</li>
									<li className="mb-3 d-flex gap-15 align-items-center">
										<IoMdCall className="fs-5" />
										<a href="tel: +91 7208279376">+91 7208279376</a>
									</li>
									<li className="mb-3 d-flex gap-15 align-items-center">
										<AiFillMail className="fs-5" />
										<a href="mailto:choudharyfaizan15@gmail.com">
											choudharyfaizan15@gmail.com
										</a>
									</li>
									<li className="mb-3 d-flex gap-15 align-items-center">
										<BsFillInfoCircleFill className="fs-5" />
										<p className="mb-0">Monday - Friday 10am - 6pm</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Contact;
