import React, { Component } from 'react';
import * as styles from './styles.scss';
import StepHeader from '../StepHeader.js';
import SignUpWithEmail from './components/SignUpWithEmail';
import YourAddress from './components/YourAddress/index';
import Password from './components/Password';
import ErrorMessages from './components/ErrorMessages';
import CompleteStepControls from '../CompleteStepControls';
import { Formik, Form, ErrorMessage } from 'formik';
import validator from 'validator';
import Button from '@material-ui/core/Button';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            errors: {},
            autoFindAddress: '',
            address1: '',
            address2: '',
            organizationName: '',
            town: '',
            state: '',
            postcode: '',
            password: '',
            manualAddressIsVisible: false
        };
    }

    toggleManualAddressIsVisible = (inputName = '') => {
        this.setState({ 
            manualAddressIsVisible: !this.state.manualAddressIsVisible 
        });
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        this.props.nextStep();
    };
 
    handleOnChange = event => {
        console.log(`handleOnChange`, event.target.name, event.target.value);
        event.persist();

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const { firstName, lastName, email, tel } = this.state;
        const errors = this.validate(firstName, lastName, email, tel);

        if (Object.keys(errors).length === 0) {
            console.log(`no errors`);
            //this.nextStep();
        } else {
            // This originally was at the end of validate();
            this.setState({
                step1: { ...this.state.step1, errors }
            });
        }
        event.stopPropagation();
    };



    render() {
        const {
            manualAddressIsVisible,
            firstName,
            lastName,
            email,
            tel,
            autoFindAddress,
            organizationName,
            address1,
            address2,
            town,
            state,
            postcode,
            password
        } = this.state;

        return (
            <div id='step-1' className='step' styles={styles}>
                <div className='step-container'>
                    <StepHeader>
                        <h1>JOIN US!</h1>
                        <p className="text">Thank you for choosing to be part of the 2019 MSWA Ocean Ride – Powered by RetraVision! By getting involved, you’ll be helping to support the thousands of people living with MS and all neurological conditions in Western Australia.
                        </p>
                        <p className="text">The first step is easy! Just fill in your details below to reserve your place in this year's challenge!</p>
                        <Button variant="contained"  type="button" className="facebook">SIGN UP WITH FACEBOOK</Button>
                    </StepHeader>
                    <Formik
                        initialValues={{
                            firstName,
                            lastName,
                            email,
                            tel,
                            autoFindAddress,
                            organizationName,
                            address1,
                            address2,
                            town,
                            state,
                            postcode,
                            password
                        }}
                        validate={values => {
                            let errors = {};

                            // Sign up with email validation
                            if (!values.firstName) {
                                errors.firstName = 'First name is required.';
                            }

                            if (!values.lastName) {
                                errors.lastName = 'Last name is required.';
                            }

                            if (!values.email) {
                                errors.email = 'Email is required.';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.tel) {
                                errors.tel = 'Phone number is required.';
                            } else if (
                                !validator.isMobilePhone(values.tel, ['en-AU'], { strictMode: true})
                            ) {
                                errors.tel = 'Invalid telephone number';
                            }

                            // Your address validation
                            if (!manualAddressIsVisible) {
                                if (!values.autoFindAddress) {
                                    errors.autoFindAddress = 'Address is required';
                                }
                            } else {
                                if (!values.address1) {
                                    errors.address1 = 'Address is required.';
                                }

                                if (!values.town) {
                                    errors.town = 'Town/suburb is required.';
                                }

                                if (!values.state) {
                                    errors.state = 'State is required.';
                                }

                                if (!values.postcode) {
                                    errors.postcode = 'Postcode is required.';
                                }
                            }

                            if (!values.password) {
                                errors.password = 'Password is required.';
                            } else if (values.password.length < 6) {
                                errors.password = "Password must be at least 6 characters in length."
                            }

                            return errors;
                        }}
                        handleBlur={() => {
                            console.log(`handleBlur`);
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // Form is valid
                            this.handleNextStep();
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            dirty,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                            /* and other goodies */
                        }) => (
                            <form
                                onSubmit={handleSubmit}
                                className='flex column'
                            >
                                <SignUpWithEmail
                                    firstName={values.firstName}
                                    lastName={values.lastName}
                                    email={values.email}
                                    tel={values.tel}
                                    handleOnChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    dirty={dirty}
                                    errors={errors}
                                />
                                <YourAddress
                                    manualAddressIsVisible={manualAddressIsVisible}
                                    autoFindAddress={values.autoFindAddress}
                                    organizationName={values.organizationName}
                                    address1={values.address1}
                                    address2={values.address2}
                                    town={values.town}
                                    state={values.state}
                                    postcode={values.postcode}
                                    handleOnChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    dirty={dirty}
                                    errors={errors}
                                    toggleManualAddressIsVisible={this.toggleManualAddressIsVisible}
                                />
                                <Password 
                                    password={values.password}
                                    handleOnChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    dirty={dirty}
                                    errors={errors} 
                                />
                                <CompleteStepControls>
                                    <>
                                        <p>Please note that the data you share as part of this registration process will be managed in accordance with MSWA's <a href="#" target="_blank">Privacy policy</a></p>
                                        <Button variant="contained" type="submit" onClick={() => {
                                            this.props.nextStep(); 
                                        }}>Next</Button> 
                                    </>
                                </CompleteStepControls>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Step1;
