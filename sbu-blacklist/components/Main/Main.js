import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Main/Main.scss";

// export class Main extends Component {
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
//     this.tagName = "main";
//     this.className = "main";
//   }
// }
export class Main extends Component {
  constructor({ textContent, html, id, children, events, ...attrs }) {
    super({
      tagName: "main",
      textContent,
      html,
      id,
      children,
      events,
      ...attrs,
    });
    this.className = "main";
  }
}
