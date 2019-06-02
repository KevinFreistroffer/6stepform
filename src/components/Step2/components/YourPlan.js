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

export const YourPlan = props => {
	return (
		<div className="your-plan section">
			<h2 className="section--title">
				How are you planning to take part
			</h2>
			<FormControl component="fieldset" fullWidth={true}>
				<RadioGroup
					aria-label="How are you planning to take part?"
					name="plan"
					value={props.plan.selectedPlan}
					onChange={props.handleOnChange}
				>
					<FormControlLabel
						value="onMyOwn"
						control={<Radio />}
						label="On my own (you can join a team later if you wish)"
					/>

					<FormControl fullWidth={true}>
						<FormControlLabel
							value="joinExistingTeam"
							control={<Radio />}
							label="I want to join an existing team"
						/>
						{props.plan.selectedPlan === "joinExistingTeam" && (
							<TextField
								type="search"
								label="Find your team"
								placeholder="Find your team"
								name="find-your-team"
								value="findYourTeam"
								onChange={props.handleOnChange}
								onBlur={props.handleBlur}
								variant="outlined"
								InputProps={{
									endAdornment: (
										<InputAdornment>
											<IconButton
												edge="end"
												size="medium"
												aria-label="Find your team"
											>
												<SearchIcon />
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						)}
						{
							// TODO delete or implement something like this
							//      to handle searching for a team
							// onChange = term => {
							// 	axios.get(`/myAPI?search=${term)`)
							// 		.then(results => {
							// 			if (results.response === 200) {
							// 				if (results.teamIsAlreadyCreated) {
							// 					showTeamAlreadyExistsMessage();
							// 				} else {
							// 				}
							// 			}
							// 		});
							// }
						}
					</FormControl>

					<FormControl fullWidth={true}>
						<FormControlLabel
							value="set-up-new-team"
							control={<Radio />}
							label="I want to setup a new team"
						/>
						{props.plan.selectedPlan === "setUpNewTeam" && (
							<TextField
								type="text"
								label="Set up a new team"
								placeholder="Set up a new team"
								name="set-up-new-team"
								value={"props.setUpNewTeam"}
								onChange={props.handleOnChange}
								onBlur={props.handleBlur}
								variant="outlined"
								InputProps={{
									endAdornment: (
										<InputAdornment>
											<IconButton
												edge="end"
												size="medium"
												aria-label="Set up new team"
											>
												Check
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						)}
					</FormControl>
				</RadioGroup>
				{props.errors.gender && props.touched.gender && (
					<div className="error-message">{props.errors.gender}</div>
				)}
			</FormControl>
		</div>
	);
};

export default YourPlan;
