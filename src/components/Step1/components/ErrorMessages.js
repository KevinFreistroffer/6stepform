import React from "react";

const ErrorMessages = ({ errors, touched }) => {
	return (
		<div className="error-messages">
			{errors.firstName && touched.firstName && (
				<div>{errors.firstName}</div>
			)}
			{errors.lastName && touched.lastName && (
				<div>{errors.lastName}</div>
			)}
			{errors.email && touched.email && <div>{errors.email}</div>}
			{errors.tel && touched.tel && <div>{errors.tel}</div>}
			{errors.autoFindAddress && touched.autoFindAddress && (
				<div>{errors.autoFindAddress}</div>
			)}
			{errors.address1 && touched.address1 && (
				<div>{errors.address1}</div>
			)}
			{errors.town && touched.town && <div>{errors.town}</div>}
			{errors.state && touched.state && <div>{errors.state}</div>}
			{errors.postcode && touched.postcode && (
				<div>{errors.postcode}</div>
			)}
		</div>
	);
};

export default ErrorMessages;
