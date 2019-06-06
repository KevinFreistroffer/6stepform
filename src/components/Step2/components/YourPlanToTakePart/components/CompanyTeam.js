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
import PaymentCodeForm from "./PaymentCodeForm";

const CompanyTeam = ({
	companyTeamInput,
	createTeamPaymentCode,
	registrationFeesChecked,
	purchasesFeesChecked,
	registrationFees,
	purchasesFees,
	invoiceDetails,
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
					label="A company team"
				/>
			</FormControl>

			{selectedPlan === "companyTeam" && (
				<>
					<FormControl fullWidth={true}>
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

						{!companyTeamInput.trim() && touched.companyTeamInput && (
							<div className="error-message">
								{errors.companyTeamInput}
							</div>
						)}
					</FormControl>


					<p className="team-payment-code">
						<span>Team Payment Code</span> - would you like to set
						up a team payment code that colleagues who want to join
						your team; can use to collate their registration fees?
						Your company will then be invoiced for all registration
						fees instead.
					</p>

					<FormControl fullWidth={true}>
						<FormControlLabel
							control={
								<Checkbox
									checked={createTeamPaymentCode}
									name="createTeamPaymentCode"
									onChange={event => {
										handleOnChange(event);
										formikHandleOnChange(event);
									}}
									value={createTeamPaymentCode}
								/>
							}
							label="Yes, I'd like to create a team payment code"
						/>
					</FormControl>

					{createTeamPaymentCode && 
				     <PaymentCodeForm 
						registrationFeesChecked={registrationFeesChecked} 
						invoiceDetails={invoiceDetails} 
						purchasesChecked={purchasesFeesChecked} 
						registrationFees={registrationFees} 
						purchasesFees={purchasesFees} 
						formikHandleOnChange={formikHandleOnChange}
						handleOnChange={handleOnChange}
						handleBlur={handleBlur}
						errors={errors}
						touched={touched}
					 />
					}
				</>
			)}
		</>
	);
};

export default CompanyTeam;
