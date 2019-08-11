import React, { useState } from "react"
import Form from "react-bootstrap/Form"

const EmailCapture = () => {
  const [email, setEmail] = useState("")

  return (
    <div className="preSorting__emailSignup__wrapper">
      <Form.Group controlId="formBasicEmail">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          id="email"
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
