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

const FamilyTeamForm = ({ 
	firstName,
	lastName,
	dateOfBirth,
	gender,
	medicalConditions,
	formikHandleOnChange,
	handleOnChange,
	handleNewTeamMemberOnChange,
	handleBlur,
	errors,
	touched,
	removeFamilyTeamMember,
	index
}) => {
    return (
		<>
			<FormControl
				fullWidth={true}
				className="family-team-member-container"
			>
				<TextField
					type="text"
					label="First name"
					placeholder="First name"
					name="familyTeamMembers[index].firstName"
					value={firstName}
					onChange={event => {
						formikHandleOnChange(event);
						handleOnChange(event, index);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>

			</FormControl>

			<FormControl
				fullWidth={true}
				className="family-team-member-container"
			>
				<TextField
					type="text"
					label="Last name"
					placeholder="Last name"
					name="familyTeamMembers[index].lastName"
					value={lastName}
					onChange={event => {
						formikHandleOnChange(event);
						handleOnChange(event, index);
					}}
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
					name="familyTeamMembers[index].dateOfBirth"
					value={dateOfBirth}
					onChange={event => {
						formikHandleOnChange(event);
						handleOnChange(event, index);
					}}
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

			<FormControl fullWidth={true}>
				<p>
					If this person has any medical conditions we should be aware
					of, please enter details here.
				</p>
				<TextField
					type="text"
					label="Medical conditions (optional)"
					placeholder="Medical conditions (optional)"
					name="familyTeamMembers[index].medicalConditions"
					value={medicalConditions}
					onChange={event => {
						formikHandleOnChange(event);
						handleOnChange(event, index);
					}}
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
				<FormLabel component="legend">Gender</FormLabel>
				<RadioGroup
					aria-label="Gender"
					name="familyTeamMembers[index].gender"
					value={gender}
					onChange={event => {
						formikHandleOnChange(event);
						handleOnChange(event, index);
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
			/> 

			<div className="remove-family-team-member" onClick={() => {
				removeFamilyTeamMember(index)
			}}>Remove</div>  
		</> 
    );
};

export default FamilyTeamForm;
