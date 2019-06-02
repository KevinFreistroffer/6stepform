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

export const YourPlan = ({ 
	selectedPlan, 
	joinExistingTeam, 
	setUpNewTeam,
	errors,
	touched,
	handleOnChange,
	handleBlur
}) => {

	return (
		<div className="your-plan section">
			<h2 className="section--title">
				How are you planning to take part
			</h2>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="How are you planning to take part?"
					name="plan"
					value={selectedPlan}
					onChange={handleOnChange}
				>	

					<FormControlLabel
						value="onMyOwn"
						control={<Radio />}
						label="On my own (you can join a team later if you wish)"
					/>
					
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
								name="join-existing-team"
								value={joinExistingTeam}
								onChange={handleOnChange}
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
						{!joinExistingTeam.trim() && (
							<div className="error-message">{errors.joinExistingTeam}</div>
						)}

					</FormControl>

					<FormControl fullWidth={true}>
						<FormControlLabel
							value="setUpNewTeam"
							control={<Radio />}
							label="I want to setup a new team"
						/>
						{selectedPlan === "setUpNewTeam" && (
							<TextField
								type="text"
								label="Set up a new team"
								placeholder="Set up a new team"
								name="set-up-new-team"
								value={setUpNewTeam}
								onChange={handleOnChange}
								onBlur={handleBlur}
								variant="outlined"
								InputProps={{
									endAdornment: (
										<InputAdornment>
											<IconButton
												edge="end"
												size="medium"
												aria-label="Set up new team"
											>
												Check
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						)}



						{/* TODO: props.touched for radio buttons with Formik using state.plan[planName]
							https://github.com/jaredpalmer/formik/issues/1051
						*/}
						{selectedPlan === 'setUpNewTeam' && !setUpNewTeam.trim() && (
							<div className="error-message">df{errors.setUpNewTeam}</div>
						)}


					</FormControl>
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export default YourPlan;
