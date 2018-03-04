const actionCreator = type => payload => ({type, payload});

export const KEY_DOWN = "KEY_DOWN";
export const KEY_UP = "KEY_UP";
export const TICK = "TICK";

export const keyDown = actionCreator(KEY_DOWN);
export const keyUp = actionCreator(KEY_UP);
export const tick = actionCreator(TICK);
