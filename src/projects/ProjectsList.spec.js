import chai from 'chai';
import 'jsdom-global/register';
import React from 'react';
import { ProjectsListComponent } from './ProjectsList';
import { shallow, mount } from 'enzyme';
import { ProjectModel, Project } from './Project';
import { ProjectServiceStub } from './project.service.stub';

let expect = chai.expect;

describe('<ProjectsList/>', () => {
  let wrapper;
  const zero = 0;
  const one = 1;
  const two = 2;
  const timeout = 0;
  const waitTimeForProjectsToLoad = 10;
  let projectServiceStub;
  beforeEach(() => {
    projectServiceStub = new ProjectServiceStub();
  });

  describe('when no projects are present', () => {
    beforeEach(() => {
      projectServiceStub.stubGetProjects(new Promise((resolve) => resolve([])));
      wrapper = shallow(<ProjectsListComponent projectService={projectServiceStub} />);
    });

    it('shows "No projects are active"', () => {
      expect(wrapper.find('.listProjects--projects')).to.have.length(one);
      expect(wrapper.find('.listProjects--projects').text())
        .to.contain('No projects are active');
    });
  });

  describe('when projects are present', () => {
    beforeEach((done) => {
      projectServiceStub.stubGetProjects(new Promise((resolve) => resolve([
        new ProjectModel('some project', ['javascript'], 'description of some project'),
        new ProjectModel('some other project',
          ['rails'], 'description of some other project')
      ])));

      wrapper = mount((<ProjectsListComponent projectService={projectServiceStub} />));
      setTimeout(() => {
        wrapper.update();
        done();
      }, waitTimeForProjectsToLoad);
    });

    it('does not show "No projects are active"', (done) => {
      setTimeout(() => {
        expect(wrapper.find('.listProjects--projects')).to.have.length(one);
        expect(wrapper.find('.listProjects--projects').text())
          .not.to.contain('No projects are active');
        done();
      }, timeout);
    });

    it('displays a search input box', () => {
      expect(wrapper.find('.listProjects--search')).to.have.length(one);
    });

    it('display the project information', (done) => {
      setTimeout(() => {
        expect(wrapper.find(Project)).to.have.length(two);
        done();
      }, timeout);
    });

    describe('when more then one project is present', () => {
      it('orders alphabeticaly', (done) => {
        setTimeout(() => {
          expect(wrapper.find(Project).at(zero).text()).to.contain('some other project');
          expect(wrapper.find(Project).at(one).text()).to.contain('some project');
          done();
        }, timeout);
      });
    });

    describe('when a project is clicked', () => {
      it('displays description', (done) => {
        wrapper.find(Project).at(zero).simulate('click');
        wrapper.update();
        setTimeout(() => {
          expect(wrapper.find(Project).at(zero).text())
            .to.contain('description of some other project');
          done();
        });
      });
    });

    describe('when searching for a tag', () => {
      describe('when match one project tag', () => {
        it('displays only the ones with the search tag', (done) => {
          wrapper.find('.listProjects--search input').simulate('change', {
            target: { value: 'rails' }
          });
          setTimeout(() => {
            wrapper.update();
            expect(wrapper.find(Project)).to.have.length(one);
            expect(wrapper.find(Project).at(zero).text())
              .to.contain('some other project');
            done();
          }, timeout);
        });
      });
      describe('when partially match one project tag', () => {
        it('displays only the ones with the search tag', (done) => {
          wrapper.find('.listProjects--search input').simulate('change', {
            target: { value: 'java' }
          });
          setTimeout(() => {
            wrapper.update();
            expect(wrapper.find(Project)).to.have.length(one);
            expect(wrapper.find(Project).at(zero).text()).to.contain('some project');
            done();
          }, timeout);
        });
      });

      describe('when match no project tag', () => {
        it('displays no project', (done) => {
          wrapper.find('.listProjects--search input').simulate('change', {
            target: { value: 'c++' }
          });
          setTimeout(() => {
            wrapper.update();
            expect(wrapper.find(Project)).to.have.length(zero);
            done();
          }, timeout);
        });
      });
    });
  });
});