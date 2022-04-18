import React from 'react';
import { Card } from 'react-bootstrap';
import Project from '../Project';
import projects from '../../assets/projects';
export default function Portfolio() {
  return (
    <Card className="pb-5 pt-5">
    {projects.map((project) => (
      <Project
        name={project.name}
        src={project.src}
        git={project.git}
        live={project.live}
      />
    ))}
  </Card>
  )
}
