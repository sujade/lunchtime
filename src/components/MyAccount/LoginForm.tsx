import React from 'react';
import {Button} from "react-bootstrap";

const LoginForm = () => {
    return (
        <>
            <form className={"form ms-5 me-5"}>
                <div className="mb-4">
                    <h1 className={"fw-bold"}>Login</h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="rememberPassword">Remember my password</label>
                </div>
                <Button type="submit" href={"order"} size={"lg"} variant={"danger"}>Login</Button>
            </form>
        </>
    );
};

export default LoginForm;