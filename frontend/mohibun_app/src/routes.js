import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from './components/Services/services';
import ContactUs from './components/Contact_us/contact_us'
import ServicesKitchen from './components/Services/services_kitchen';
import ServicesBathroom from './components/Services/services_bathroom';
import ServicesBasement from './components/Services/services_basement';
import ServicesFullhouse from './components/Services/services_fullhouse';
import ProjectsKitchen from './components/Projects/projects_kitchen';
import ProjectsBasement from './components/Projects/projects_basement';
import ProjectsFullHouse from './components/Projects/projects_fullhouse';
import ProjectsBathroom from './components/Projects/projects_bathroom';

function routes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/services' element={<Services />} /> */}
                <Route path='/services/kitchen' element={<ServicesKitchen />} />
                <Route path='/services/bathroom' element={<ServicesBathroom />} />
                <Route path='/services/basement' element={<ServicesBasement />} />
                <Route path='/services/fullhouse' element={<ServicesFullhouse />} />
                {/* </Route> */}

                {/* <Route path='/projects' element={<Projects />} />  */}
                <Route path='/projects/kitchen' element={<ProjectsKitchen />} />
                <Route path='/projects/bathroom' element={<ProjectsBathroom />} />
                <Route path='/projects/basement' element={<ProjectsBasement />} />
                <Route path='/projects/fullhouse' element={<ProjectsFullHouse />} />
                {/* </Route> */}
                <Route path='/contactus' element={<ContactUs />} />
            </Routes>
        </div>
    )
}

export default routes
