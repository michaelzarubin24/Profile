import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Header/Header.scss";

// export class Header extends Component {
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
//     this.tagName = "header";
//     this.className = "header";
//   }
// }
export class Header extends Component {
  constructor({ textContent, html, id, children, events, ...attrs }) {
    super({
      tagName: "header",
      textContent,
      html,
      id,
      children,
      events,
      ...attrs,
    });
    this.className = "header";
  }
}
