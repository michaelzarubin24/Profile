"use strict";
import { Component } from "../sbu-blacklist/core/component";
import { App } from "./App";
import { append, render } from "./core/render";
import { Footer, Header, Icon, Image, Input, Main } from "./components/index";
import "./styles/style.scss";

const root = document.body;

const header = new Header({
  children: [
    new Component({
      tagName: "div",
      className: "title",
      textContent: "BLACKLIST",
    }).toHTML(),
    new Input({
      type: "text",
      name: "search",
      id: "input-search",
      placeholder: "search",
    }).toHTML(),
    new Component({
      tagName: "div",
      className: "icon-wrapper",
      children: [
        new Icon({
          tagName: "img",
          className: "icon",
          src: "#",
          alt: "Icon Description",
        }).toHTML(),
      ],
    }),
  ],
  html: {
    position: "beforebegin",
    text: "<header>This is a header</header>",
  },
});

const main = new Main({
  children: [
    new Component({
      tagName: "section",
      className: "main-photo",
      children: [
        new Component({
          tagName: "div",
          className: "main-wrapper",
          children: [
            new Icon({
              tagName: "img",
              className: "photo",
              src: "#",
              alt: "+",
            }).toHTML(),
          ],
        }),
      ],
    }),
    new Component({
      tagName: "section",
      className: "main-info",
      children: [
        new Component({
          tagName: "div",
          className: "name",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "surname",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "date",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "status",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "crime",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "lastseen",
        }).toHTML(),
      ],
    }),
  ],
  html: {
    position: "afterbegin",
    text: "<main>This is the main content</main>",
  },
});

const footer = new Footer({
  children: [
    new Component({
      tagName: "div",
      className: "footer-about",
      children: [
        new Component({
          tagName: "div",
          className: "footer-title",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "footer-description",
        }).toHTML(),
      ],
    }),
    new Component({
      tagName: "div",
      className: "footer-stamp",
      children: [
        new Icon({
          tagName: "img",
          className: "stamp",
          src: "+",
          alt: "+",
        }).toHTML(),
      ],
    }),
  ],
  html: {
    position: "afterend",
    text: "<footer>This is the footer</footer>",
  },
});

const headerElement = header.toHTML();
const mainElement = main.toHTML();
const footerElement = footer.toHTML();

header.appendChildren();
main.appendChildren();
footer.appendChildren();

const app = new App({
  tagName: "div",
  id: "app",
  children: [headerElement, mainElement, footerElement],
}).toHTML();

append(app, root);
console.log(app);
