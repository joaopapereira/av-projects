import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import './ProjectsList.scss';
import { ProjectService } from './Project.service';
import { ProjectServiceStub } from './project.service.stub';
const zero = 0;
const biggerThen = 1;
const smallerThen = -1;
const equalTo = 0;

export class ProjectsListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], searchString: '' };
    this.props.projectService.getProjects().then(((projects) => {
      this.setState({ projects: projects });
    }).bind(this));

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    this.setState({ searchString: event.target.value });
  }

  canDisplayProject(project, searchString) {
    if (searchString.length > zero) {
      const searchFor = searchString;
      let foundMatch = false;
      project.tags.forEach((tag) => {
        if (tag.indexOf(searchFor) >= zero) {
          foundMatch = true;
        }
      });
      return foundMatch;
    }
    return true;
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
          if (this.canDisplayProject(project, this.state.searchString)) {
            projects.push(
              <Project projectModel={project} key={index} />
            );
          }
        });
      return projects;
    } else {
      return (<h4>No projects are active</h4>);
    }
  }

  render() {
    const projects = this.renderProject();
    return (
      <div className='listProjects'>
        <div className='listProjects--header'>
          List of Active Projects in Agile Ventures
        </div>
        <div className='listProjects--search'>
          Search languages:&nbsp;
          <input id='language' type='text'
            placeholder='Start typing a language' onChange={this.onSearch} />
        </div>
        <div className='listProjects--projects'>
          {projects}
        </div>
      </div>
    );
  }
}

ProjectsListComponent.propTypes = {
  projectService: PropTypes.oneOfType([
    PropTypes.instanceOf(ProjectService),
    PropTypes.instanceOf(ProjectServiceStub)
  ]).isRequired
};