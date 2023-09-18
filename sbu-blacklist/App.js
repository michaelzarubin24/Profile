import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";

// export class App extends Component {
//   constructor({
//     tagName,
//     textContent,
//     html,
//     className,
//     id,
//     children,
//     events,
//     ...attrs
//   }) {
//     super({
//       tagName,
//       textContent,
//       html,
//       className,
//       id,
//       children,
//       events,
//       ...attrs,
//     });
//   }
// }

export class App extends Component {
  constructor({
    tagName,
    textContent,
    html,
    className,
    id,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName: tagName || "div", // Default to "div" if not provided
      textContent,
      html,
      className,
      id,
      children,
      events,
      ...attrs,
    });
  }
}
