import React, { Fragment, useEffect, useRef } from "react"
import "../static/login.css"
import { Button, Container, Form, FormText } from "react-bootstrap"
function Login() {

    const for_cus = useRef();

    useEffect( 
       () => {
        for_cus.current.focus();
       }

    , [])
    return(
        <Fragment>
            <img src= {require("../Login/img/bg.png")} className="login-bg-img"></img>
            <Container className="login-form">
                <Form style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                        <FormText className="login-title">LOGIN</FormText>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control ref={for_cus} type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div class="login-remember">
                        <input type="checkbox" id= "re-pw"/>
                        <label for = "re-pw">Remember password</label>
                    </div>
                    <Button variant="primary" type="submit" id="submit-login-form">
                        Login
                    </Button>
                    <p style={{fontSize: "13px", textAlign: "center", fontWeight: "bold", padding: "10px", color: "black"}}>or Connect with Social Media</p>
                    <div className="social-media"  style={{backgroundColor: "#ffffff", "--color": "#ffff80"}}>
                        <img src = {require("./img/ggicon.png")} alt="google" className="icon-social"/>
                        <span className="text-social">Sign in with Google</span>
                    </div>
                    <div className="social-media" style={{backgroundColor: "#019eff", "--color": "#019eff"}}>
                        <img src = {require("./img/twitter-logo.png")} alt="Twitter" className="icon-social"/>
                        <span className="text-social">Sign in with Twitter</span>
                    </div>
                    <div className="social-media" style={{backgroundColor: "#3d5595", "--color": "#3d5595"}}>
                        <img src = {require("./img/facebook-logo.png")} alt="Facebook" className="icon-social"/>
                        <span className="text-social">Sign in with Facebook</span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p><em>*Forgot password</em></p>
                        <p><em>*Create a new account</em></p>
                    </div>
                </Form>
            </Container>
        </Fragment>
    ) 
}
export default Login