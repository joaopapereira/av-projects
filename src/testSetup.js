import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// import jsdom from 'jsdom';

// const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.document = document;
// global.window = document.defaultView;