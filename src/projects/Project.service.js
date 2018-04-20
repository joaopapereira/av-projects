import { ProjectModel } from './Project';

const allProjects = [
  new ProjectModel('MetPlus', ['javascript', 'jquery', 'rails', 'ruby'],
    'MetPlus description'),
  new ProjectModel('Local Support', ['javascript', 'rails', 'ruby'],
    'Localsupport description'),
  new ProjectModel('SHF Project', ['javascript', 'rails', 'ruby'],
    'SHF description'),
  new ProjectModel('Widi Edu Dash Collaboration', ['react', 'rails', 'ruby'],
    'WikiEdu description'),
  new ProjectModel('Website One', ['javascript', 'rails', 'ruby'],
    'Website one description'),
  new ProjectModel('Website Two', ['middleman', 'javascript'],
    'website two description'),
  new ProjectModel('RundFunk Mitbestimmen', ['ember', 'rails', 'ruby'],
    'Rundfunk description'),
  new ProjectModel('Async Voter', ['node'],
    'Async voter description'),
  new ProjectModel('Bots', ['node'],
    'Bots description'),
  new ProjectModel('Open Peer Power', ['node', 'rails', 'ruby'],
    'Open Peer Power description'),
  new ProjectModel('Autograders', ['ruby'],
    'Autograders description'),
  new ProjectModel('Paronauts', ['elixir', 'phoenix'],
    'Paronauts description'),
  new ProjectModel('Phoenix One', ['react', 'elixir'],
    'Phoenix one description'),
  new ProjectModel('Y', ['ethereum', 'elm', 'javascript'],
    'Y description'),
  new ProjectModel('Data Mining', ['r', 'python'],
    'Data mining description')
];

export class ProjectService {
  getProjects() {
    return new Promise((resolve) => {
      resolve(allProjects);
    });
  }
}