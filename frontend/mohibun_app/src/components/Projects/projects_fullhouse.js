import React from 'react';
import ProjectType from './projectType';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../Loading/Loading';

function ProjectsFullHouse() {
    
    const [fullHouseData, setfullHouseData] = useState([]);
    const [loading, setLoadingStatus] = useState(true);

    useEffect(() => {
        async function fetchData(){
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
    }

    fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <ProjectType
                    // id={kitchenData._id}
                    type={"Full House"}
                    images={'/images/whole_house_project.jpg'}
                    kitchenData={fullHouseData}
                />
            )}

            <ToastContainer />
        </div>
    );
}

export default ProjectsFullHouse;
