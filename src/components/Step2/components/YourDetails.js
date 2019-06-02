import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Formik, Field, ErrorMessage } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const YourDetails = props => {
	return (
		<div className="your-details section">
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
								dd/mm/yyyy
							</InputAdornment>
						)
					}}
				/>
				{props.errors.dateOfBirth && props.touched.dateOfBirth && (
					<div className="error-message">
						{props.errors.dateOfBirth}
					</div>
				)}
				{props.dateOfBirth && 				<p className="dob-helper-text">
					<span>Note:</span> all riders under the age of 18 are the
					responsibility of their guardian, and are expected to remain
					with them throughout the ride.
				</p>}
			</FormControl>

			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="Gender"
					name="gender"
					value={props.gender}
					onChange={props.handleOnChange}
				>
					<FormLabel component="legend">
						Please select your gender.
					</FormLabel>
					<FormControlLabel
						value="male"
						control={<Radio />}
						label="Male"
					/>
					<FormControlLabel
						value="female"
						control={<Radio />}
						label="Female"
					/>
				</RadioGroup>
				{props.errors.gender && props.touched.gender && (
					<div className="error-message">{props.errors.gender}</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<p className="dob-helper-text">
					Do you have any medical conditions we should be aware of? If
					so, please enter details here.
				</p>
				<TextField
					type="text"
					label="Medical conditions"
					placeholder="Medical conditions (optional)"
					name="medicalConditions"
					value={props.medicalConditions}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>
		</div>
	);
};

export default YourDetails;
