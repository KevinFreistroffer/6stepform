import React from "react";
import { Formik } from "formik";

export const SignUpWithEmail = props => {
	return (
		<div className="sign-up-with-email section">
			<h2 className="section--title">
				Or sign up with your email address
			</h2>
			<form className="flex column">
				<input
					type="text"
					placeholder="First Name"
					name="first-name-input"
					value={props.firstName}
					onChange={event => console.log(event)}
				/>
				<input
					type="text"
					placeholder="Last Name"
					name="last-name"
					value={props.lastName}
					onChange={event => console.log(event)}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					value={props.email}
					onChange={event => console.log(event)}
				/>
				<div className="tel-input-container">
					<label htmlFor="tel-input">
						<span className="tel-input-image">temp</span>
						<input
							id="tel-input"
							type="tel"
							placeholder="+61"
							name="tel"
							value={props.tel}
							onChange={event => console.log(event)}
						/>
					</label>
				</div>
			</form>
		</div>
	);
};

export default SignUpWithEmail;
