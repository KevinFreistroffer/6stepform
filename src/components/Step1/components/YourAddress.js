import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";

export const YourAddress = props => {
	useEffect(() => {
		console.log(props);
	});

	const [manualAddressIsVisible, setManualAddressIsVisible] = useState(false);

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
				onChange={props.handleOnChange}
				onBlur={props.handleBlur}
			/>
			<h3
				onClick={() => {
					setManualAddressIsVisible(!manualAddressIsVisible);
				}}
			>
				Or enter your address manually
			</h3>
			{manualAddressIsVisible && (
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
						type="texts"
						placeholder="Address 1"
						name="address1"
						value={props.address1}
						onChange={props.handleOnChange}
						onBlur={props.handleBlur}
					/>
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
					<select>
						<option value="State">State</option>
					</select>
					<input
						type="number"
						placeholder="Postcode"
						name="postcode"
						value={props.postcode}
						onChange={props.handleOnChange}
						onBlur={props.handleBlur}
					/>
				</>
			)}
		</div>
	);
};

export default YourAddress;
