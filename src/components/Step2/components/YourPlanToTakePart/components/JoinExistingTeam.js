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

const JoinExistingTeam = ({
	joinExistingTeamInput,
	formikHandleOnChange,
	handleOnChange,
	selectedPlan,
	handleBlur,
	touched,
	errors
}) => {
	return (
		<FormControl fullWidth={true}>
			<FormControlLabel
				value="joinExistingTeam"
				control={<Radio />}
				label="I want to join an existing team"
			/>

			{selectedPlan === "joinExistingTeam" && (
				<TextField
					type="search"
					label="Find your team"
					placeholder="Find your team"
					name="joinExistingTeamInput"
					value={joinExistingTeamInput}
					onChange={event => {
						formikHandleOnChange(event);
						handleOnChange(event);
					}}
					onBlur={handleBlur}
					variant="outlined"
					InputProps={{
						endAdornment: (
							<InputAdornment>
								<IconButton
									edge="end"
									size="medium"
									aria-label="Find your team"
								>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
			)}

			{/* TODO: Touched for radio buttons with Formik using state.plan[planName]
				https://github.com/jaredpalmer/formik/issues/1051
			*/}
			{!joinExistingTeamInput.trim() && touched.joinExistingTeamInput && (
				<div className="error-message">
					{errors.joinExistingTeamInput}
				</div>
			)}
		</FormControl>
	);
};

JoinExistingTeam.displayName = "JoinExistingTeam";

export default JoinExistingTeam;
