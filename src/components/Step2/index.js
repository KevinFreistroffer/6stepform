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
            companyTeamInput: "",
            typeOfMyNewTeam: "friendsFamily",
            familyTeamMembers: [],
            createTeamPaymentCode: false,
            registrationFeesChecked: false,
            purchasesFeesChecked: false,
            registrationFees: {
                limitTo:'',
                overallAmount: 0,
                numOfRegistrations: 0
            },
            purchasesFees: {
                limitTo: '',
                overallAmount: 0,
                perPerson: 0
            },
            invoiceDetails: {
                contactPerson: '',
                email: '',
                ABN: '',
                address: '',
                address1: '',
                address2: '',
                city: '',
                zip: '',
                state: ''
            }
        };

        this.dobPattern = new RegExp(DOB_REGEX);
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        // this.props.nextStep();
    };

    handleOnChange = (event, familyTeamMemberIndex = undefined) => {
        let name = event.target.name;
        const value = event.target.value;

        name = name === "myNewTeam" ? "typeOfMyNewTeam" : name;

        event.persist();

        // names are different case because the ease to change state given the complication
        // of  of the form.
        // should be all similiar at some point.
        switch(name) {
            case 'create-team-payment-code':
                this.setState({
                    createTeamPaymentCode: !this.state.createTeamPaymentCode
                });
                break;
            case 'registration-fees-checkbox':
                this.setState({
                    registrationFeesChecked: !this.state.registrationFeesChecked
                });
                break;
            case 'purchases-fees-checkbox':
                this.setState({
                    purchasesFeesChecked: !this.state.purchasesFeesChecked
                });
                break;
            case 'registration-fees-select':
                // this.state.registrationFees.limitTo = value;
                this.setState({
                    registrationFees: { ...this.state.registrationFees, limitTo: value }
                }, () => console.log(this.state.registrationFees));
                break;
            case 'purchases-select':
                this.setState({
                    purchasesFees: { ...this.state.purchasesFees, limitTo: value }
                }, () => console.log(this.state.purchasesFees));
                break;
            case 'registration-overall-amount':
                this.setState({
                    registrationFees: { ...this.state.registrationFees, overallAmount: value }
                }, () => console.log(this.state.registrationFees));
                break;
            case 'num-of-registrations':
                this.setState({
                    registrationFees: { ...this.state.registrationFees, numOfRegistrations: value }
                }, () => console.log(this.state.registrationFees));
                break;
            case 'purchases-overall-amount':
                this.setState({
                    purchasesFees: { ...this.state.purchasesFees, overallAmount: value }
                }, () => console.log(this.state.purchasesFees));
                break;
            case 'purchases-per-person':
                this.setState({
                    registrationFees: { ...this.state.registrationFees, perPerson: value }
                }, () => console.log(this.state.purchasesFees));
                break;
            default:
                this.setState({ [name]: value });
        };
    };

    handleSubmit = event => {
        //const errors = this.validate(this.state);
    };

    addFamilyTeamMember = () => {
        console.log(`addFamilyTeamMember`);

        this.setState({
            familyTeamMembers: [
                ...this.state.familyTeamMembers,
                {
                    firstName: "",
                    lastName: "",
                    dateOfBirth: "",
                    gender: "",
                    medicalConditions: "",
                    separateFundraisingPage: false
                }
            ]
        });
    };

    removeFamilyTeamMember = removeIndex => {
        this.setState({
            familyTeamMembers: this.state.familyTeamMembers.filter(
                (member, index) => index !== removeIndex
            )
        });
    };

    render() {
        const {
            challenge,
            dateOfBirth,
            gender,
            selectedPlan,
            joinExistingTeam,
            joinExistingTeamInput,
            setUpNewTeam,
            setUpNewTeamInput,
            companyTeamInput,
            typeOfMyNewTeam,
            familyTeamMembers,
            createTeamPaymentCode,
            registrationFeesChecked,
            purchasesFeesChecked,
            registrationFees,
            purchasesFees
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
                            gender,
                            selectedPlan,
                            joinExistingTeam,
                            joinExistingTeamInput,
                            setUpNewTeam,
                            setUpNewTeamInput,
                            companyTeamInput,
                            typeOfMyNewTeam
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

                            if (values.selectedPlan === "companyTeam") {
                                if (!values.companyTeamInput.trim()) {
                                    errors.companyTeamInput =
                                        "This field is required for your chosen selection.";
                                }
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
                                        typeOfMyNewTeam={
                                            this.state.typeOfMyNewTeam
                                        }
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
                                        companyTeamInput={
                                            values.companyTeamInput
                                        }
                                        familyTeamMembers={familyTeamMembers}
                                        errors={errors}
                                        touched={touched}
                                        createTeamPaymentCode={createTeamPaymentCode}
                                        registrationFeesChecked={registrationFeesChecked}
                                        purchasesFeesChecked={purchasesFeesChecked}
                                        registrationFees={registrationFees}
                                        purchasesFees={purchasesFees}
                                        formikHandleOnChange={handleChange}
                                        handleOnChange={this.handleOnChange}
                                        handleBlur={handleBlur}
                                        addFamilyTeamMember={
                                            this.addFamilyTeamMember
                                        }
                                        removeFamilyTeamMember={
                                            this.removeFamilyTeamMember
                                        }
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
