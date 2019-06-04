import React, { Component } from "react";
import * as styles from "./styles.scss";
import StepHeader from "../StepHeader";
import YourChallenge from "./components/YourChallenge";
import YourDetails from "./components/YourDetails";
import YourPlanToTakePart from "./components/YourPlanToTakePart";
import NextButton from "./components/NextButton";
import { Formik, Form, ErrorMessage } from "formik";
import validator from "validator";
import { DOB_REGEX } from "../../constants";

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: "",
            dateOfBirth: "",
            firstName: "",
            lastName: "",
            gender: "",
            selectedPlan: "onMyOwn",
            joinExistingTeam: "",
            joinExistingTeamInput: "",
            setUpNewTeam: "",
            setUpNewTeamInput: "",
            newTeamMemberDateOfBirth: "",
            newTeamMemberMedicalConditions: "",
            myNewTeam: "friendsFamily",
            newTeamFormIsVisible: false,
            newFamilyTeamMembers: []            ]
        };

        this.dobPattern = new RegExp(DOB_REGEX);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.myNewTeam === 'family' && this.state.myNewTeam === 'friendsFamily') {
            this.setState({ newTeamFormIsVisible: false });
        }
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        // this.props.nextStep();
    };

    handleOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        event.persist();

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        //const errors = this.validate(this.state);
    };

    toggleNewTeamFormIsVisible = (newTeamFormIsVisible) => {
        this.setState({ newTeamFormIsVisible });
    }

    render() {
        const {
            challenge,
            dateOfBirth,
            newTeamMemberFirstName,
            newTeamMemberLastName,
            newTeamMemberDateOfBirth,
            newTeamMemberMedicalConditions,
            newTeamMemberGender,
            gender,
            selectedPlan,
            joinExistingTeam,
            joinExistingTeamInput,
            setUpNewTeam,
            setUpNewTeamInput,
            myNewTeam,
            newTeamFormIsVisible,
            toggleNewTeamFormIsVisible
        } = this.state;

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
                            newTeamMemberDateOfBirth,
                            newTeamMemberFirstName,
                            newTeamMemberLastName,
                            newTeamMemberMedicalConditions,
                            newTeamMemberGender,
                            gender,
                            selectedPlan,
                            joinExistingTeam,
                            joinExistingTeamInput,
                            setUpNewTeam,
                            setUpNewTeamInput,
                            myNewTeam
                        }}
                        validate={values => {
                            let errors = {};

                            if (!values.challenge)
                                errors.challenge = "Please select a challenge.";

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

                            if (values.selectedPlan === "joinExistingTeam") {
                                if (!values.joinExistingTeamInput.trim()) {
                                    errors.joinExistingTeamInput =
                                        "This field is required for your chosen selection.";
                                }
                            }

                            if (values.selectedPlan === "setUpNewTeam") {
                                if (!values.setUpNewTeamInput.trim()) {
                                    errors.setUpNewTeamInput =
                                        "This field is required for your chosen selection.";
                                }
                            }

                            if (!values.newTeamMemberDateOfBirth) {
                                errors.newTeamMemberDateOfBirth =
                                    "Date of birth is required.";
                                // TODO: add logic checking if the date numbers are valid ie the day is not 35 or something
                            } else if (
                                !this.dobPattern.test(
                                    values.newTeamMemberDateOfBirth
                                )
                            ) {
                                errors.newTeamMemberDateOfBirth =
                                    "Please enter a valid date of birth.";
                            }

                            return errors;
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
                                    <YourPlanToTakePart
                                        selectedPlan={this.state.selectedPlan}
                                        myNewTeam={this.state.myNewTeam}
                                        joinExistingTeam={
                                            values.joinExistingTeam
                                        }
                                        joinExistingTeamInput={
                                            values.joinExistingTeamInput
                                        }
                                        setUpNewTeam={values.setUpNewTeam}
                                        setUpNewTeamInput={
                                            values.setUpNewTeamInput
                                        }
                                        firstName={
                                            values.newTeamMemberFirstName
                                        }
                                        lastName={values.newTeamMemberLastName}
                                        dateOfBirth={
                                            values.newTeamMemberDateOfBirth
                                        }
                                        gender={values.newTeamMemberGender}
                                        medicalConditions={
                                            values.newTeamMemberMedicalConditions
                                        }
                                        errors={errors}
                                        touched={touched}
                                        newTeamFormIsVisible={newTeamFormIsVisible}
                                        toggleNewTeamFormIsVisible={this.toggleNewTeamFormIsVisible}
                                        formikHandleOnChange={handleChange}
                                        handleOnChange={this.handleOnChange}
                                        handleBlur={handleBlur}
                                    />
                                    <NextButton />
                                </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Step2;
