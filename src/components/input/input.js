import { createElement } from "../../utils/elements";

export function createInputElement(props) {
  const inputElement = createElement("input", {
    className: "input__text",
    type: props.type,
    placeholder: props.placeholder,
  });

  const inputImage = createElement("img", {
    className: "input__img",
    src: props.image,
    alt: `${props.placeholder} Icon`,
  });

  const inputContainer = createElement("div", {
    className: "input",
    children: [inputImage, inputElement],
  });

  return inputContainer;
}

// <div>
//    <img>
//    <input class="no-border">
// </div>
