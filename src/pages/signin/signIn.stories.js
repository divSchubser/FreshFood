import "./signIn.css";
import {
  mailInput,
  passwordInput,
  nameInput,
} from "../../components/input/input.stories";

import rightArrow from "../../assets/icon-arrow-small.svg";

import { createSignIn } from "./signIn.js";

const signInList = [mailInput(), passwordInput()];
const createAccountList = [mailInput(), passwordInput(), nameInput()];
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

  {
    type: "SIGN IN",
    class: "btn--secondary",
  },
];
export default { title: "Pages/Login" };

export const signinScreen = () =>
  createSignIn(signInList, "Sign In", buttonlist[0], buttonlist[2]);
export const createAccountScreen = () =>
  createSignIn(
    createAccountList,
    "Create Account",
    buttonlist[1],
    buttonlist[3]
  );
