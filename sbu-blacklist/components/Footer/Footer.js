import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Footer/Footer.scss";

// export class Footer extends Component {
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
//     this.tagName = "footer";
//     this.className = "footer";
//   }
// }
export class Footer extends Component {
  constructor({ textContent, html, id, children, events, ...attrs }) {
    super({
      tagName: "footer",
      textContent,
      html,
      id,
      children,
      events,
      ...attrs,
    });
    this.className = "footer";
  }
}
