import React from 'react';
import { ProjectsListComponent } from './projects/ProjectsList';
import { ProjectService } from './projects/Project.service';
import avLogo from '../assets/imgs/av-logo-inverse-2.png';
import './app.scss';

export class AVProjectsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.projectService = new ProjectService();
  }

  render() {
    return (
      <div>
        <div className="header">
          <a href='https://www.agileventures.org/' target='new'>
            <img className="avLogo" src={avLogo} alt="AgileVentures" />
          </a>
        </div>
        <div className="appBody">
          <ProjectsListComponent projectService={this.projectService} />
        </div>
      </div>
    );
  }
}