export const setTransform = (x, y, scale) => `translate(${x}px, ${y}px) scale(${scale})`;

export const generateKey = (x, y) => y ? `${y}-${x}` : x; // eslint-disable-line

export const makeArray = entry => Array.isArray(entry) ? entry : [entry]; // eslint-disable-line
