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
import { getIn } from "formik";

const InvoiceDetailsForm = ({
	invoiceDetails,
	handleOnChange,
	handleBlur,
	formikHandleOnChange,
	errors,
	touched
}) => {

	return (
		<div className="company-invoice-details">
			<p>Please provide your company's invoicing details</p>
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="contact"
					placeholder="Account/contact person"
					name="invoiceDetails.contact"
					value={invoiceDetails.contact}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>
			{errors.invoiceDetailsContact && touched.invoiceDetails && touched.invoiceDetails.contact && (
				<div className="error-message">
					{errors.invoiceDetailsContact}
				</div>
			)}

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Email"
					placeholder="Email"
					name="invoiceDetails.email"
					value={invoiceDetails.email}
					onChange={event => {
						console.log(`invoiceDetails onChange`, event);
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{errors.invoiceDetailsEmail && touched.invoiceDetails && touched.invoiceDetails.email && (
					<div className="error-message">
						{errors.invoiceDetailsEmail}
					</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="abn"
					placeholder="ABN"
					name="invoiceDetails.abn"
					value={invoiceDetails.abn}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{errors.invoiceDetailsAbn && touched.invoiceDetails && touched.invoiceDetails.abn && (
					<div className="error-message">
						{errors.invoiceDetailsAbn}
					</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Start typing an address"
					placeholder="Start typing an address"
					name="invoiceDetails.autoFindAddress"
					value={invoiceDetails.autoFindAddress}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{errors.invoiceDetailsAutoFindAddress && touched.invoiceDetails &&
					touched.invoiceDetails.autoFindAddress && (
						<div className="error-message">
							{errors.invoiceDetailsAutoFindAddress}
						</div>
					)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Address1"
					placeholder="Address1"
					name="invoiceDetails.address1"
					value={invoiceDetails.address1}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{errors.invoiceDetailsAddress1 && touched.invoiceDetails &&
					touched.invoiceDetails.address1 && (
						<div className="error-message">
							{errors.invoiceDetailsAddress1}
						</div>
					)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Address2"
					placeholder="Address2"
					name="invoiceDetails.address2"
					value={invoiceDetails.address2}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{errors.invoiceDetailsAddress2 && touched.invoiceDetails &&
					touched.invoiceDetails.address2 && (
						<div className="error-message">
							{errors.invoiceDetailsAddress2}
						</div>
					)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Suburb/city"
					placeholder="Suburb/city"
					name="invoiceDetails.city"
					value={invoiceDetails.city}
					onChange={event => {
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
					onBlur={handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{errors.invoiceDetailsCity && touched.invoiceDetails && touched.invoiceDetails.city && (
					<div className="error-message">
						{errors.invoiceDetailsCity}
					</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<InputLabel htmlFor="invoice-state-select">State</InputLabel>
				<Select
					id="invoice-state-select"
					name="invoiceDetails.state"
					value={invoiceDetails.state}
					onChange={event => {
						console.log(
							`select onChange`,
							event.target.name,
							event.target.value
						);
						handleOnChange(event);
						formikHandleOnChange(event);
					}}
				>
					<MenuItem value=""></MenuItem>
					<MenuItem value="new-south-wales">New South Wales</MenuItem>
					<MenuItem value="northern-territory">
						Northern Territory
					</MenuItem>
					<MenuItem value="queensland">Queensland</MenuItem>
					<MenuItem value="south-austrailia">
						South Australia
					</MenuItem>
					<MenuItem value="tasmania">Tasmania</MenuItem>
					<MenuItem value="victoria">Victoria</MenuItem>
				</Select>
				{errors.invoiceDetailsState && touched.invoiceDetails && touched.invoiceDetails.state && (
					<div className="error-message">
						{errors.invoiceDetailsState}
					</div>
				)}
			</FormControl>

			<p>
				Your team payment code will be sent to you by email once you've
				successfully registered.
			</p>
		</div>
	);
};

export default InvoiceDetailsForm;
