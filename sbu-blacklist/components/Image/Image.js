import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Image/Image.scss";

export class Image extends Component {
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
    this.image = document.createElement("img");
    this.image.className = className;
    this.image.textContent = textContent ? textContent : "";
  }
}
