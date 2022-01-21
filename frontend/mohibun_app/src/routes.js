import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from './components/Services/services';
import Projects from './components/Projects/projects';
import Contact_us from './components/Contact_us/contact_us'
import Kitchen from './components/Services/kitchen';
import Bathroom from './components/Services/bathroom';
import Basement from './components/Services/basement';
import Whole_house from './components/Services/whole_house';

function routes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contactus' element={<Contact_us />} />
                <Route path='/kitchen' element={<Kitchen/>} />
                <Route path='services/kitchen' element={<Kitchen/>} />
                <Route path='services/bathroom' element={<Bathroom/>} />
                <Route path='services/Basement' element={<Basement/>} />
                <Route path='services/whole_house' element={<Whole_house/>} />
            </Routes>
        </div>
    )
}

export default routes
