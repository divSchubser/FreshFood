import { createElement } from "../../utils/elements";
import { logo } from "../../components/logo/logo.stories";

export function createSplashscreen() {
  const pageContainer = createElement("div", {
    className: "pageContainer",
    children: [logo()],
  });
  return pageContainer;
}

// ! <div class="pageContainer">
//!     <img src....>
//! </div>
