import React from 'react';
import ProjectType from './projectType';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ProjectsBathroom() {
  const [bathroomData, setbathroomData] = useState([]);
  const [loading, setLoadingStatus] = useState(true);

  useEffect(async () => {
    const bathroomDataArr = []
    try {
      const result = await axios.get('/projects/getAll');
      for (let data of result.data.data) {
        if (data.projectType === "Bathroom") {
          bathroomDataArr.push(data)
        }
      }
      setbathroomData(bathroomDataArr)
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
                    type={"Bathroom"}
                    images={'/images/file17.jpeg'}
                    kitchenData={bathroomData}
                />
            )}

            <ToastContainer />
    </div>

  );
}

export default ProjectsBathroom;
