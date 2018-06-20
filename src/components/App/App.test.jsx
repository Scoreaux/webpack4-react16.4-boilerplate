import React from 'react';

import App from './App';

test('Component mounts', () => {
  const component = shallow(<App />);
  expect(component.exists()).toBe(true);
});

// Ensures that CSS modules are properly renamed for testing
test('Wrapping div contains CSS class', () => {
  const component = shallow(<App />);
  expect(component.find('.container')).toHaveLength(1);
});
