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
	registrationFees,
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
								checked={registrationFees}
								name="registrationFees"
								onChange={event => {
									handleOnChange(event);
									formikHandleOnChange(event);
								}}
								value={registrationFees}
							/>
						}
						label="Registration fees"
					/>
				</FormControl>
				<p>Limit to:</p>
        </div>	
    );
};

export default PaymentCodeForm;
