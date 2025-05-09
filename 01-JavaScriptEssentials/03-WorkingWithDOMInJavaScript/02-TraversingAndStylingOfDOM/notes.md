# Traversing And Styling Of DOM

## Introduction to Browser Object Model

A structured way to interact with browsers that allows for control of browser behaviour, manipulation of the browser window and access of client-specific information.

### Key components of BOM

<table style="width:100%">
<tr>
</tr>
<tr>
<td style="width:33%">

> Window Object
</td>
<td style="width:33%">

> Document
</td>
<td style="width:33%">

> Navigator
</td>
</tr>
<tr>
<td>

> Screen

</td>
<td>

> History

</td>
<td>

> Location

</td>
</tr>
<tr>
<td></td><td></td><td></td>
</tr>
</table>

### The Window Object

The Global Window object represents the browser window or tab, and serves as the root of the BOM. All Global JavaScript objects and functions are part of the window object.

| Properties and Methods | Description |
| :- | :- |
| `window.alert (message)` |  displays a simple alert dialogue |
| `window.confirm (message)` | shows a confirmation dialogue |
| `window.open (url, name, specs, replace)` |  opens a new browser window or tab |
| `window.close()` | closes the current window |
| `window.location()` | manipulate the current URL |
| `setTimeout` | delayed function execution |
| `localStorage` <br> and <br> `sessionStorage` | storage options for client-side data |
| `window.history` | access to the browser's session history |

### The Document and Navigator Objects

While the document object is primarily part of the document Object model DOM,
closely related to the BOM, it represents the web page within the browser window.

The navigator object gives information about the client's browser, including the browser's name, version, and supported features.

```javascript
const browsername = navigator.appName;
const browserVersion = navigator.appVersion;
```

#### Screen and History Objects

<table style="width:100%">
<tr>
<td style="width:50%">

#### Screen Object

provides user screen details

```javascript
const screenWidth = screen.width;
const screenHeight = screen.height;
```

</td>
<td style="width:50%">

#### History Object

Represents the browser's session history

```javascript
history.back();     // navigates back one page
history.forward();  // navigates forward one page
```

</td>
</tr>
</table>

### The Location Object

Provides current URL information and can manipulate the U RL

```javascript
const currentURL = location.href;
location.href = "https://example.com";  // redirects the user to https://example.com
```

### BOM Use Cases

The browser object model proves versatile in various scenarios:
- interaction through alerts and confirmations
- window control,
- navigation between web pages,
- accessing client information,
- data storage using local storage and session storage.

## Traversing The DOM

To aid in navigating and manipulating the structure and content of an HTLM document multiple techniques are offered

```html
<html>
    <h1>Example</h1>
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    </ul>
<html>
```

### Navigating Parent And Child Elements

Navigating from parent to child and vice versa is a vertical move within the hierarchical structure of the DOM

In The above example the `<li>` elements are children of the `<ul>` element which is, in turn the parent to the list items.

```javascript
// using parentNode to get the ul node
const child = document.querySelector("li");
const derivedParent = child.parentNode;

// using childNodes returns a list of all nodes including #text, #comment, etc
const parent = document.querySelector("ul");
const allChildNodes = parent.childNodes;
// allChildNodes = NodeList [#text, li, #text, li, #text, li, #text]

// firstChild and lastChild return the first and last nodes from the
// childNodes NodeList
const firstChild = parent.firstChild;   // #text "\n    "
const lastChild = parent.lastChild;     // #text "\n"

// using children will return a list of only elements
const children = parent.children;
// children = HTMLCollection { 0: li, 1: 1l, 2: li }

// firstElementChild and lastElementChild return the first and last element
// from the children collection
const firstElementChild = parent.firstElementChild;
const lastElementChild = parent.lastElementChild;
console.log(firstElementChild.textContent); // "First Item"
console.log(lastElementChild.textContent);  // "Third Item"
```

### Navigating Sibling Elements

Navigating between siblings is a horizontal move within the hierarchical structure of the DOM at the current hierarchical level.

In The above example the `<li>` elements are all siblings of each other while the `<h1>` element is a sibling to the `<ul>` and vice versa.

```javascript
const firstSibling = document.querySelector("ul");

// using nextSibling and previousSibling return the next nodes including #text,
// #comment, etc
const nextSibling = firstSibling.nextSibling;   // #text "\n\n"
const previousSibling = firstSibling.previousSibling; //#text "\n"

// suing nextElementSibling and previousElementSibling returns the next element
const nextElementSibling = firstSibling.nextElementSibling; // <script>
const previousElementSibling = firstSibling.previousElementSibling; // <h1>

// if there are no more siblings the properties return null
const noMoreSiblings = nextElementSibling.nextElementSibling;   // null
```

### Finding Elements Within A Container

Search and access specific items inside a parent or container element

- `containerElement.querySelector(selector)`: first element that matches the selector inside the containerElement
- `containerElement.querySelectorAll(selector)`: NodeList of all elements that match the selector inside the containerElement; empty list if no match found

## Styling The DOM

### Naming Conventions

- __element.style.property:__ Access and modify inline styles.
    ```javascript
    const button = document.getElementById("myButton");
    button.style.backgroundColor = "blue";
    button.style.fontSize = "16px";
    ```
- __element.classList:__ Add, remove or toggle CSS Classes.
    ```javascript
    const button = document.getElementById("myButton");
    button.classList.add("newClass");
    button.classList.remove("oldClass");
    button.classList.toggle("class");

    if (button.classList.contains("class")) {
        button.style.backgroundColor = "green";
    }
    ```
- __element.setAttribute:__ Set or modify style attributes using inline CSS.
    ```javascript
    const button = document.getElementById("myButton");
    button.setAttribute("style", "backgroundColor: yellow; color: black;");
    ```
- __element.style.cssText:__ Set the inline style of an element using a string.
    ```javascript
    const button = document.getElementById("myButton");
    button.style.cssText = "backgroundColor: black; color: white;";
    ```
- __element.style.setProperty:__ Set CSS property with, optional, important flag. The important rule in CSS is used to add more importance to a property/value than normal.  It overrides __ALL__ previous styling rules for that specific property on that element.
    ```javascript
    const button = document.getElementById("myButton");
    button.style.setProperty("color", "red", "important");
    ```
- __element.style.removeProperty:__ Remove CSS properties from the inline style.
    ```javascript
    const button = document.getElementById("myButton");
    button.removeProperty("color");
    ```
