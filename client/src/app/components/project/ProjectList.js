import { useState, useEffect } from 'react';

import { useFirestore } from "../../contexts/firebase/firestore.context";

import ProjectListItem from './ProjectListItem';

const ProjectList = () => {
  const [ projects, setProjects ] = useState();
  const { getProjects } = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      console.log(data);
      setProjects(data);
    };

    fetchData();    
  }, [])

  return (
    <div className="project-list">
      {!!projects && projects.map(project => {
        return (
          <ProjectListItem key={project.uid} project={project} />
        )
      })}
    </div>
  )
};

export default ProjectList;