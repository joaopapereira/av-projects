import { ProjectModel } from './Project';

const allProjects = [
  new ProjectModel('MetPlus', ['javascript', 'jquery', 'rails', 'ruby']),
  new ProjectModel('Local Support', ['javascript', 'rails', 'ruby']),
  new ProjectModel('SHF Project', ['javascript', 'rails', 'ruby']),
  new ProjectModel('Widi Edu Dash Collaboration', ['react', 'rails', 'ruby']),
  new ProjectModel('Website One', ['javascript', 'rails', 'ruby']),
  new ProjectModel('Website Two', ['middleman', 'javascript']),
  new ProjectModel('RundFunk Mitbestimmen', ['ember', 'rails', 'ruby']),
  new ProjectModel('Async Voter', ['node']),
  new ProjectModel('Bots', ['node']),
  new ProjectModel('Open Peer Power', ['node', 'rails', 'ruby']),
  new ProjectModel('Autograders', ['ruby']),
  new ProjectModel('Paronauts', ['elixir', 'phoenix']),
  new ProjectModel('Phoenix One', ['react', 'elixir']),
  new ProjectModel('Y', ['ethereum', 'elm', 'javascript']),
  new ProjectModel('Data Mining', ['r', 'python'])
];

export class ProjectService {
  getProjects() {
    return new Promise((resolve) => {
      resolve(allProjects);
    });
  }
}