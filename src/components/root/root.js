import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ROUTES from '../../constants/routes';
import SignUp from '../sign-up/sign-up';
import Home from '../home/home';
import Students from '../students/students';
import Test from '../lead2change/Test';
import SignUpSuccess from '../sign-up-success/sign-up-success';
import Waste from '../waste-management/waste';
import Header from '../header/header';

const theme = createTheme();

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGN_UP_SUCCESS} element={<SignUpSuccess />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.STUDENTS} element={<Students />} />
            <Route path={ROUTES.TEST} element={<Test />} />
            <Route path={ROUTES.WASTE} element={<Waste />} />
            <Route path={ROUTES.HEADER} element={<Header />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
