import { Field, Formik } from "formik"
import { navigate } from "gatsby"
import React, { FunctionComponent } from "react"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { boolean, object, string } from "yup"
import { IEmailCaptureProps, IHandleSubmit } from "../../types"
import BannerImages from "./BannerImages"
import PreSortingText from "./PreSortingText"

const SignupSchema = object().shape({
  email: string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  firstName: string(),
  isOfAge: boolean().oneOf([true], "You must be over 13"),
  lastName: string(),
  subscribed: boolean(),
})

const EmailCapture: FunctionComponent<IEmailCaptureProps> = props => {
  const initialValues = {
    email: "",
    firstName: "",
    isOfAge: false,
    lastName: "",
    subscribed: false,
  }

  const addUserToMailchimp = async (formValues: IHandleSubmit) => {
    fetch(
      `https://www.therosewoodchronicles.co.uk/.netlify/functions/mailchimp?email=${formValues.email}&subscribed=${formValues.subscribed}&firstName=${formValues.firstName}&lastName=${formValues.lastName}`
    )
      .then((data: Response) => {
        console.log(data.body)
        props.setActivePage("SORTING_QUIZ")
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => addUserToMailchimp(values)}
      validationSchema={SignupSchema}
    >
      {({ handleSubmit, errors, touched }) => {
        return (
          <div className="preSorting__wrapper">
            <BannerImages banners={props.banners} />
            <div className="preSorting__info">
              <Form className="preSorting__form" onSubmit={handleSubmit}>
                <PreSortingText header="House Sorting Quiz">
                  <div className="preSorting__emailSignup__wrapper">
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Field name="firstName">
                        {({ field }) => (
                          <Form.Control
                            isInvalid={errors.firstName && touched.firstName}
                            {...field}
                          />
                        )}
                      </Field>
                      {errors.firstName && touched.firstName && (
                        <FormControl.Feedback
                          type="invalid"
                          style={{ display: "block" }}
                        >
                          {errors.firstName}
                        </FormControl.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Field name="lastName">
                        {({ field }) => (
                          <Form.Control
                            isInvalid={errors.lastName && touched.lastName}
                            {...field}
                          />
                        )}
                      </Field>
                      {errors.lastName && touched.lastName && (
                        <FormControl.Feedback
                          type="invalid"
                          style={{ display: "block" }}
                        >
                          {errors.lastName}
                        </FormControl.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address *</Form.Label>
                      <Field name="email">
                        {({ field }) => (
                          <Form.Control
                            isInvalid={errors.email && touched.email}
                            {...field}
                          />
                        )}
                      </Field>
                      {errors.email && touched.email && (
                        <FormControl.Feedback
                          type="invalid"
                          style={{ display: "block" }}
                        >
                          {errors.email}
                        </FormControl.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Field name="isOfAge">
                        {({ field }) => (
                          <Form.Check
                            type="checkbox"
                            label="I confirm I am over the age of 13 *"
                            {...field}
                          />
                        )}
                      </Field>
                      {errors.isOfAge && touched.isOfAge && (
                        <FormControl.Feedback
                          type="invalid"
                          style={{ display: "block" }}
                        >
                          {errors.isOfAge}
                        </FormControl.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Field name="subscribed">
                        {({ field }) => (
                          <Form.Check
                            type="checkbox"
                            label="Receive exclusive Rosewood content"
                            {...field}
                          />
                        )}
                      </Field>
                    </Form.Group>
                  </div>
                </PreSortingText>
                <button className="preSorting__signUp__button" type="submit">
                  START THE QUIZ
                </button>
              </Form>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export default EmailCapture
