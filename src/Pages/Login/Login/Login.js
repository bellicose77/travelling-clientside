import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    // const { allContext } = useAuth();
    // const { signInUsingGoogle } = allContext;
    const { signInUsingGoogle } = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;