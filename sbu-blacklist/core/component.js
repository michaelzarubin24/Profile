import { append } from "../core/render";

export class Component {
  // !Constructor accepts an object with various properties
  constructor({
    tagName, // HTML tag name for the element
    textContent, // Text content to be placed inside the element
    html, // Object containing HTML to be inserted (position and text)
    className, // CSS class name for the element
    id, // HTML id attribute for the element
    children, // Array of child Component instances
    events, // Object containing event listeners
    ...attrs // Any additional attributes to be set on the element
  }) {
    this.tagName = tagName;
    this.textContent = textContent;
    this.html = html;
    this.id = id;
    this.className = className;
    this.children = children;
    this.events = events;
    this.attrs = attrs;
    this.element = null;
  }

  // !Method to convert the Component to an HTML element
  toHTML() {
    // Create a new HTML element using the specified tagName
    this.element = document.createElement(this.tagName);

    // Set the class name for the element
    this.element.className = this.className;

    // Set the text content of the element
    this.element.textContent = this.textContent;

    // Insert HTML if provided (e.g., beforebegin, afterbegin, beforeend, afterend)
    this.html &&
      this.element.insertAdjacentHTML(this.html.position, this.html.text);

    // Set the id attribute if provided
    if (this.id) {
      this.element.id = this.id;
    }

    // Add event listeners if specified
    if (this.events) {
      for (const event in this.events) {
        const action = this.events[event];
        this.element.addEventListener(event, action);
      }
    }

    // Append child elements if specified
    if (this.children) {
      for (const child of this.children) {
        append(child, this.element);
      }
    }

    // Set additional attributes on the element if provided
    if (this.attrs) {
      for (const key in this.attrs) {
        const value = this.attrs[key];
        this.element.setAttribute(key, value);
      }
    }

    // Return the generated HTML element
    return this.element;
  }
}
