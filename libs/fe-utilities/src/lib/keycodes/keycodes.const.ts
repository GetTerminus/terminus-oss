export const BACKSPACE = 8;
export const TAB = 9;
export const ENTER = 13;
export const ESCAPE = 27;
export const SPACE = 32;
export const PAGE_UP = 33;
export const PAGE_DOWN = 34;
export const END = 35;
export const HOME = 36;
export const LEFT_ARROW = 37;
export const UP_ARROW = 38;
export const RIGHT_ARROW = 39;
export const DOWN_ARROW = 40;
export const DELETE = 46;
export const ZERO = 48;
export const ONE = 49;
export const TWO = 50;
export const THREE = 51;
export const FOUR = 52;
export const FIVE = 53;
export const SIX = 54;
export const SEVEN = 55;
export const EIGHT = 56;
export const NINE = 57;
export const A = 65;
export const B = 66;
export const C = 67;
export const D = 68;
export const E = 69;
export const F = 70;
export const G = 71;
export const H = 72;
export const I = 73;
export const J = 74;
export const K = 75;
export const L = 76;
export const M = 77;
export const N = 78;
export const O = 79;
export const P = 80;
export const Q = 81;
export const R = 82;
export const S = 83;
export const T = 84;
export const U = 85;
export const V = 86;
export const W = 87;
export const X = 88;
export const Y = 89;
export const Z = 90;
export const COMMA = 188;

export interface KeyCode {
  code: string;
  keyCode: number;
}

export const KEYS: Record<string, KeyCode> = {
  BACKSPACE: {
    code: 'Backspace',
    keyCode: 8,
  },
  TAB: {
    code: 'Tab',
    keyCode: 9,
  },
  ENTER: {
    code: 'Enter',
    keyCode: 13,
  },
  ESCAPE: {
    code: 'Escape',
    keyCode: 27,
  },
  SPACE: {
    code: 'Space',
    keyCode: 32,
  },
  PAGE_UP: {
    code: 'PageUp',
    keyCode: 33,
  },
  PAGE_DOWN: {
    code: 'PageDown',
    keyCode: 34,
  },
  END: {
    code: 'End',
    keyCode: 35,
  },
  HOME: {
    code: 'Home',
    keyCode: 36,
  },
  LEFT_ARROW: {
    code: 'ArrowLeft',
    keyCode: 37,
  },
  UP_ARROW: {
    code: 'ArrowUp',
    keyCode: 38,
  },
  RIGHT_ARROW: {
    code: 'ArrowRight',
    keyCode: 39,
  },
  DOWN_ARROW: {
    code: 'ArrowDown',
    keyCode: 40,
  },
  DELETE: {
    code: 'Delete',
    keyCode: 46,
  },
  ZERO: {
    code: 'Digit0',
    keyCode: 48,
  },
  ONE: {
    code: 'Digit1',
    keyCode: 49,
  },
  TWO: {
    code: 'Digit2',
    keyCode: 50,
  },
  THREE: {
    code: 'Digit3',
    keyCode: 51,
  },
  FOUR: {
    code: 'Digit4',
    keyCode: 52,
  },
  FIVE: {
    code: 'Digit5',
    keyCode: 53,
  },
  SIX: {
    code: 'Digit6',
    keyCode: 54,
  },
  SEVEN: {
    code: 'Digit7',
    keyCode: 55,
  },
  EIGHT: {
    code: 'Digit8',
    keyCode: 56,
  },
  NINE: {
    code: 'Digit9',
    keyCode: 57,
  },
  A: {
    code: 'KeyA',
    keyCode: 65,
  },
  B: {
    code: 'KeyB',
    keyCode: 66,
  },
  C: {
    code: 'KeyC',
    keyCode: 67,
  },
  D: {
    code: 'KeyD',
    keyCode: 68,
  },
  E: {
    code: 'KeyE',
    keyCode: 69,
  },
  F: {
    code: 'KeyF',
    keyCode: 70,
  },
  G: {
    code: 'KeyG',
    keyCode: 71,
  },
  H: {
    code: 'KeyH',
    keyCode: 72,
  },
  I: {
    code: 'KeyI',
    keyCode: 73,
  },
  J: {
    code: 'KeyJ',
    keyCode: 74,
  },
  K: {
    code: 'KeyK',
    keyCode: 75,
  },
  L: {
    code: 'KeyL',
    keyCode: 76,
  },
  M: {
    code: 'KeyM',
    keyCode: 77,
  },
  N: {
    code: 'KeyN',
    keyCode: 78,
  },
  O: {
    code: 'KeyO',
    keyCode: 79,
  },
  P: {
    code: 'KeyP',
    keyCode: 80,
  },
  Q: {
    code: 'KeyQ',
    keyCode: 81,
  },
  R: {
    code: 'KeyR',
    keyCode: 82,
  },
  S: {
    code: 'KeyS',
    keyCode: 83,
  },
  T: {
    code: 'KeyT',
    keyCode: 84,
  },
  U: {
    code: 'KeyU',
    keyCode: 85,
  },
  V: {
    code: 'KeyV',
    keyCode: 86,
  },
  W: {
    code: 'KeyW',
    keyCode: 87,
  },
  X: {
    code: 'KeyX',
    keyCode: 88,
  },
  Y: {
    code: 'KeyY',
    keyCode: 89,
  },
  Z: {
    code: 'KeyZ',
    keyCode: 90,
  },
  COMMA: {
    code: 'Comma',
    keyCode: 188,
  },
};
