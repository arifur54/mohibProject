import React from 'react';
import ProjectType from './projectType';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ProjectsFullHouse() {
    
    const [fullHouseData, setfullHouseData] = useState([]);
    const [loading, setLoadingStatus] = useState(true);

    useEffect(async () => {
        const fullHouseArr = []
        try {
            const result = await axios.get('/projects/getAll');
            for (let data of result.data.data) {
                if (data.projectType === "FullHouse") {
                    fullHouseArr.push(data)
                }
            }
            setfullHouseData(fullHouseArr)
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
                <h1>Loading....</h1>
            ) : (
                <ProjectType
                    // id={kitchenData._id}
                    type={"Full House"}
                    images={'/images/file17.jpeg'}
                    kitchenData={fullHouseData}
                />
            )}

            <ToastContainer />
        </div>
    );
}

export default ProjectsFullHouse;
