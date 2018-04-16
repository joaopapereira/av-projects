import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import './ProjectsList.scss';
import { ProjectService } from './Project.service';
const zero = 0;
const biggerThen = 1;
const smallerThen = -1;
const equalTo = 0;

export class ProjectsListComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {projects: []};
    this.props.projectService.getProjects().then(((projects) => {
      this.setState({projects: projects});
    }).bind(this));
  }

  renderProject() {
    if (this.state.projects.length > zero) {
      let projects = [];
      this.state.projects
        .sort((project, otherProject) => {
          if (project.name > otherProject.name) {
            return biggerThen;
          } else if (project.name < otherProject.name) {
            return smallerThen;
          }
          return equalTo;
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
  projectService: PropTypes.instanceOf(ProjectService).isRequired
};