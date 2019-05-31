import React from 'react';
import {Formik} from 'formik';

export const YourAdd = props => {
	return(
		<div className="sign-up-with-email section"> 
			<h2 className="section--title">Or sign up with your email address</h2>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					telephone: ''
				}}
				validate={values => {
					let errors = {};
					if (!values.firstName) {
						errors.firstName = 'Required';
					}

					if (!values.lastName) {
						errors.firstName = 'Required';
					}

					if (!values.email) {
						errors.firstName = 'Required';
					} else if (
          				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        			) {
        				error.email = 'Invalid email address';
        			}

					if (!values.telephone) {
						errors.firstName = 'Required';
					}
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<form className="flex column" >
					<input type="text" 
					       placeholder="First Name" 
					       name="first-name-input" 
					       onChange={event => console.log(event)} />
					<input type="text" placeholder="Last Name" name="last-name" onChange={event => console.log(event)} />
					<input type="email" placeholder="Email" name="email" onChange={event => console.log(event)} />
					<div className="tel-input-container"> 
						<label htmlFor="tel-input">
							<span class="tel-input-image">temp</span>
							<input id="tel-input" type="tel" placeholder="+61" name="tel" onChange={event => console.log(event)} />
						</label>
					</div>
				</form>
			</Formik>
		</div>
	);
};


export default SignUpWithEmail;