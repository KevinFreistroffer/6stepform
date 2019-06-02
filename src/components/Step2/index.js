import React, { Component } from 'react';
import Intro from './components/Intro.js';
import * as styles from './styles.scss';
import YourChallenge from './components/YourChallenge';
import NextButton from './components/NextButton';
import { Formik, Form, ErrorMessage } from 'formik';
import validator from 'validator';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: '',
        };
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        // this.props.nextStep();
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

        // if (Object.keys(errors).length === 0) {
        //     console.log(`no errors`);
        //     //this.nextStep();
        // } else {
        //     // This originally was at the end of validate();
        //     this.setState({
        //         step1: { ...this.state.step1, errors }
        //     });
        // }
        // event.stopPropagation();
    };



    render() {
        const {
            challenge
        } = this.state;

        return (
            <div id='step-1' className='step' styles={styles}>
                <div className='step-container'>
                Step2
                    <Intro />
                    <Formik
                        initialValues={{
                            challenge
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
                            this.nextStep();
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
                                <YourChallenge 
                                    challenge={values.challenge}
                                />
                                <NextButton />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Step2;
