import { navigate } from "gatsby"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const EmailCapture = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/sortingQuiz")
  }
  return (
    <Form
      onSubmit={handleSubmit}
      method="post"
      name="email"
      id="emailCapture__form"
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required={true}
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recieve exclusive content" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Start the quiz
      </Button>
    </Form>
  )
}

export default EmailCapture
