import chai from 'chai';
import 'jsdom-global/register';
import React from 'react';
import { ProjectsListComponent } from './ProjectsList';
import { shallow, mount } from 'enzyme';
import { ProjectModel, Project } from './Project';

let expect = chai.expect;

describe('<ProjectsList/>', () => {
  let wrapper;
  const one = 1;
  const two = 2;
  it('the component renders', () => {
    const wrapper = shallow(<ProjectsListComponent projects={[]} />);
    expect(wrapper.find('div')).to.have.length(one);
  });

  describe('when no projects are present', () => {
    beforeEach(() => {
      wrapper = shallow(<ProjectsListComponent projects={[]} />);
    });
    it('shows "No projects are active"', () => {
      expect(wrapper.find('.projects')).to.have.length(one);
      expect(wrapper.find('.projects').text()).to.contain('No projects are active');
    });
  });

  describe('when projects are present', () => {
    beforeEach(() => {
      wrapper = mount((<ProjectsListComponent projects={[
        new ProjectModel('some project', ['javascript']),
        new ProjectModel('some other project', ['rails']),
      ]} />));
      wrapper.update();
    });

    it('does not show "No projects are active"', () => {
      expect(wrapper.find('.projects')).to.have.length(one);
      expect(wrapper.find('.projects').text())
        .not.to.contain('No projects are active');
    });

    it('display the project information', () => {
      expect(wrapper.find(Project)).to.have.length(two);
    });

    describe('when more then one project is present', () => {
      it('orders alphabeticaly', () => {
        expect(wrapper.find(Project).at(0).text()).to.contain('some other project');
        expect(wrapper.find(Project).at(1).text()).to.contain('some project');
      });
    });
  });
});