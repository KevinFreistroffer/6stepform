import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Formik, Field, ErrorMessage } from "formik";

export const SignUpWithEmail = props => {
	return (
		<div className="sign-up-with-email section">
			<h2 className="section--title">
				Or sign up with your email address
			</h2>
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="First name"
					placeholder="First name"
					name="firstName"
					value={props.firstName}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{props.errors.firstName && props.touched.firstName && (
					<div className="error-message">{props.errors.firstName}</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Last name"
					placeholder="Last name"
					name="lastName"
					value={props.lastName}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{props.errors.lastName && props.touched.lastName && (
					<div className="error-message">{props.errors.lastName}</div>
				)}
			</FormControl>
			<FormControl fullWidth={true}>
				<TextField
					type="email"
					label="Email"
					placeholder="Email"
					name="email"
					value={props.email}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{props.errors.email && props.touched.email && (
					<div className="error-message">{props.errors.email}</div>
				)}
			</FormControl>

			<FormControl className="tel-form-control" fullWidth={true}>
					<TextField
						type="tel"
						label="Phone Number"
						placeholder="Phone Number"
						name="tel"
						value={props.tel}
						onChange={props.handleOnChange}
						onBlur={props.handleBlur}
						margin="normal"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment >
									<IconButton
										edge="end"
										size="medium"
										aria-label="Phone number"
									>
										TODO:addImage
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					{props.errors.tel && props.touched.tel && (
						<div className="error-message">{props.errors.tel}</div>
					)}
			</FormControl>
		</div>
	);
};

export default SignUpWithEmail;
