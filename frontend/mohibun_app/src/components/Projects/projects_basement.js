import React from 'react';
import ProjectType from './projectType';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../Loading/Loading';

function ProjectsBasement() {
  const [basementData, setBasementData] = useState([]);
  const [loading, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function fetchData() {
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
                    type={"Basement"}
                    images={'/images/basement_project.webp'}
                    kitchenData={basementData}
                />
            )}

            <ToastContainer />
    </div>
  );
}

export default ProjectsBasement;
