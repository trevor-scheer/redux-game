import React, {Component} from 'react';
import {connect} from 'react-redux';
import {keyDown, keyUp} from '../actions';

class KeyCatcher extends Component {
  componentDidMount() {
    this.keyCatcher.focus();
  }

  handleKeyDown = e => {
    console.log(e.keyCode);
    this.props.onKeyDown({keyCode: e.keyCode, currentState: this.props.state});
  };

  handleKeyUp = e => {
    this.props.onKeyUp({keyCode: e.keyCode, currentState: this.props.state});
  };

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        tabIndex="0"
        ref={node => {
          this.keyCatcher = node;
        }}
        style={{display: 'inline'}}
      >
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

const mapDispatchToProps = {
  onKeyDown: keyDown,
  onKeyUp: keyUp
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyCatcher);
