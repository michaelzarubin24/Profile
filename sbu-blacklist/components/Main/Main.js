import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Main/Main.scss";

export class Main extends Component {
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
    this.main = document.createElement(tagName ? tagName : "main");
    this.main.className = className;
    this.main.textContent = textContent ? textContent : "";
  }
}
