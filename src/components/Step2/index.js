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
            challenge: "",
            dateOfBirth: "",
            gender: "",
            plan: {
                selectedPlan: "onMyOwn",
                joinExistingTeam: {
                    searchTerm: "",
                    team: ""
                },
                setUpNewTeam: {
                    searchTerm: "",
                    team: ""
                }
            }
        };

        this.dobPattern = new RegExp(
            "^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)+[0-9]{2})*$"
        );
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        // this.props.nextStep();
    };

    handleOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);

        event.persist();

        if (event.target.name === "plan") {
            this.setState(
                prevState => {
                    return {
                        plan: { ...this.state.plan, selectedPlan: value }
                    };
                },
                () => console.log("plan after setting state", this.state)
            );
        } else {
            this.setState(
                {
                    [name]: value
                },
                () => console.log(this.state.plan)
            );
        }
    };

    handleSubmit = event => {
        const { challenge, dateOfBirth, gender, plan } = this.state;
        const errors = this.validate(challenge, dateOfBirth, gender, plan);
    };

    render() {
        const { challenge, dateOfBirth, gender, plan } = this.state;

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
                            gender,
                            plan
                        }}
                        validate={values => {
                            console.log(values);
                            let errors = {};

                            // Sign up with email validation
                            if (!values.challenge) {
                                errors.challenge = "Please select a challenge.";
                            }

                            if (!values.dateOfBirth) {
                                errors.dateOfBirth =
                                    "Date of birth is required.";
                                // TODO: add logic checking if the date numbers are valid ie the day is not 35 or something
                            } else if (
                                !this.dobPattern.test(values.dateOfBirth)
                            ) {
                                errors.dateOfBirth =
                                    "Please enter a valid date of birth.";
                            } else if (challenge) {
                                const age =
                                    2019 - values.dateOfBirth.split("/")[2];
                                const challenge = values.challenge;
                                if (age < 12) {
                                    if (
                                        challenge === "10km" ||
                                        challenge === "30km"
                                    ) {
                                        errors.dateOfBirth =
                                            "* You must be 12 or over on 23 November 2019 to take part in this challenge";
                                    }
                                } else if (age < 16) {
                                    if (challenge === "70km") {
                                        errors.dateOfBirth =
                                            "* You must be 16 or over on 23 November 2019 to take part in this challenge";
                                    }
                                } else if (age < 18) {
                                    if (
                                        challenge === "100km" ||
                                        challenge === "120km"
                                    ) {
                                        errors.dateOfBirth =
                                            "* You must be 18 or over on 23 November 2019 to take part in this challenge";
                                    }
                                }
                            }

                            if (!values.gender) {
                                errors.gender = "Gender is required.";
                            }

                            if (values.plan.selectedPlan == 'joinExistingTeam') {
                                if (!values.plan.joinExistingTeam.searchTerm) {
                                    errors.joinExistingTeam = 'This field is required for your chosen selection.'
                                } 
                            }

                            if (values.plan.selectedPlan == 'setUpNewTeam') {
                                if (!values.plan.setUpNewTeam.searchTerm) {
                                    errors.setUpNewTeam = 'This field is required for your chosen selection.'
                                } 
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
                        }) => {
                            console.log(values);
                            return (
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
                                    plan={this.state.plan}
                                    errors={errors}
                                    touched={touched}
                                    handleOnChange={event => {
                                        handleChange(event);
                                        this.handleOnChange(event);
                                    }}
                                    handleBlur={handleBlur}
                                />
                                <NextButton />
                            </form>
                        )
                        }}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Step2;
