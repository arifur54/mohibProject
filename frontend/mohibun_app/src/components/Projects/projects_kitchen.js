import React from 'react'
import ProjectType from './projectType';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

function ProjectsKitchen() {

    const [kitchenData, setKitchenData] = useState([]);
    const [loading, setLoadingStatus] = useState(true);

    useEffect(async () => {
        const kitDataArr = []
        try {
            const result = await axios.get('/projects/getAll');
            for (let data of result.data.data) {
                if (data.projectType === "Kitchen") {
                    kitDataArr.push(data)
                }
            }
            setKitchenData(kitDataArr)
            setLoadingStatus(false);
        } catch (error) {
            // Show error
            toast.error("Something went wrong:( " + error)
            setLoadingStatus(false);
        }

    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
                
            ) : (
                <ProjectType
                    // id={kitchenData._id}
                    type={"Kitchen"}
                    images={'/images/file17.jpeg'}
                    kitchenData={kitchenData}
                />
            )}

            <ToastContainer />
        </div>
    )
}

export default ProjectsKitchen;
