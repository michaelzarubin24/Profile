import { Component } from "/Users/Intel/Desktop/Profile/sbu-blacklist/core/component";
import "/Users/Intel/Desktop/Profile/sbu-blacklist/components/Footer/Footer.scss";

export class Footer extends Component {
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
    this.footer = document.createElement(tagName ? tagName : "footer");
    this.footer.className = className;
    this.footer.textContent = textContent ? textContent : "";
  }
}
