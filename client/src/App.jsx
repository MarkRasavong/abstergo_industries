import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import { theme } from './mui_theme';
import './index.css';
import Homepage from './pages/homepage/Homepage';
import EarlyAccessForm from './pages/earlyAccessForm/EarlyAccessForm';
import EmploymentApp from './pages/employmentApplication/EmploymentApp';
import Footer from './containers/footer/Footer';
import EmploymentSuccess from './components/employmentSuccess/EmploymentSuccess';
import SubSuccess from './components/subscriptionSuccess/SubSuccess';
import NonexistentPage from './components/nonexistentPage/NonexistentPage';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/newsletter' element={<EarlyAccessForm />} />
                        <Route path='/employment-app' element={<EmploymentApp />} />
                        <Route path='/applicant-success' element={<EmploymentSuccess />} />
                        <Route path='/sub-success' element={<SubSuccess />} />
                        <Route path='/*' element={<NonexistentPage />} />
                    </Routes>
                    <Footer />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;