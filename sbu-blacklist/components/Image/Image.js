import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Image/Image.scss";

// export class Image extends Component {
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
export class Image extends Component {
  constructor({
    tagName,
    className,
    src,
    alt,
    id,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName: tagName || "img",
      className,
      id,
      children,
      events,
      ...attrs,
    });
    this.src = src;
    this.alt = alt;
  }

  toHTML() {
    // Create and return the <img> element
    this.element = document.createElement(this.tagName);
    this.element.className = this.className;

    if (this.tagName === "img") {
      this.element.src = this.src;
      this.element.alt = this.alt;
    }

    return this.element;
  }
}
