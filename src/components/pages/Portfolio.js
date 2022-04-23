import React from 'react';
import { Card } from 'react-bootstrap';
import Project from '../Project';
import projects from '../../assets/projects';



export default function Portfolio() {
  return (
   <div className='projectContainer linear'>
    

  {projects.map((project, key) => (
    <Card className='project-cards' style={{width: "40%"}} >
      <Project className='card'   
        key = {key}
        name={project.name}
        src={project.src}
        git={project.git}
        live={project.live}
      />
    </Card>

    ))}
    
  
  </div>
  )
}
