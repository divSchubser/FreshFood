import { createElement } from "../../utils/elements";
import { createButtonElement } from "../../components/button/button";
import {
  signInButton,
  createAccountInactive,
} from "../../components/button/button.stories";

export function createSignIn(inputs, title, button1, button2) {
  const forgotPassword = createElement("a", {
    className: "forgotPassword",
    innerText: "Forgot password?",
    href: "#",
  });
  const pageHeading = createElement("h2", {
    className: "page-heading",
    innerText: title,
  });

  const form = createElement("form", {
    className: "inputForm",
    children: [...inputs],
  });
  const formContainer = createElement("div", {
    className: "formContainer",
    children: [pageHeading, form, forgotPassword, createButtonElement(button1)],
  });

  const pageContainer = createElement("div", {
    className: "pageContainer",
    children: [formContainer, createButtonElement(button2)],
  });

  return pageContainer;
}
