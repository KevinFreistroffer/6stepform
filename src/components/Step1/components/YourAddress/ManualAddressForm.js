import React from "react";

const ManualAddressForm = props => {
	return (
		<>
			<input
				type="text"
				placeholder="Organization name (optional)"
				name="organization-name"
				value={props.organizationName}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			<input
				type="text"
				placeholder="Address 1"
				name="address1"
				value={props.address1}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.address1 && props.touched.address1 && (
				<div className="error-message">{props.errors.address1}</div>
			)}
			<input
				type="text"
				placeholder="Address 2 (optional)"
				name="address2"
				value={props.address2}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			<input
				type="text"
				placeholder="Town/suburb"
				name="town"
				value={props.town}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.town && props.touched.town && (
				<div className="error-message">{props.errors.town}</div>
			)}
			<select id="state-select" name="state" onChange={props.handleOnChange}>
				<option value="new-south-wales">New South Wales</option>
				<option value="northern-territory">Northern Territory</option>
				<option value="queensland">Queensland</option>
				<option value="south-austrailia">South Australia</option>
				<option value="tasmania">Tasmania</option>
				<option value="victoria">Victoria</option>
			</select>
			{props.errors.state && props.touched.state && (
				<div className="error-message">{props.errors.state}</div>
			)}
			<input
				type="number"
				placeholder="Postcode"
				name="postcode"
				value={props.postcode}
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			{props.errors.postcode && props.touched.postcode && (
				<div className="error-message">{props.errors.postcode}</div>
			)}
		</>
	);
};

export default ManualAddressForm;
