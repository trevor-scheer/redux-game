import {combineReducers} from 'redux';
import {uniqueId} from './utils';
import {KEY_DOWN, KEY_UP, TICK} from './actions';
import {
  keyCodes,
  ACCELERATION,
  JUMP_VELOCITY,
  HORIZONTAL_VELOCITY,
  LASER_VELOCITY,
  SCREEN_WIDTH
} from './constants';

const game = combineReducers({
  isJumping(state = false, {type, payload}) {
    switch (type) {
      case KEY_DOWN:
        return payload.keyCode === keyCodes.SPACE ? true : state;
      case TICK:
        return payload.currentState.yVelocity + ACCELERATION > 0;
      default:
        return state;
    }
  },
  yVelocity(state = 0, {type, payload}) {
    switch (type) {
      case TICK:
        if (
          !payload.currentState.isJumping &&
          payload.currentState.yPosition + state <= 0
        ) {
          return 0;
        }
        return state + ACCELERATION;
      case KEY_DOWN:
        return !payload.currentState.isJumping &&
          payload.keyCode === keyCodes.SPACE
          ? JUMP_VELOCITY
          : state;
      default:
        return state;
    }
  },
  yPosition(state = 0, {type, payload}) {
    switch (type) {
      case TICK:
        if (state < 0) {
          return 0;
        } else {
          return state + payload.currentState.yVelocity > 0
            ? state + payload.currentState.yVelocity
            : 0;
        }
      default:
        return state;
    }
  },
  xVelocity(state = 0, {type, payload}) {
    switch (type) {
      case KEY_DOWN:
        switch (payload.keyCode) {
          case keyCodes.L_ARROW:
            return -HORIZONTAL_VELOCITY;
          case keyCodes.R_ARROW:
            return HORIZONTAL_VELOCITY;
          default:
            return state;
        }
      case KEY_UP:
        switch (payload.keyCode) {
          case keyCodes.L_ARROW:
          case keyCodes.R_ARROW:
            return 0;
          default:
            return state;
        }
      default:
        return state;
    }
  },
  xPosition(state = 0, {type, payload}) {
    switch (type) {
      case TICK:
        const newX = state + payload.currentState.xVelocity;
        if (newX <= 0) {
          return 0;
        } else if (newX >= SCREEN_WIDTH) {
          return SCREEN_WIDTH;
        } else {
          return newX;
        }
      default:
        return state;
    }
  },
  lasers(state = [], {type, payload}) {
    switch (type) {
      case KEY_DOWN:
        return payload.keyCode === keyCodes.ENTER ||
          payload.keyCode === keyCodes.F_KEY
          ? [
              ...state,
              {
                id: uniqueId(),
                xPosition: payload.currentState.xPosition,
                yPosition: payload.currentState.yPosition
              }
            ]
          : state;
      case TICK:
        //return state;
        return state.reduce((lasers, laser) => {
          if (laser.xPosition + LASER_VELOCITY < SCREEN_WIDTH) {
            lasers.push({
              ...laser,
              xPosition: laser.xPosition + LASER_VELOCITY
            });
          }
          return lasers;
        }, []);
      default:
        return state;
    }
  }
});

export default game;
