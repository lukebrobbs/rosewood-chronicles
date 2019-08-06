import { navigate } from "gatsby"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const EmailCapture = () => {
  const [email, setEmail] = useState("")

  const encode = (data: { "form-name": string; email: string }) => {
    return Object.keys(data)
      .map(
        // @ts-ignore
        key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleSubmit = (e: React.FormEvent) => {
    fetch("/", {
      body: encode({ "form-name": "email", email }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
    }).catch(error => alert(error))

    e.preventDefault()
    navigate("/sortingQuiz")
  }
  return (
    <Form
      onSubmit={handleSubmit}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="email"
    >
      <Form.Group controlId="formBasicEmail">
        <input type="hidden" name="form-name" value="email" />
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
