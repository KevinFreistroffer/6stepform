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
import JoinExistingTeam from './components/JoinExistingTeam.js';
import SetUpNewTeam from './components/SetUpNewTeam.js';
import CompanyTeam from './components/CompanyTeam.js';

export const YourPlanToTakePart = ({
	selectedPlan,
	joinExistingTeam,
	joinExistingTeamInput,
	setUpNewTeam,
	setUpNewTeamInput,
	companyTeamInput,
	createTeamPaymentCode,
	registrationFeesChecked,
	purchasesFeesChecked,
	registrationFees,
	purchasesFees,
	familyTeamMembers,
	addFamilyTeamMember,
	removeFamilyTeamMember,
	typeOfMyNewTeam,
	invoiceDetails,
	errors,
	touched,
	formikHandleOnChange,
	handleOnChange,
	handleNewTeamMemberOnChange,
	handleBlur
}) => {

	return (
		<div className="your-plan-to-take-part section">
			<h2 className="section--title">
				How are you planning to take part
			</h2>

			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="How are you planning to take part?"
					name="selectedPlan"
					value={selectedPlan}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
				>
					<FormControlLabel
						value="onMyOwn"
						control={<Radio />}
						label="On my own (you can join a team later if you wish)"
					/>

					<JoinExistingTeam
						joinExistingTeamInput={joinExistingTeamInput}
						selectedPlan={selectedPlan}
						formikHandleOnChange={formikHandleOnChange}
						handleOnChange={handleOnChange}
						touched={touched}
						errors={errors}
					/>

					<SetUpNewTeam
						setUpNewTeamInput={setUpNewTeamInput}
						selectedPlan={selectedPlan}
						typeOfMyNewTeam={typeOfMyNewTeam}
						familyTeamMembers={familyTeamMembers}
						touched={touched}
						errors={errors}
						formikHandleOnChange={formikHandleOnChange}
						handleOnChange={handleOnChange}
						handleNewTeamMemberOnChange={handleNewTeamMemberOnChange}
						addFamilyTeamMember={addFamilyTeamMember}
						removeFamilyTeamMember={removeFamilyTeamMember}
					/>

					<CompanyTeam 
						companyTeamInput={companyTeamInput}
						createTeamPaymentCode={createTeamPaymentCode}
						registrationFeesChecked={registrationFeesChecked}
						purchasesFeesChecked={purchasesFeesChecked}
						registrationFees={registrationFees}
						purchasesFees={purchasesFees}
						selectedPlan={selectedPlan}
						invoiceDetails={invoiceDetails}
						touched={touched}
						errors={errors}
						formikHandleOnChange={formikHandleOnChange}
						handleOnChange={handleOnChange}
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export default YourPlanToTakePart;
