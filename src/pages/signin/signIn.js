import { createElement } from "../../utils/elements";

import { mailInput, passwordInput } from "../../components/input/input.stories";
import {
  signInButton,
  createAccountInactive,
} from "../../components/button/button.stories";

export function createSignIn() {
  const forgotPassword = createElement("a", {
    className: "forgotPassword",
    innerText: "Forgot password?",
    href: "#",
  });
  const pageHeading = createElement("h2", {
    className: "page-heading",
    innerText: "Sign In",
  });

  const form = createElement("form", {
    className: "inputForm",
    children: [mailInput(), passwordInput()],
  });
  const formContainer = createElement("div", {
    className: "formContainer",
    children: [pageHeading, form, forgotPassword, signInButton()],
  });

  const pageContainer = createElement("div", {
    className: "pageContainer",
    children: [formContainer, createAccountInactive()],
  });

  return pageContainer;
}
