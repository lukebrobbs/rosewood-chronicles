import { Field, Formik } from "formik"
import { navigate } from "gatsby"
import React from "react"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { boolean, object, string } from "yup"
import BannerImages from "./BannerImages"
import PreSortingText from "./PreSortingText"
import { IEmailCaptureProps, IHandleSubmit } from "./types"

const SignupSchema = object().shape({
  email: string()
    .email("Please enter a valid email address")
    .required(),
  subscribed: boolean(),
})

const EmailCapture = (props: IEmailCaptureProps) => {
  const initialValues = {
    email: "",
    subscribed: false,
  }

  const addUserToMailchimp = async (formValues: IHandleSubmit) => {
    fetch(
      `${props.origin}/.netlify/functions/mailchimp?email=${formValues.email}&subscribed=${formValues.subscribed}`
    )
      .then((data: Response) => {
        console.log(data.body)
        navigate("/sortingQuiz")
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
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Field name="email">
                        {({ field }) => (
                          <Form.Control
                            placeholder="Enter email"
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
                      <Field name="subscribed">
                        {({ field }) => (
                          <Form.Check
                            type="checkbox"
                            label="Receive exclusive content"
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
