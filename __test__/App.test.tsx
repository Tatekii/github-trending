import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('测试App根组件', () => {
  it('App组件被渲染', async () => {
    const {findAllByText} = render(<App />);
    const welcome = findAllByText('Welcome');
    expect(welcome).toBeTruthy();
  });
});
