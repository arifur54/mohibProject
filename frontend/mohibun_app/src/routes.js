import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from './components/Services/services';
import Projects from './components/Projects/projects';
import ContactUs from './components/Contact_us/contact_us'

function routes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contactus' element={<ContactUs />} />
            </Routes>
        </div>
    )
}

export default routes
