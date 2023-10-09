import { Component } from "../sbu-blacklist/core/component";
import { App as Application } from "./App";
import { append, prepend, appendMany, render } from "./core/render";
import {
  Button,
  Header,
  Main,
  Section,
  Image,
  Input,
  Footer,
} from "./components/index";
import "./styles/style.scss";

const app = document.querySelector("body");

const infoPanel = [
  {
    tagName: "div",
    className: "name",
    textContent: "name",
  },
  {
    tagName: "div",
    className: "surname",
    textContent: "surname",
  },
  {
    tagName: "div",
    className: "birthday",
    textContent: "birthday",
  },
  {
    tagName: "div",
    className: "status",
    textContent: "status",
  },
  {
    tagName: "div",
    className: "crime",
    textContent: "crime",
  },
  {
    tagName: "div",
    className: "location",
    textContent: "location",
  },
].map((info) => {
  return new Component({
    tagName: info.tagName,
    className: info.className,
    textContent: info.textContent,
  }).toHTML();
});

const titles = [
  {
    tagName: "div",
    className: "header-title",
    textContent: "WANTED",
  },
  {
    tagName: "div",
    className: "footer-title",
    textContent: "ABOUT",
  },
].map((title) => {
  return new Component({
    tagName: title.tagName,
    className: title.className,
    textContent: title.textContent,
  }).toHTML();
});

const input = new Input({
  tagName: "input",
  className: "input-search",
  id: "input-id",
  type: "text",
  name: "search",
}).toHTML();
debugger;

const footer = new Footer({
  tagName: "footer",
  className: "footer",
  children: [
    new Section({
      tagName: "section",
      className: "footer-info",
      children: [
        titles[1],
        new Component({
          tagName: "p",
          className: "footer-description",
          textContent: "Information about this criminal is classified",
          children: "",
        }).toHTML(),
      ],
    }).toHTML(),
    new Section({
      tagName: "section",
      className: "footer-stamp",
      children: [
        new Image({
          tagName: "img",
          className: "stamp",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Security_Service_of_Ukraine_Emblem.svg/200px-Security_Service_of_Ukraine_Emblem.svg.png",
          alt: "-",
        }).toHTML(),
        "",
      ],
    }).toHTML(),
  ],
}).toHTML();

const main = new Main({
  tagName: "main",
  className: "main",
  children: [
    new Section({
      tagName: "section",
      className: "main-photo",
      children: [
        new Component({
          tagName: "div",
          className: "main-wrapper",
          html: {
            position: "afterbegin",
            text: '<img src="https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-6-1/128/profile-image-male-question-512.png" alt="+" class="photo" />',
          },
          children: "",
        }).toHTML(),
        new Component({
          tagName: "div",
          className: "icon-wrapper",
          children: "",
        }).toHTML(),
      ],
    }).toHTML(),
    new Section({
      tagName: "section",
      className: "main-info",
      children: [...infoPanel],
    }).toHTML(),
  ],
}).toHTML();

const header = new Header({
  tagName: "header",
  className: "header",
  children: [
    titles[0],
    input,

    new Component({
      tagName: "div",
      className: "icon-wrapper",
      html: {
        position: "beforeend",
        text: '<img src="https://www.iconpacks.net/icons/2/free-search-icon-2907-thumb.png" alt="+" class="icon" />',
      },
      children: [
        new Button({
          tagName: "button",
          className: "header-btn",
          type: "submit",
          textContent: "find",
        }).toHTML(),
        "",
      ],
    }).toHTML(),
  ],
}).toHTML();

const App = new Application({
  tagName: "div",
  className: "app",
  children: [header, main, footer],
}).toHTML();

console.log("[Input]", input);
console.log("[Footer]", footer);
console.log("[Main]", main);
console.log("[Header]", header);
console.log("[App]", App);
prepend(app, App);

// const iconWrapper = new Component({
//   tagName: "div",
//   className: "icon-wrapper",
//   children: [new Image({}).toHTML()],
// }).toHTML();
