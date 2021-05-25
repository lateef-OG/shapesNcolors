import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth/auth.actions';

import './Auth.scss';

const Auth = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login('mockLoginToken'));
    }

    return (
        <div className="auth-page">
            <div className="login-card">
                <h4 className="title">
                    Welcome to Shapes
                </h4>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Auth
