import React from 'react'
import ProjectBox from '../../components/ProjectBox/ProjectBox'
import {projects} from '../../portfolio'
import './Projects.css'

function Projects() {
  return (
    <>
        <h1 className="heading link">PROJECTS</h1>
        <div className="projects">
            {
                projects.map((project,index)=>{
                    return <ProjectBox key={index} project={project}/>
                })
            }
        </div>
    </>
  )
}

export default Projects