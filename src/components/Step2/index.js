import React, { Component } from "react";
import * as styles from "./styles.scss";
import StepHeader from "../StepHeader";
import YourChallenge from "./components/YourChallenge";
import YourDetails from "./components/YourDetails";
import YourPlan from "./components/YourPlan";
import NextButton from "./components/NextButton";
import { Formik, Form, ErrorMessage } from "formik";
import validator from "validator";

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: '',
            dateOfBirth: '',
            gender: ''
        };

        this.dobPattern = new RegExp("^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$")

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
        const { challenge, dateOfBirth, gender } = this.state;

        return (
            <div id="step-2" className="step" styles={styles}>
                <div className="step-container">
                    <StepHeader>
                        <h1>YOUR RIDE!</h1>
                        <p>
                            Next we need to know how you're planning to take
                            part in the 2019 MSWA Ocean Ride.
                        </p>
                    </StepHeader>
                    <Formik
                        initialValues={{
                            challenge,
                            dateOfBirth,
                            gender
                        }}
                        validate={values => {
                            let errors = {};

                            // Sign up with email validation
                            if (!values.challenge) {
                                errors.challenge = "Please select a challenge.";
                            }

                            if (!values.dateOfBirth) {
                                errors.dateOfBirth =
                                    "Date of birth is required.";
                            // TODO: add logic checking if the date numbers are valid ie the day is not 35 or something
                            } else if (!this.dobPattern.test(values.dateOfBirth)) {
                                errors.dateOfBirth = "Please enter a valid date of birth."
                            } else if (challenge) {
                                const age = 2019 - values.dateOfBirth.split('/')[2];
                                const challenge = values.challenge;
                                if (age < 12) {
                                    if (challenge === '10km' || challenge === '30km') {
                                        errors.dateOfBirth = '* You must be 12 or over on 23 November 2019 to take part in this challenge'
                                    }
                                } else if (age < 16) {
                                    if (challenge === '70km') {
                                        errors.dateOfBirth = '* You must be 16 or over on 23 November 2019 to take part in this challenge'
                                    }
                                } else if (age < 18) {
                                    if (challenge === '100km' || challenge === '120km') {
                                        errors.dateOfBirth = '* You must be 18 or over on 23 November 2019 to take part in this challenge'
                                    }
                                }
                            }

                            if (!values.gender) {
                                errors.gender =
                                    "Gender is required.";
                            }

                            // if (!values.email) {
                            //     errors.email = 'Email is required.';
                            // } else if (
                            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            //         values.email
                            //     )
                            // ) {
                            //     errors.email = 'Invalid email address';
                            // }

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
                                className="flex column"
                            >
                                <YourChallenge
                                    challenge={values.challenge}
                                    errors={errors}
                                    touched={touched}
                                    handleOnChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <YourDetails
                                    dateOfBirth={values.dateOfBirth}
                                    gender={values.gender}
                                    errors={errors}
                                    touched={touched}
                                    handleOnChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <YourPlan
                                    plan={values.plan}
                                    errors={errors}
                                    touched={touched}
                                    handleOnChange={handleChange}
                                    handleBlur={handleBlur}
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
