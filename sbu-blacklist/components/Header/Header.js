import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Header/Header.scss";

export class Header extends Component {
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
    this.header = document.createElement(tagName ? tagName : "header");
    this.header.className = className;
    this.header.textContent = textContent ? textContent : "";
  }
}
