import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<>
			<Meta title="Sign Up" />
			<BreadCrumb title="Sign Up" />
			<Container class1="login-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="auth-card">
							<h3 className="text-center mb-4">Sign Up</h3>
							<form action="" className="d-flex flex-column gap-15">
								<CustomInput type="text" name="name" placeholder="Name" />
								<CustomInput
									type="tel"
									name="mobile"
									placeholder="Mobile Number"
								/>
								<CustomInput
									type="email"
									name="email"
									placeholder="Email address"
								/>
								<CustomInput
									type="password"
									name="password"
									placeholder="Enter your password"
								/>
								<div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
									<button className="button border-0">Create Account</button>
								</div>
								<div className="text-center">
									<Link to="/login">Already a user? Log in.</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Signup;
