import React from 'react';
import PropTypes from 'prop-types';
import { Project, ProjectModel } from './Project';
import './ProjectsList.scss';

export class ProjectsListComponent extends React.Component{
  renderProject() {
    if (this.props.projects.length > 0) {
      let projects = [];
      this.props.projects
        .sort((project, otherProject) => {
          if(project.name > otherProject.name) {
            return 1;
          } else if(project.name < otherProject.name) {
            return -1;
          }
          return 0;
        })
        .forEach((project, index) => {
          projects.push(
            <Project projectModel={project} key={index} />
          );
      });
      return projects;
    } else {
      return (<h4>No projects are active</h4>);
    }
  }

  render(){
    const projects = this.renderProject();
    return (
      <div className='listProjects'>
        <div className='listProjects--header'>
        List of Active Projects in Agile Ventures
        </div>
        <div className='listProjects--projects'>
          {projects}
        </div>
      </div>
    );
  }
}

ProjectsListComponent.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(ProjectModel)).isRequired
};