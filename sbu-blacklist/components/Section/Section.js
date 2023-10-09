import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Section/Section.scss";

export class Section extends Component {
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
    this.section = document.createElement(tagName ? tagName : "section");
    this.section.className = className;
    this.section.textContent = textContent ? textContent : "";
  }
}
