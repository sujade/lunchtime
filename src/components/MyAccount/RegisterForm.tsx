import React from 'react';
import {Button} from "react-bootstrap";

const RegisterForm = () => {
    return (
        <>
            <form className={"form me-5"}>
                <div className="mb-4">
                    <h1 className={"fw-bold"}>Create an account</h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">Name (optional)</label>
                    <input type="text" className="form-control" id="firstName"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="surname" className="form-label">Surname (optional)</label>
                    <input type="text" className="form-control" id="firstName"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="repeatEmail" className="form-label">Repeat your email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="rememberPassword">By checking this box, you are agreeing to our terms of service.</label>
                </div>
                <Button type="submit" href={"registersuccess"} size={"lg"} variant={"danger"}>Register</Button>
            </form>
        </>
    );
};

export default RegisterForm;