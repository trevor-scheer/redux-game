export const GLOBAL_INTERVAL = 10;

const A = -2.66;
const B = 0.3;
const C = 0.001;

export const ACCELERATION =
  -1 * (A + B * GLOBAL_INTERVAL + C * Math.pow(GLOBAL_INTERVAL, 2));

export const JUMP_VELOCITY = 2 * GLOBAL_INTERVAL;
export const HORIZONTAL_VELOCITY = 0.25 * GLOBAL_INTERVAL;
export const LASER_VELOCITY = 2;

export const SCREEN_WIDTH = 400;
export const SCREEN_HEIGHT = 400;

export const keyCodes = {
  ENTER: 13,
  SPACE: 32,
  L_ARROW: 37,
  R_ARROW: 39,
  F_KEY: 70
};
