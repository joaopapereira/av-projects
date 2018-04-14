import chai from 'chai';
import React from 'react';
import { Project, ProjectModel } from './Project';
import { shallow } from 'enzyme';

let expect = chai.expect;

describe('<ProjectsList/>', () => {
  let wrapper;
  const zero = 0;
  const one = 1;

  describe('project without tags', () => {
    beforeEach(() => {
      wrapper = shallow((<Project projectModel={
        new ProjectModel('some project', [])
      } />));
      wrapper.update();
    });

    it('does not display tags', () => {
      expect(wrapper.find('.project--tag')).to.have.length(zero);
    });

    it('display the project name', () => {
      expect(wrapper.find('.project--name')).to.have.length(one);
      expect(wrapper.find('.project--name').text()).to.equal('some project');
    });
  });

  describe('project has tags', () => {
    beforeEach(() => {
      wrapper = shallow((<Project projectModel={
        new ProjectModel('some project', ['javascript'])
      } />));
    });

    it('display tags', () => {
      expect(wrapper.find('.project--tag')).to.have.length(one);
      expect(wrapper.find('.project--tag').text()).to.contains('javascript');
    });

    it('display the project information', () => {
      expect(wrapper.find('.project--name')).to.have.length(one);
      expect(wrapper.find('.project--name').text()).to.equal('some project');
    });
  });
});