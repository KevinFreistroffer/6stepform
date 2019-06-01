import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import ManualAddressForm from "./ManualAddressForm";

export const YourAddress = props => {
	useEffect(() => {
		console.log(props);
	});

	return (
		<div className="your-address section">
			<h2 className="section--title">Your Address</h2>
			<p>
				We need your address so we can send you your exclusive 2019 MSWA
				Ocean Ride fundraising rewards.
			</p>
			<input
				type="text"
				placeholder="Start typing your address"
				name="autoFindAddress"
				value={props.autoFindAddress}
				onChange={event => {
					props.toggleManualAddressIsVisible(event.target.name);
					props.handleOnChange(event);
				}}
				onBlur={props.handleBlur}
			/>
			{props.errors.autoFindAddress && props.touched.autoFindAddress && (
				<div className="error-message">
					{props.errors.autoFindAddress}
				</div>
			)}
			<h3 onClick={props.toggleManualAddressIsVisible}>
				Or enter your address manually
			</h3>
			{props.manualAddressIsVisible && (
				<ManualAddressForm
					manualAddressIsVisible={props.manualAddressIsVisible}
					address1={props.address1}
					address2={props.address2}
					town={props.town}
					state={props.state}
					postcode={props.postcode}
					touched={props.touched}
					dirty={props.dirty}
					errors={props.errors}
					handleOnChange={props.handleOnChange}
					onBlur={props.onBlur}
				/>
			)}
		</div>
	);
};

export default YourAddress;
