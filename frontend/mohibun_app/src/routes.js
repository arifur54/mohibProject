import React, {useContext} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from './components/Services/services';
// import ContactUs from './components/Contact_us/Contact_us'
import Contact_Us_LP from './components/Contact_us/Contact_Us_LP';
import ServicesKitchen from './components/Services/services_kitchen';
import ServicesBathroom from './components/Services/services_bathroom';
import ServicesBasement from './components/Services/services_basement';
import ServicesFullhouse from './components/Services/services_fullhouse';
import ProjectsKitchen from './components/Projects/projects_kitchen';
import ProjectsBasement from './components/Projects/projects_basement';
import ProjectsFullHouse from './components/Projects/projects_fullhouse';
import ProjectsBathroom from './components/Projects/projects_bathroom';
import ImageGallery from './components/Projects/Image_gallery/ImageGallery';
import Register from './components/Admin/Register';
import Login from './components/Admin/Login';
import AdminMain from './components/AdminPanel/AdminMain';
import Review from './components/Review/Review';
import { Context } from './context/Context';

function Routess() {
    
    const {user} = useContext(Context);
    console.log("user :" + user)

    return (
        <div>
            <Routes>
                {/* Home Routes */}
                <Route path='/' element={<Home />} />
                {/* Services Routes */}
                <Route path='/services/kitchen' element={<ServicesKitchen />} />
                <Route path='/services/bathroom' element={<ServicesBathroom />} />
                <Route path='/services/basement' element={<ServicesBasement />} />
                <Route path='/services/fullhouse' element={<ServicesFullhouse />} />
                {/* </Route> */}

                {/* Kitchen Routes />  */}
                <Route path='/projects/kitchen' element={<ProjectsKitchen />} />
                <Route path='/projects/bathroom' element={<ProjectsBathroom />} />
                <Route path='/projects/basement' element={<ProjectsBasement />} />
                <Route path='/projects/fullHouse' element={<ProjectsFullHouse />} />
                <Route path='/projects/image_gallery/:gId' element={<ImageGallery />} />
                {/* Contact Us route */}
                <Route path='/contactus' element={<Contact_Us_LP />} />
                {/* Register Route */}
                <Route path='/register' element={<Register />} />
                 {/* Login Route */}
                <Route path='/login' element={<Login />} />
                {/* Admin Panel Routes */}
                <Route path='/admin_panel' element={user? <AdminMain /> : <Login />} />

                <Route path='/reviews' element={<Review />} />

            </Routes>
        </div>
    )
}

export default Routess
