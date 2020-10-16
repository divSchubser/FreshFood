import { createElement } from "../../utils/elements";
import logoSrc from "../../assets/logo_freshfood.svg";

export function createImgElement() {
  const imageElement = createElement("img", {
    className: "logo",
    src: logoSrc,
    alt: "logo",
  });
  return imageElement;
}
