import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dev } from '../pages/Dev';
import { Login } from '../pages/Login';
import { Panel } from '../pages/Panel';
import { Recovery } from '../pages/Recovery';
import { Signup } from '../pages/Signup';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/recovery' element={<Recovery />} />
            <Route path='/panel' element={<Panel />} />
            <Route path='/dev' element={<Dev/>} />
        </Routes>
    );
};
