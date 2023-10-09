import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Button/Button.scss";

export class Button extends Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName,
      className,
      textContent,
      html,
      children,
      events,
      ...attrs,
    });
    this.button = document.createElement(tagName ? tagName : "button");
    this.button.className = className;
    this.button.textContent = textContent ? textContent : "";
  }
}
