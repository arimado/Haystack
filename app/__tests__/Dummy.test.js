// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import Dummy from '../components/intro/Dummy.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Dummy />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
