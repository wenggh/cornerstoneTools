
let defaultColor = 'white',
  activeColor = 'greenyellow',
  fillColor = 'transparent';
let referenceActiveColor = 'greenyellow';

function setFillColor (color) {
  fillColor = color;
}

function getFillColor () {
  return fillColor;
}

function setToolColor (color) {
  defaultColor = color;
}

function getToolColor () {
  return defaultColor;
}

function setActiveColor (color) {
  activeColor = color;
}

function getActiveColor () {
  return activeColor;
}

function getColorIfActive (data) {
  if (data.color) {
    return data.color;
  }

  return data.active ? activeColor : defaultColor;
}

function setReferenceActiveColor (color) {
  referenceActiveColor = color
}

function getReferenceActiveColor () {
  return referenceActiveColor
}

const toolColors = {
  setFillColor,
  getFillColor,
  setToolColor,
  getToolColor,
  setActiveColor,
  getActiveColor,
  getColorIfActive,
  setReferenceActiveColor,
  getReferenceActiveColor
};

export default toolColors;
