export class ProjectServiceStub {
  constructor() {
    this.listOfProjects = null;
  }

  getProjects() {
    return this.listOfProjects;
  }

  stubGetProjects(listOfProjectsPromise){
    this.listOfProjects = listOfProjectsPromise;
  }
}