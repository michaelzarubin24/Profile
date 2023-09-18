import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Input/Input.scss";

// export class Input extends Component {
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
//     this.tagName = "input";
//     this.className = ["input", className];
//     this.id = "input-search";
//   }
// }
export class Input extends Component {
  constructor({
    textContent,
    html,
    className,
    id,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName: "input",
      textContent,
      html,
      className: ["input", className], // Using an array for className
      id: "input-search",
      children,
      events,
      ...attrs,
    });
  }
}
