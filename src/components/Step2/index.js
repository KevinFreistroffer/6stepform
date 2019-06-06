import React, { Component } from "react";
import * as styles from "./styles.scss";
import StepHeader from "../StepHeader";
import YourChallenge from "./components/YourChallenge";
import YourDetails from "./components/YourDetails";
import YourPlanToTakePart from "./components/YourPlanToTakePart";
import CompleteStepControls from "../CompleteStepControls";
import { Formik, Form, ErrorMessage, getIn } from "formik";
import validator from "validator";
import Button from "@material-ui/core/Button";
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
                limitTo: "",
                overallAmount: 0,
                numOfRegistrations: 0
            },
            purchasesFees: {
                limitTo: "",
                overallAmount: 0,
                perPerson: 0
            },
            invoiceDetails: {
                contact: "",
                email: "",
                abn: "",
                autoFindAddress: "",
                address1: "",
                address2: "",
                city: "",
                zip: "",
                state: ""
            }
        };

        this.dobPattern = new RegExp(DOB_REGEX);
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        // this.props.nextStep();
    };

    handleNewTeamMemberOnChange = (event, onChangeIndex) => {
        event.persist();


    };

    handleOnChange = (event, familyTeamMemberIndex = undefined) => {
        event.persist();
        console.log(`handleOnChange`, event.target.name, familyTeamMemberIndex);
        let name = event.target.name;
        const value = event.target.value;
        name = name === "myNewTeam" ? "typeOfMyNewTeam" : name;

        if (!isNaN(familyTeamMemberIndex)) {
            console.log(`is familyTeamMemberIndex`);
            this.setState(prevState => {
                let newState = prevState;
                let name = event.target.name.split('.')[1];
                newState.familyTeamMembers[familyTeamMemberIndex][name] = event.target.value;

                return {
                    familyTeamMembers: Object.assign(prevState.familyTeamMembers, newState.familyTeamMembers)
                }
            });

        } else {
            switch (name) {
                case "createTeamPaymentCode":
                    this.setState({
                        createTeamPaymentCode: !this.state.createTeamPaymentCode
                    });
                    break;
                case "joinExistingTeamInput":
                    console.log(`joinExistingTeamInput`);
                    this.setState({
                        joinExistingTeamInput: value
                    });
                    break;
                case "registration-fees-checkbox":
                    this.setState({
                        registrationFeesChecked: !this.state.registrationFeesChecked
                    });
                    break;
                case "purchases-fees-checkbox":
                    this.setState({
                        purchasesFeesChecked: !this.state.purchasesFeesChecked
                    });
                    break;
                case "registration-fees-select":
                    // this.state.registrationFees.limitTo = value;
                    this.setState(
                        {
                            registrationFees: {
                                ...this.state.registrationFees,
                                limitTo: value
                            }
                        },
                        () => console.log(this.state.registrationFees)
                    );
                    break;
                case "purchases-select":
                    this.setState(
                        {
                            purchasesFees: {
                                ...this.state.purchasesFees,
                                limitTo: value
                            }
                        },
                        () => console.log(this.state.purchasesFees)
                    );
                    break;
                case "registration-overall-amount":
                    this.setState(
                        {
                            registrationFees: {
                                ...this.state.registrationFees,
                                overallAmount: value
                            }
                        },
                        () => console.log(this.state.registrationFees)
                    );
                    break;
                case "num-of-registrations":
                    this.setState(
                        {
                            registrationFees: {
                                ...this.state.registrationFees,
                                numOfRegistrations: value
                            }
                        },
                        () => console.log(this.state.registrationFees)
                    );
                    break;
                case "purchases-overall-amount":
                    this.setState(
                        {
                            purchasesFees: {
                                ...this.state.purchasesFees,
                                overallAmount: value
                            }
                        },
                        () => console.log(this.state.purchasesFees)
                    );
                    break;
                default:
                    this.setState({ [name]: value });
            }            
        }


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
            purchasesFees,
            nestStep,
            prevStep,
            invoiceDetails
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
                            typeOfMyNewTeam,
                            familyTeamMembers: [],
                            registrationFees: {
                                limitTo: "",
                                overallAmount: 0,
                                numOfRegistrations: 0
                            },
                            purchasesFees: {
                                limitTo: "",
                                overallAmount: 0,
                                perPerson: 0
                            },
                            invoiceDetails: {
                                contact: "",
                                email: "",
                                abn: "",
                                autoFindAddress: "",
                                address1: "",
                                address2: "",
                                city: "",
                                zip: "",
                                state: ""
                            }
                        }}
                        validate={values => {
                            const { 
                                contact, 
                                email, 
                                abn, 
                                autoFindAddress,
                                address1,
                                address2,
                                city, 
                                state 
                            } = values.invoiceDetails;

                            let errors = {
                                familyTeamMembers: []
                            };
                            console.log(values);

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

                                if (values.typeOfMyNewTeam === 'family') {
                                    console.log(`typeofMyNewTeam === family`);
                                    if (values.familyTeamMembers.length > 0) {
                                        console.log(`values.familyTeamMembers.length > 0`);
                                        values.familyTeamMembers.forEach((familyMember, index) => {
                                            errors.familyTeamMembersErrors.push({});

                                            if (!familyMember.firstName) {
                                                console.log(`no familyMember firstName`, familyMember, index);
                                            }
                                        });
                                    }
                                }
                            }

                            if (values.selectedPlan === "companyTeam") {
                                if (!values.companyTeamInput.trim()) {
                                    errors.companyTeamInput =
                                        "This field is required for your chosen selection.";
                                }
                            }

                            // If invoice thing is visible
                            if (values.createTeamPaymentCode) {     
                                if (values.registrationFeesChecked) {   
                                    console.log(`registrationFeesChecked and selected:`, values.registrationsFees.limitTo)
                                    if (!registrationFees.limitTo) {
                                        errors.registrationFees.limitTo = "Please make a choice.";
                                    }

                                    if (registrationFees.limitTo === 'overallAmount') {
                                        if (!registrationFees.overallAmount || registrationFees.overallAmount === 0) {
                                            errors.registrationFees.overallAmount = "Please enter a value."
                                        }
                                    }

                                    if (registrationFees.limitTo === 'numOfRegistrations') {
                                        if (!registrationFees.numOfRegistrations || registrationFees.numOfRegistrations === 0) {
                                            errors.registrationFees.numOfRegistrations = "Please enter a value."
                                        }
                                    }
                                }

                                if (values.purchasesFeesChecked) {
                                    if (!purchasesFees.limitTo) {
                                        errors.purchasesFees.limitTo = "Please make a choice.";
                                    }

                                    if (purchasesFees.limitTo === 'overallAmount') {
                                        if (!purchasesFees.overallAmount || purchasesFees.overallAmount === 0) {
                                            errors.purchasesFees.overallAmount = "Please enter a value."
                                        }
                                    }

                                    if (purchasesFees.limitTo === 'perPerson') {
                                        if (!purchasesFees.numOfRegistrations || purchasesFees.numOfRegistrations === 0) {
                                            errors.purchasesFees.numOfRegistrations = "Please enter a value."
                                        }
                                    }
                                }   

                            if (!values.invoiceDetails.contact) {
                                errors.invoiceDetailsContact = "Contact is required";
                            }                                

                            if (!values.invoiceDetails.email) {
                               errors.invoiceDetailsEmail = "Email is required"
                            }

                            if (!values.invoiceDetails.abn) {
                               errors.invoiceDetailsAbn = "ABN is required"
                            }

                            if (!values.invoiceDetails.autoFindAddress) {
                                if (!address1 && !address2 && !city && !state) {
                                    errors.invoiceDetailsAutoFindAddress = "Please search for an address.";
                                }
                            }

                            if (!values.invoiceDetails.autoFindAddress) {
                                if (!values.invoiceDetails.address1) {
                                   errors.invoiceDetailsAddress1 = "Address1 is required";
                                } else {
                                    errors.invoiceDetailsAddress1 = '';
                                }
                                
                                if (!values.invoiceDetails.address2) {
                                   errors.invoiceDetailsAddress2 = "Address2 is required";
                                }
                                
                                if (!values.invoiceDetails.city) {
                                   errors.invoiceDetailsCity = "City is required";
                                }

                                if (!values.invoiceDetails.state) {
                                   errors.invoiceDetailsState = "State is required";
                                }
                            }                             
                        }



                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // Form is valid

                            console.log(`onSubmit`);
                           // alert(JSON.stringify(values));
                            // this.nextStep();
                            // setSubmitting(false);
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
                                        createTeamPaymentCode={
                                            createTeamPaymentCode
                                        }
                                        registrationFeesChecked={
                                            registrationFeesChecked
                                        }
                                        purchasesFeesChecked={
                                            purchasesFeesChecked
                                        }
                                        registrationFees={registrationFees}
                                        purchasesFees={purchasesFees}
                                        invoiceDetails={values.invoiceDetails}
                                        formikHandleOnChange={handleChange}
                                        handleOnChange={this.handleOnChange}
                                        handleNewTeamMemberOnChange={this.handleNewTeamMemberOnChange}
                                        handleBlur={handleBlur}
                                        addFamilyTeamMember={
                                            this.addFamilyTeamMember
                                        }
                                        removeFamilyTeamMember={
                                            this.removeFamilyTeamMember
                                        }
                                    />
                                    <CompleteStepControls>
                                        <>
                                            <p className="terms-and-conditions">
                                                I have read and understood the
                                                <a
                                                    href="https://mswaoceanride.org.au/terms-and-conditions"
                                                    target="_blank"
                                                >
                                                    Terms and Conditions
                                                </a>
                                                for taking part in the 2019 MSWA Ocean Ride.
                                            </p>
                                            <Button
                                                variant="contained"
                                                type="button"
                                                onClick={() => {
                                                    this.props.previousStep();
                                                }}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                onClick={() => {
                                                    // this.props.nextStep();
                                                }}
                                            >
                                                Next
                                            </Button>
                                        </>
                                    </CompleteStepControls>
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
