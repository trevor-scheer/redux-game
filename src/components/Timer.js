import {Children, Component} from 'react';
import {connect} from 'react-redux';
import {tick} from '../actions';
import {GLOBAL_INTERVAL} from '../constants';

class Timer extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.onTick({currentState: this.props.state});
    }, GLOBAL_INTERVAL);
  }

  render() {
    return Children.only(this.props.children);
  }
}

const mapStateToProps = state => ({state});

const mapDispatchToProps = {
  onTick: tick
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
