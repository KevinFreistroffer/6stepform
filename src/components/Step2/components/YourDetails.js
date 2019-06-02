import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Formik, Field, ErrorMessage } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";

export const YourDetails = props => {
	return (
		<div className="<your-details></your-details> section">
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Date of birth"
					placeholder="Date of birth"
					name="dateOfBirth"
					value={props.dateOfBirth}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								dd/mm/yy
							</InputAdornment>
						)
					}}
				/>
				{props.errors.dateOfBirth && props.touched.dateOfBirth && (
					<div className="error-message">
						{props.errors.dateOfBirth}
					</div>
				)}
				<p className="dob-helper-text">
					<span>Note:</span> all riders under the age of 18 are the
					responsibility of their guardian, and are expected to remain
					with them throughout the ride.
				</p>
			</FormControl>
		</div>
	);
};

export default YourDetails;
