import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Travel from '../pages/Travel';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navbar from './Navbar.jsx';
import Footer from './Footer';

const App = () => {

    return (

        <BrowserRouter>

            <Navbar />
            
            <Routes>
                <Route exact path='/' element={ <Home /> }/>
                <Route path='/menu' element={ <Menu /> }/>
                <Route path='/travel' element={ <Travel /> }/>
                <Route path='/about' element={ <About /> }/>
                <Route path='/contact-us' element={ <Contact /> }/>

            </Routes>

            <Footer />
        </BrowserRouter>

    );
}

if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<App/>)
}