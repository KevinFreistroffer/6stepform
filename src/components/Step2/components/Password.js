import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/core/FormControl';


const styles = {
	largeButton: {
		width: 60,
    	height: 60
	},
	margin: {
		margin: '1rem'
	},
	textField: {
		flexBasis: 200,
	}
};


export const Password = props => {

	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	return (
		<div className="password section">
			<h2 className="section--title">
				To access your new MSWA Ocean Ride fundraising hub, please choose a password.
			</h2>
			<FormControl fullWidth={true}>
				<TextField
					type={passwordIsVisible ? 'text' : 'password'}
					label="Password"
					placeholder="Password"
					name="password"
					value={props.password}
					styles={styles.margin, styles.textField}
					helperText="Your password should contain at least 6 characters."
					onChange={props.handleOnChange}
					onBlur={props.handleBlur} 
					margin="normal"
					variant="outlined"
					InputProps={{
						endAdornment: (
							<InputAdornment >
								<IconButton
									edge="end"
									size="medium"
									aria-label="Toggle password visibility"
									onClick={() => setPasswordIsVisible(!passwordIsVisible)}
								>
									{passwordIsVisible ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				{props.errors.password && props.touched.password && (
					<div className="error-message">{props.errors.password}</div>
				)}
			</FormControl>
		</div>
	);
};

export default Password;
