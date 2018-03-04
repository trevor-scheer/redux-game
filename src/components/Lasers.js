import React from 'react';
import {connect} from 'react-redux';
import {lens} from '../utils';

const Lasers = props => (
  <div style={{height: '100%', width: '100%', position: 'relative'}}>
    {props.lasers.map(laser => (
      <span
        key={laser.id}
        style={{
          height: '1px',
          width: '5px',
          position: 'absolute',
          bottom: `${laser.yPosition + 5}px`,
          left: `${laser.xPosition}px`,
          backgroundColor: 'red'
        }}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  lasers: state.lasers
});

export default connect(mapStateToProps)(Lasers);
