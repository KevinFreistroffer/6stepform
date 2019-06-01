import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';

export const Password = props => {

	const [passwordIsVisible, togglePasswordIsVisible] = useState(false);
	return (
		<div className="password section">
			<h2 className="section--title">
				To access your new MSWA Ocean Ride fundraising hub, please choose a password.
			</h2>
			<TextField
				type="password"
				placeholder="Password"
				name="password"
				value={props.password}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur} 
				margin="normal"
				variant="outlined"
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				value={props.password}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.password && props.touched.password && (
				<div className="error-message">{props.errors.password}</div>
			)}
		</div>
	);
};

export default Password;
