import "./button.css";
import { createButtonElement } from "./button";
import rightArrow from "../../assets/icon-arrow-small.svg";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

const buttonlist = [
  {
    type: "SIGN IN",
    alt: "Arrow right",
    imageSrc: rightArrow,
  },
  {
    type: "CREATE ACCOUNT",
    alt: "Arrow right",
    imageSrc: rightArrow,
  },
  {
    type: "CREATE ACCOUNT",
    class: "btn--secondary",
  },
];

export const signInButton = () => createButtonElement(buttonlist[0]);
export const createAccountButton = () => createButtonElement(buttonlist[1]);
export const createAccountInactive = () => createButtonElement(buttonlist[2]);
