import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../../containers/LandingPage/landingPage';
import SignUp from '../../containers/SignUp/signup'
import SignIn from '../../containers/Login/login';
import WorkSpace from '../../containers/Workspace/workspace';

function AppRoutes() {
    return (
        <Routes>
            <Route
                path={'/signup'}
                element={
                    <SignUp />
                }
            />

            <Route
                path={'/login'}
                element={
                    <SignIn />
                }
            />

            <Route 
                path={'/'}
                element={
                    <LandingPage />
                }
            />

            <Route 
                path={'/create-workspace'}
                element={
                    <WorkSpace />
                }
            />
        </Routes>
    )
}

export default AppRoutes;