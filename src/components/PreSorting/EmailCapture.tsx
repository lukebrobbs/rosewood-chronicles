import React, { useState } from "react"
import Form from "react-bootstrap/Form"

const EmailCapture = () => {
  const [email, setEmail] = useState("")

  return (
    <div className="preSorting__emailSignup__wrapper">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required={true}
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recieve exclusive content" />
      </Form.Group>
    </div>
  )
}

export default EmailCapture