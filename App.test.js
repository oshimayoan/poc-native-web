// @flow

import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('./App', () => 'App');

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
