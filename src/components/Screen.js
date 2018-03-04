import React from 'react';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants';

const Screen = ({children}) => (
  <div
    style={{
      display: 'inline-block',
      position: 'relative',
      height: `${SCREEN_HEIGHT}px`,
      width: `${SCREEN_WIDTH}px`,
      backgroundColor: 'black'
    }}
  >
    {children}
  </div>
);

export default Screen;
