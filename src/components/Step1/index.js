import React, { Component } from "react";
import Intro from "./components/Intro.js";
import * as styles from "./styles.scss";
import SignUpWithEmail from "./components/SignUpWithEmail";
import Next from "./components/Next";
import { Formik } from "formik";
import validator from "validator";

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            tel: ""
        };
    }

    handleNextStep = () => {
        console.log(`handleNextStep`);
        // this.props.nextStep();
    };

    handleOnChange = event => {
        console.log(`handleOnChange`, event);

        /*
            this.state({
                [event.target.name]: event.target.value
            });
        */
    };

    render() {
        return (
            <div id="step-1" className="step" styles={styles}>
                <div className="step-container">
                    <Formik
                        validate
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            tel: ""
                        }}
                        validate={values => {
                            let errors = {};
                            if (!values.firstName) {
                                errors.firstName = "Required";
                            }

                            if (!values.lastName) {
                                errors.lastName = "Required";
                            }

                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
                            }

                            if (!values.tel) {
                                errors.tel = "Required";
                            } else if (
                                !validator.isMobilePhoneLocales(
                                    values.tel,
                                    "en-AU",
                                    { strictMode: true }
                                )
                            ) {
                                errors.tel = "Invalid telephone number";
                            }
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // setTimeout(() => {
                            //     alert(JSON.stringify(values, null, 2));
                            //     setSubmitting(false);
                            // }, 400);
                        }}
                        render={({
                            values,
                            errors,
                            status,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <>
                                <Intro />
                                <SignUpWithEmail
                                    firstName={values.firstName}
                                    lastName={values.lastName}
                                    email={values.email}
                                    tel={values.tel}
                                />
                                <Next
                                    nextStep={() => {
                                        handleSubmit();
                                    }}
                                />
                            </>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default Step1;
