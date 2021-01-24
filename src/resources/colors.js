export const COLORS = {
  // whites
  white: '#FFFFFF',
  // blacks
  black: '#000000',
  silver: '#DDDDDD',
  grey: '#AAAAAA',
  // blues
  navy: '#001f3f',
  aqua: '#7FDBFF',
  blue: '#0074D9',
  teal: '#39CCCC',
  //yellow
  yellow: '#FFDC00',
  // reds
  orange: '#FF851B',
  red: '#FF4136',
  maroon: '#85144b',
  pink: '#F012BE',
  purple: '#B10DC9',
  // greens
  green: '#A5FA9E',
  olive: '#3D9970',
  lime: '#01FF70',
};

export const LIST_COLORS = {
  // blues
  navy: '#001f3f',
  aqua: '#7FDBFF',
  blue: '#0074D9',
  teal: '#39CCCC',
  //yellow
  yellow: '#FFDC00',
  // reds
  orange: '#FF851B',
  red: '#FF4136',
  maroon: '#85144b',
  pink: '#F012BE',
  purple: '#B10DC9',
  // greens
  green: '#A5FA9E',
  olive: '#3D9970',
  lime: '#01FF70',
};

/**
 * Adjusts the given hex color by a certain amount
 * @param {String} hexColor The hex color string
 * @param {Number} amount Positive number to lighten, negative to darken
 */
export const adjustColor = (hexColor = '#ffffff', amount = 0) => {
  return (
    '#' +
    hexColor
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2),
      )
  );
};
