import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ManualAddressForm = props => {

	const { selectOpen, setSelectOpen } = useState(false);

	return (
		<>
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Organization name (optional)"
					placeholder="Organization name (optional)"
					name="organization-name"
					value={props.organizationName}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Organization name (optional)"
					placeholder="Organization name (optional)"
					name="organization-name"
					value={props.organizationName}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Address 1"
					placeholder="Address 1"
					name="address1"
					value={props.address1}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{props.errors.address1 && props.touched.address1 && (
					<div className="error-message">{props.errors.address1}</div>
				)}
			</FormControl>
			
			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Address 2"
					placeholder="Address 2"
					name="address2"
					value={props.address2}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{props.errors.address2 && props.touched.address2 && (
					<div className="error-message">{props.errors.address2}</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<TextField
					type="text"
					label="Town/suburb"
					placeholder="Town/suburb"
					name="town"
					value={props.town}
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
					margin="normal"
					variant="outlined"
				/>
				{props.errors.town && props.touched.town && (
					<div className="error-message">{props.errors.town}</div>
				)}
			</FormControl>

			<FormControl fullWidth={true}>
				<InputLabel htmlFor="outlined-age-native-simple">
					State
				</InputLabel>
				<Select 
					id="state-select" 
					name="state" 
					open={selectOpen}
					onClose={() => setSelectOpen(false)}
					onOpen={() => setSelectOpen(true)}
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
				{props.errors.state && props.touched.state && (
					<div className="error-message">{props.errors.state}</div>
				)}
			</FormControl>

			<FormControl>
				<TextField
					type="number"
					label="Postcode"
					placeholder="Postcode"
					name="postcode"
					value={props.postcode}
					margin="normal"
					variant="outlined"
					onChange={props.handleOnChange}
					onBlur={props.handleBlur}
				/>
				{props.errors.postcode && props.touched.postcode && (
					<div className="error-message">{props.errors.postcode}</div>
				)}
			</FormControl>
		</>
	);
};

export default ManualAddressForm;
