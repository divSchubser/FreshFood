import "./input.css";
import { createInputElement } from "./input";
import emailIcon from "../../assets/icon-mail.svg";
import passwordIcon from "../../assets/icon-padlock.svg";
import accountIcon from "../../assets/icon-account.svg";

export default { title: "Components/Input" };

const inputlist = [
  {
    type: "email",
    placeholder: "Email",
    image: emailIcon,
  },
  {
    type: "password",
    placeholder: "Password",
    image: passwordIcon,
  },
  {
    type: "text",
    placeholder: "Full Name",
    image: accountIcon,
  },
];

export const mailInput = () => createInputElement(inputlist[0]);
export const passwordInput = () => createInputElement(inputlist[1]);
export const nameInput = () => createInputElement(inputlist[2]);
