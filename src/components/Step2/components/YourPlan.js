import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const YourPlan = props => {

	return (
		<div className="your-plan section">
			<h2 className="section--title">How are you planning to take part</h2>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="How are you planning to take part?"
					name="plan"
					value={props.plan}
					onChange={props.handleOnChange}
				>
					<FormControlLabel
						value="on-my-own"
						control={<Radio />}
						label="On my own (you can join a team later if you wish)"
					/>
					<FormControlLabel
						value="female"
						control={<><Radio /> fjdals</>}
						label="I want to join an existing team"
					/>
				</RadioGroup>
				{props.errors.gender && props.touched.gender && (
					<div className="error-message">{props.errors.gender}</div>
				)}
			</FormControl>
		</div>
	);
};

export default YourPlan;
 	