// @flow

jest.mock('expo', () => ({
  Constants: {statusBarHeight: 20},
}));

jest.mock('TouchableOpacity', () => 'TouchableOpacity');
jest.mock('TouchableWithoutFeedback', () => 'TouchableWithoutFeedback');
jest.mock('ScrollView', () => 'ScrollView');
jest.mock('Animated', () => ({
  View: 'Animated.View',
  createTimer: jest.fn(),
  timing: jest.fn(() => ({
    start: (callback?: Function) => callback && callback(),
  })),
  Value: class AnimatedValue {
    constructor(value) {
      return {
        interpolate: value,
        __getValue: () => value,
      };
    }
  },
}));
