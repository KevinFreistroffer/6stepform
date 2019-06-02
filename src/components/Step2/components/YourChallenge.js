import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const YourChallenge = props => {

	const { selectOpen, setSelectOpen } = useState(false);

	return (
		<div className="password section">
			<h2 className="section--title">Your Challenge</h2>
			<p>
			What's your ride of choice for this year's event? (You can <a href="https://mswaoceanride.org.au/about/event-information" target="_blank">check out the different options and registration fees here</a>)
			</p>
			<FormControl fullWidth={true}>
				<InputLabel htmlFor="challenge-select">
					Challenge
				</InputLabel>
				<Select 
					native
					id="challenge-select" 
					name="challenge" 
					open={selectOpen}
					onClose={() => setSelectOpen(false)}
					onOpen={() => setSelectOpen(true)}
					onChange={props.handleOnChange}
					input={
	            		<OutlinedInput name="challenge" />
	          		}
				>

					<MenuItem value="" />
					<MenuItem value="10km">10km (family) ride (no age restriction)</MenuItem>
					<MenuItem value="30km">30km ride (12 years or over)</MenuItem>
					<MenuItem value="50km">50km ride (12 years or over)</MenuItem>
					<MenuItem value="70km">70km challenge (16 years or over)</MenuItem>
					<MenuItem value="100km">100km challenge (18 years or over)</MenuItem>
					<MenuItem value="120km">120km (18 years or over)</MenuItem>
	
				</Select>
				{props.errors.state && props.touched.state && (
					<div className="error-message">{props.errors.state}</div>
				)}
			</FormControl>
		</div>
	);
};

export default YourChallenge;
 	