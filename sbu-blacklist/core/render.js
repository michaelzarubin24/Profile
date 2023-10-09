// !Utility function to append a component to a destination point

export const append = (component, destPoint) => {
  component.append(destPoint);
};

export const prepend = (component, destPoint) => {
  component.prepend(destPoint);
};

export const appendMany = (component, destPoints) => {
  component.append(...destPoints);
};
// !Utility function to render a new component inside a specified node, replacing existing content

export const render = (newComp, node) => {
  // Clear the existing content of the 'node' element
  [...node.children].forEach((el) => {
    el.remove();
  });

  node.append(newComp);
};
