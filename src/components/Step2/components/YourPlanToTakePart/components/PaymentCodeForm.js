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

const PaymentCodeForm = ({
	registrationFeesChecked,
	purchasesChecked,
	registrationFees,
	purchasesFees,
	formikHandleOnChange,
	handleOnChange,
	handleBlur,
	errors,
	touched
}) => {
    return (
        <div className="payment-code-form">
        	<p>What would you like the team payment code to include?</p>
			<FormControl fullWidth={true}>
				<FormControlLabel
					control={
						<Checkbox
							checked={registrationFeesChecked}
							name="registration-fees-checkbox"
							onChange={event => {
								handleOnChange(event);
								formikHandleOnChange(event);
							}}
							value={registrationFeesChecked}
						/>
					}
					label="Registration fees"
				/>
			</FormControl>
			<p>Limit to:</p>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="Overall amount"
					name="registration-fees-select"
					value={registrationFees.limitTo}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event); 
					}}
				>
					<FormControlLabel
						value="overallAmount"
						control={<Radio />}
						label="Overall amount"
					/>
					
					<FormControl>
						<input type="text" name="registration-overall-amount" placeholder="Overall amount" onChange={handleOnChange}/>
						<div>Required</div>
					</FormControl>
					
					<FormControlLabel
						value="	"
						control={<Radio />}
						label="No. of registrations"
					/>

					<FormControl>
						<input type="text" name="num-of-registrations" placeholder="Overall amount" onChange={handleOnChange}/>
						<div>Required</div>
					</FormControl>
				</RadioGroup>
			</FormControl>

			<FormControl fullWidth={true}>
				<FormControlLabel
					control={
						<Checkbox
							checked={purchasesChecked}
							name="purchases-fees-checkbox"
							onChange={event => {
								handleOnChange(event);
								formikHandleOnChange(event);
							}}
							value={purchasesChecked}
						/>
					}
					label="Purchases"
				/>
			</FormControl>
			<p>Limit to:</p>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="Overall amount"
					name="purchases-select"
					value={purchasesFees.limitTo}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event); 
					}}
				>
					<FormControlLabel
						value="overallAmount"
						control={<Radio />}
						label="Overall amount"
					/>

					<FormControl>
						<input type="text" placeholder="Overall amount" />
						<div>Required</div>
					</FormControl>

					<FormControlLabel
						value="perPerson"
						control={<Radio />}
						label="No. of registrations"
					/>

					<FormControl>
						<input type="text" placeholder="Overall amount" />
						<div>Required</div>
					</FormControl>
				</RadioGroup>
			</FormControl>
        </div>	
    );
};

export default PaymentCodeForm;
