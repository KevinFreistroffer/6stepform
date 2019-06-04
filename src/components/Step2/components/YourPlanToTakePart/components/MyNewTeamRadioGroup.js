import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';

const MyNewTeamRadioGroup = ({
	myNewTeam,
	firstName,
	lastName,
	dateOfBirth,
	medicalConditions,
	gender,
	formikHandleOnChange,
	handleOnChange,
	handleBlur,
	touched,
	errors
}) => {
	return (
		<>
			<h3>My new team is:</h3>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="My new team is"
					name="myNewTeam"
					value={myNewTeam}
					onChange={event => {
						console.log(
							"onChange",
							event.target.name,
							event.target.value
						);
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
				>
					<FormControlLabel
						value="friendsFamily"
						control={<Radio />}
						label="a team of friends and/or family"
					/>

					<FormControlLabel
						value="family"
						control={<Radio />}
						label="a family team with children under 12 (10km ride only)"
					/>
				</RadioGroup>
			</FormControl>
		</>
	);
};

export default MyNewTeamRadioGroup;
