import React from 'react';
import PropTypes from 'prop-types';

export class ProjectModel {
  constructor(name, tags) {
    this.name = name;
    this.tags = tags;
  }
}

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.projectModel};
  }

  renderTags() {
    let allTagsRows = [];
    this.state.project.tags.forEach((tag, index) => {
      allTagsRows.push(
        <div className='project--tag' key={index}>
          <span>#</span>
          {tag}
        </div>
      );
    });
    return allTagsRows;
  }
  render() {
    const tags = this.renderTags();

    return (
      <div className='project'>
        <div className='project--name'>
          {this.state.project.name}
        </div>
        <div className='tags'>
          {tags}
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  projectModel: PropTypes.instanceOf(ProjectModel).isRequired
};