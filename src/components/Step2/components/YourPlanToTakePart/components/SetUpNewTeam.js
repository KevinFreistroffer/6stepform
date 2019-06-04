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
import Checkbox from "@material-ui/core/Checkbox";
import MyNewTeamRadioGroup from "./MyNewTeamRadioGroup.js";
import FamilyTeamForm from "./FamilyTeamForm.js";

const SetUpNewTeam = ({
	setUpNewTeam,
	setUpNewTeamInput,
	typeOfMyNewTeam,
	familyTeamMembers,
	addFamilyTeamMember,
	removeFamilyTeamMember,
	touched,
	errors,
	formikHandleOnChange,
	handleOnChange,
	selectedPlan,
	handleBlur
}) => {
	let FamilyTeamMembers;

	if (familyTeamMembers.length > 0) {
		FamilyTeamMembers = familyTeamMembers.map((member, index) => {
			return (
				<FamilyTeamForm
					key={index}
					firstName={member.firstName}
					lastName={member.lastName}
					dateOfBirth={member.dateOfBirth}
					gender={member.gender}
					medicalConditions={member.medicalConditions}
					formikHandleOnChange={formikHandleOnChange}
					handleOnChange={handleOnChange}
				/>
			);
		});
	}

	return (
		<>
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

				{/* TODO: touched for radio buttons with Formik using state.plan[planName]
					https://github.com/jaredpalmer/formik/issues/1051
				*/}
				{!setUpNewTeamInput.trim() && touched.setUpNewTeamInput && (
					<div className="error-message">
						{errors.setUpNewTeamInput}
					</div>
				)}
			</FormControl>

			{selectedPlan === "setUpNewTeam" && (
				<MyNewTeamRadioGroup
					setUpNewTeam={setUpNewTeam}
					touched={touched}
					errors={errors}
					formikHandleOnChange={formikHandleOnChange}
					handleOnChange={handleOnChange}
					handleBlur={handleBlur}
				/>
			)}

			{typeOfMyNewTeam === "family" && (
				<>
					<h3>
						You can add additional members to your family team here.
					</h3>
					{familyTeamMembers.length === 0 && (
						<Button
							variant="contained"
							type="button"
							onClick={addFamilyTeamMember}
						>
							+ ADD FAMILY TEAM MEMBER
						</Button>
					)}
				</>
			)}

			{familyTeamMembers.map((member, index) => {
				return (
					<FamilyTeamForm
						key={index}
						index={index}
						firstName={member.firstName}
						lastName={member.lastName}
						dateOfBirth={member.dateOfBirth}
						gender={member.gender}
						medicalConditions={member.medicalConditions}
						formikHandleOnChange={formikHandleOnChange}
						handleOnChange={handleOnChange}
						removeFamilyTeamMember={removeFamilyTeamMember}
					/>
				);
			})}

			{familyTeamMembers.length > 0 && (
				<Button
					variant="contained"
					type="button"
					onClick={addFamilyTeamMember}
				>
					+ ADD ANOTHER
				</Button>
			)}
		</>
	);
};

SetUpNewTeam.displayName = "SetUpNewTeam";

export default SetUpNewTeam;
