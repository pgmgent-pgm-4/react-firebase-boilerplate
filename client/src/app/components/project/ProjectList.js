import { useCallback, useState, useEffect } from 'react';

import { useFirestore } from "../../contexts/firebase/firestore.context";

import ProjectListItem from './ProjectListItem';

const ProjectList = ({itemsPerPage = 10}) => {
  const [ projects, setProjects ] = useState();
  const [ lastVisible, setLastVisible ] = useState(null);
  const { getPagedProjects } = useFirestore();

  const fetchData = async () => {
    const data = await getPagedProjects(itemsPerPage, lastVisible);
    console.log(data);
    if (lastVisible === null || (lastVisible.uid !== data.lastVisibleDoc)) {
      setLastVisible(data.lastVisibleDoc);
      setProjects(data.projects);
    }
  }
  
  useEffect(() => {
    fetchData();    
  }, []);



  return (
    <div className="project-list">
      {!!projects && projects.map(project => {
        return (
          <ProjectListItem key={project.uid} project={project} />
        )
      })}
      {!!projects && <button onClick={() => fetchData()}>MORE</button>}
    </div>
  )
};

export default ProjectList;