import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders Hello, visitor if the text input is blank', () => {
  const name = '';
  const header = shallow(<Header name={name} />);
  expect(header.text()).toBe('Hello, visitor');
});

it('renders Hello, Sean if the name prop is Sean', () => {
  const name = 'Sean';
  const header = shallow(<Header name={name} />);
  expect(header.text()).toBe(`Hello, ${name}`);
});

it('renders Hello, lorem ipsum the 3rd', () => {
  const name = 'lorem ipsum the 3rd';
  const header = shallow(<Header name={name} />);
  expect(header.text()).toBe(`Hello, ${name}`);
});
