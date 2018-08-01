export const getRect = (el) => {
  let rect = {};
  if(el && el.getBoundingClientRect) {
    rect = el.getBoundingClientRect();
  }
  return rect;
};