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


const InvoiceDetailsForm = (props) => {
    return (
    	<div className="company-invoice-details">
    		<p>Please provide your company's invoicing details</p>
    		<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="contact"
					placeholder="Account/contact person"
					name="invoice-contactPerson"
					value={"invoice.contact"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="email"
					label="email"
					placeholder="Email"
					name="invoice-email"
					value={"invoice.email"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="abn"
					placeholder="ABN"
					name="invoice-abn"
					value={"invoice.abn"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>
			
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Start typing an address"
					placeholder="Start typing an address"
					name="invoice-auto-find-address"
					value={"invoice.autoFindAddress"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>
			
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Address1"
					placeholder="Address1"
					name="invoice-address-1"
					value={"invoice.address1"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Address2"
					placeholder="Address2"
					name="invoice-address-2"
					value={"invoice.address2"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>


			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Suburb/city"
					placeholder="Suburb/city"
					name="invoice-city"
					value={"invoice.city"}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<InputLabel htmlFor="invoice-state-select">
					State
				</InputLabel>
				<Select 
					id="invoice-state-select" 
					name="invoice-state" 
					onChange={props.handleOnChange}
					input={
	            		<OutlinedInput name="state" />
	          		}
				>

					<MenuItem value="" />
					<MenuItem value="new-south-wales">New South Wales</MenuItem>
					<MenuItem value="northern-territory">Northern Territory</MenuItem>
					<MenuItem value="queensland">Queensland</MenuItem>
					<MenuItem value="south-austrailia">South Australia</MenuItem>
					<MenuItem value="tasmania">Tasmania</MenuItem>
					<MenuItem value="victoria">Victoria</MenuItem>
				</Select>
			</FormControl>			
    	</div>	   
    );
};

export default InvoiceDetailsForm;
