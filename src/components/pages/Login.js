import React from 'react'
import { Link } from "react-router-dom";
import "./Signup.css";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

const Login = () => {
    return (
        <Row>
            <Col xl={5} lg={5} md={6} sm={12} className="bg-primary text-center" style={{ height: "100vh" }}>
                <h2 className="logo">Mente</h2>
                <div>
                    <h4 className="msg">Find, Schedule and Meet <br /> mentors around the world</h4>
                </div>
            </Col>
            <Col xl={7} lg={7} md={6} sm={12} >
                <div className="p-4 d-flex flex-column justify-content-center" style={{ height: "100vh", }} >
                    <Col lg={6} md={12} sm={12}>
                        <h2>Log In</h2>
                        <Form>
                            <FormGroup className="mb-3" >
                                <Label>Email</Label> <br />
                                <Input type="email" placeholder="tina@gmail.com" />
                            </FormGroup>
                            <FormGroup className="mb-3" >
                                <Label>Password</Label> <br />
                                <Input type="text" placeholder="password" />
                            </FormGroup>
                            <h6><input type="checkbox" />password should be more than 6 characters</h6>
                            <h6><input type="checkbox" />password should contain a number</h6>
                            <FormGroup>
                                <Button className="btn btn-warning">Login</Button>
                            </FormGroup>
                            <div className="mt-3">
                    <span className="ml-3"> New here</span>
                    <Link
                      to="/signup"
                      className="m-3
                    text-decoration-none text-info"
                    >
                      create account
                    </Link>
                  </div>
                        </Form>
                    </Col>
                </div>
            </Col>
        </Row>

    )
}
                    
               
export default Login