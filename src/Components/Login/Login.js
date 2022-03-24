import React from 'react';
import './Login.css';

const Login = () => {

    const register = () => {

    }

    const loginToApp = () => {

    }

    return (
        <div className="login">
            <img src="https://tccl.libnet.info/images/events/tccl/linkedin.png" alt="" />

            <form action="">
                <input placeholder="Full name (required if registering)" type="text" />
                <input placeholder="Profile picture URL (Optional)" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    );
};

export default Login;