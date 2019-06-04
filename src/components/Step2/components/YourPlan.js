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

export const YourPlan = ({
	selectedPlan,
	joinExistingTeam,
	joinExistingTeamInput,
	setUpNewTeam,
	setUpNewTeamInput,
	firstName,
	lastName,
	dateOfBirth,
	gender,
	medicalConditions,
	myNewTeam,
	errors,
	touched,
	formikHandleOnChange,
	handleOnChange,
	handleBlur
}) => {
	useEffect(() => {
		console.log("selectedPlan", selectedPlan);
	});
	return (
		<div className="your-plan section">
			<h2 className="section--title">
				How are you planning to take part
			</h2>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="How are you planning to take part?"
					name="selectedPlan"
					value={selectedPlan}
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
						{!joinExistingTeamInput.trim() &&
							touched.joinExistingTeamInput && (
								<div className="error-message">
									{errors.joinExistingTeamInput}
								</div>
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
								name="setUpNewTeamInput"
								value={setUpNewTeamInput}
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
						{!setUpNewTeamInput.trim() &&
							touched.setUpNewTeamInput && (
								<div className="error-message">
									{errors.setUpNewTeamInput}
								</div>
							)}
					</FormControl>
				</RadioGroup>
			</FormControl>

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

			<h3>You can add additional members to your family team here.</h3>
			<Button variant="contained" type="submit" onClick={() => {}}>
				+ ADD FAMILY TEAM MEMBER
			</Button>

			<FormControl fullWidth={true} className="family-team-member-container">
				<TextField
					type="text"
					label="First name"
					placeholder="First name"
					name="newTeamMemberFirstName"
					value={firstName}
					onChange={handleOnChange}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true} className="family-team-member-container">
				<TextField
					type="text"
					label="Last name"
					placeholder="Last name"
					name="newTeamMemberLastName"
					value={lastName}
					onChange={handleOnChange}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Date of birth"
					placeholder="Date of birth"
					name="newTeamMemberDateOfBirth"
					value={dateOfBirth}
					onChange={handleOnChange}
					onBlur={handleBlur}
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
				{errors.teamMemberDateOfBirth &&
					touched.teamMemberDateOfBirth && (
						<div className="error-message">
							{errors.teamMemberDateOfBirth}
						</div>
					)}
			</FormControl>

			<FormControl fullWidth={true}>
				<p>
					If this person has any medical conditions we should be aware
					of, please enter details here.
				</p>
				<TextField
					type="text"
					label="Medical conditions (optional)"
					placeholder="Medical conditions (optional)"
					name="newTeamMemberMedicalConditions"
					value={medicalConditions}
					onChange={handleOnChange}
					onBlur={handleBlur}
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
			</FormControl>

			<FormControl component="fieldset" fullWidth={true}>
				<FormLabel component="legend">
					Gender
				</FormLabel>
				<RadioGroup
					aria-label="Gender"
					name="newTeamMemberGender"
					value={gender}
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
						value="Male"
						control={<Radio />}
						label="Male"
					/>

					<FormControlLabel
						value="Female"
						control={<Radio />}
						label="Female"
					/>
				</RadioGroup>
			</FormControl>

			<FormControlLabel 
				control={
					<Checkbox 
						checked={false}
						onChange={formikHandleOnChange}
						value={true}
					/>
				}
				label="Create a separate fundraising page for this team member"
			>
			</FormControlLabel>
		</div>
	);
};

export default YourPlan;
