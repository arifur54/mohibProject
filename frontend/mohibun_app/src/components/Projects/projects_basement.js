import React from 'react';
import ProjectType from './projectType';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ProjectsBasement() {
  const [basementData, setBasementData] = useState([]);
  const [loading, setLoadingStatus] = useState(true);

  useEffect(async () => {
      const baseMentDataArr = []
      try {
          const result = await axios.get('/projects/getAll');
          for (let data of result.data.data) {
              if (data.projectType === "Basement") {
                baseMentDataArr.push(data)
              }
          }
          setBasementData(baseMentDataArr)
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
                    type={"Basement"}
                    images={'/images/file17.jpeg'}
                    kitchenData={basementData}
                />
            )}

            <ToastContainer />
    </div>
  );
}

export default ProjectsBasement;
