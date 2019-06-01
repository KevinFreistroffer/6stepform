import React, { Component } from "react";
import Intro from "./components/Intro.js";
import * as styles from "./styles.scss";
import SignUpWithEmail from "./components/SignUpWithEmail";
import Next from "./components/Next";
import { Formik, Form, ErrorMessage } from "formik";
import validator from "validator";

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            tel: "",
            errors: {}
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
        const { firstName, lastName, email, tel, errors } = this.state;

        return (
            <div id="step-1" className="step" styles={styles}>
                <div className="step-container">
                    <Intro />
                    <Formik
                        initialValues={{ firstName, lastName, email, tel }}
                        validate={values => {
                            let errors = {};
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
                                !validator.isMobilePhone(
                                    values.tel,
                                    "en-AU",
                                    {
                                        strictMode: true
                                    }
                                )
                            ) {
                                errors.tel = "Invalid telephone number";
                            }

                            return errors;
                        }}
                        handleBlur={() => {
                            console.log(`handleBlur`);
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
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
                                <Next />
                                {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
                                {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
                                {errors.email && touched.email && <div>{errors.email}</div>}
                                {errors.tel && touched.tel && <div>{errors.tel}</div>}
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Step1;
