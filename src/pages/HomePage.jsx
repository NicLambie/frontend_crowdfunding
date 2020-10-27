import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
  const [projectList, setProjectList] = useState([]);
  const token = "46cd5918aa5cf505707520f28b6ee51a9177ec84";

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projects/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
      hello
    </div>
  );
}

export default HomePage;
