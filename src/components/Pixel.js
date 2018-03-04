import React from 'react';
import {connect} from 'react-redux';

const Pixel = ({xPosition, yPosition}) => (
  <div
    style={{
      position: 'absolute',
      bottom: `${yPosition + 5}px`,
      left: `${xPosition}px`,
      width: '4px',
      height: '4px',
      backgroundColor: 'pink'
    }}
  />
);

const mapStateToProps = state => ({
  xPosition: state.xPosition,
  yPosition: state.yPosition
});

export default connect(mapStateToProps)(Pixel);
