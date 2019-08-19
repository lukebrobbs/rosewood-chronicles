import React from "react"
import Form from "react-bootstrap/Form"

interface IEmailCaptureProps {
  email: string
  setEmail: (value: React.SetStateAction<string>) => void
}

const EmailCapture = (props: IEmailCaptureProps) => {
  return (
    <div className="preSorting__emailSignup__wrapper">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required={true}
          value={props.email}
          onChange={(event: any) => props.setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recieve exclusive content" />
      </Form.Group>
    </div>
  )
}

export default EmailCapture
