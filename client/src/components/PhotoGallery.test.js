import React from 'react';
import { shallow } from 'enzyme';
import PhotoGallery from './PhotoGallery';

it('should render the h1', () => {
  const wrapper = shallow(<PhotoGallery />);
  const h1 = wrapper.find('h1');
  const result = h1.text();
  expect(result).toBe('Xill0w');
})

// it('should render the leading photo', () => {
//   const wrapper = shallow(<PhotoGallery />);
//   const a = wrapper.find('a.lead');
//   const result = a.text();
//   expect(result).toBe('Leading Photo');
// })

// it('should render the rest of the list', () => {
//   const wrapper = shallow(<PhotoGallery />);
//   const a = wrapper.find('a.list');
//   const result = a.text();
//   expect(result).toBe('Photo List');
// })
