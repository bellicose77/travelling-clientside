import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, loading } = allContext;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />


    );
};

export default PrivateRoute;