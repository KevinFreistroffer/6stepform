import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";

export const SignUpWithEmail = props => {
	useEffect(() => {
		console.log(props);
	});

	return (
		<div className="sign-up-with-email section">
			<h2 className="section--title">
				Or sign up with your email address
			</h2>
			<input
				type="text"
				placeholder="First Name"
				name="firstName"
				value={props.firstName}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.firstName && props.touched.firstName && (
				<div className="error-message">{props.errors.firstName}</div>
			)}
			<input
				type="text"
				placeholder="Last Name"
				name="lastName"
				value={props.lastName}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.lastName && props.touched.lastName && (
				<div className="error-message">{props.errors.lastName}</div>
			)}
			<input
				type="email"
				placeholder="Email"
				name="email"
				value={props.email}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.email && props.touched.email && (
				<div className="error-message">{props.errors.email}</div>
			)}

			<div className="tel-input-container">
				<label htmlFor="tel-input">
					<span className="tel-input-image">temp</span>
					<input
						id="tel-input"
						type="tel"
						placeholder="+61"
						name="tel"
						value={props.tel}
						onChange={props.handleOnChange}
						onBlur={props.handleBlur}
					/>
					{props.errors.tel && props.touched.tel && (
						<div className="error-message">{props.errors.tel}</div>
					)}
				</label>
			</div>
		</div>
	);
};

export default SignUpWithEmail;
