import { createElement } from "../../utils/elements";
import { logo } from "../../components/logo/logo.stories";

export function createSplashscreen() {
  const pageContainer = createElement("div", {
    className: "centerContainer",
    children: [logo()],
  });
  return pageContainer;
}
