import React from 'react';
import PropTypes from 'prop-types';

export class ProjectModel {
  constructor(name, tags, description) {
    this.name = name;
    this.tags = tags;
    this.description = description;
  }
}

export class Project extends React.Component {
  renderTags() {
    let allTagsRows = [];
    this.props.projectModel.tags.forEach((tag, index) => {
      allTagsRows.push(
        <div className='project--tag' key={index}>
          <span>#</span>
          {tag}
        </div>
      );
    });
    return allTagsRows;
  }

  renderDescription() {
    if (this.props.open) {
      return (
        <div className='project--description'>
          {this.props.projectModel.description}
        </div>
      );
    }
  }

  render() {
    const tags = this.renderTags();
    const description = this.renderDescription();

    return (
      <div className='project' onClick={this.props.onClick}>
        <div className='project--name'>
          {this.props.projectModel.name}
        </div>
        {description}
        <div className='tags'>
          {tags}
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  projectModel: PropTypes.instanceOf(ProjectModel).isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};