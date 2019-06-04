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

const CompanyTeam = ({
	companyTeamInput,
	setTeamPaymentCode,
	formikHandleOnChange,
	handleOnChange,
	selectedPlan,
	handleBlur,
	touched,
	errors
}) => {
	return (
		<>
			<FormControl fullWidth={true}>
				<FormControlLabel
					value="companyTeam"
					control={<Radio />}
					label="a company team"
				/>

				{selectedPlan === "companyTeam" && (
					<>
						<TextField
							type="search"
							label="Company name"
							placeholder="Company name"
							name="companyTeamInput"
							value={companyTeamInput}
							onChange={event => {
								formikHandleOnChange(event);
								handleOnChange(event);
							}}
							onBlur={handleBlur}
							variant="outlined"
						/>

						{/* TODO: Touched for radio buttons with Formik using state.plan[planName]
						https://github.com/jaredpalmer/formik/issues/1051
					*/}
						{!companyTeamInput.trim() &&
							touched.companyTeamInput && (
								<div className="error-message">
									{errors.companyTeamInput}
								</div>
							)}

						<p className="team-payment-code">
							<span>Team Payment Code</span> - would you like to
							set up a team payment code that colleagues who want
							to join your team can use to collate their
							registration fees? Your company will then be
							invoiced for all registration fees instead.
						</p>
						<FormControlLabel
							control={
								<Checkbox
									checked={setTeamPaymentCode}
									name="setTeamPaymentCode"
									onChange={formikHandleOnChange}
									value="setTeamPaymentCode"
								/>
							}
							label="Yes, I'd like to create a team payment code"
						/>
					</>
				)}
			</FormControl>
		</>
	);
};

export default CompanyTeam;
