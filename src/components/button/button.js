import { createElement } from "../../utils/elements";

export function createButtonElement(props) {
  const buttonImage = createElement("img", {
    className: "btn__img",
    src: props.imageSrc,
    alt: `${props.alt}`,
  });

  const buttonText = createElement("span", {
    className: "btn__text",
    innerText: props.type,
  });

  const buttonElement = createElement("button", {
    className: "btn",
    children: [buttonImage, buttonText],
  });

  return buttonElement;
}
