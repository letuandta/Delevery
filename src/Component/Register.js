import React, { Fragment } from 'react'
import { Button, Container, Form, FormText } from "react-bootstrap"

const Register = () => {
  return (
    <Fragment>
        <Container>
            <Form>
                <FormText className="register-title">LOGIN</FormText>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCCCD">
                    <Form.Label>CCCD</Form.Label>
                    <Form.Control type="text" placeholder="CCCD" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSdt">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sex</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </Form.Select>               
                </Form.Group>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
            </Form>
        </Container>
    </Fragment>
  )
}

export default Register