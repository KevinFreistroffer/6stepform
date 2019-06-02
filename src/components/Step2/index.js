import React, { Component } from "react";
import * as styles from "./styles.scss";
import StepHeader from "../StepHeader";
import YourChallenge from "./components/YourChallenge";
import YourDetails from "./components/YourDetails";
import NextButton from "./components/NextButton";
import { Formik, Form, ErrorMessage } from "formik";
import validator from "validator";

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: "",
            dateOfBirth: ""
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
        const { challenge, dateOfBirth } = this.state;

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
                            dateOfBirth
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
