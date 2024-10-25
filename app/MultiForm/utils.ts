import { settings } from "@/data/MultiForm";
import { FormObj } from "./type";

export function initFormSetting(): FormObj[] {
  const form = settings.map(({ title, description }) => {
    return { title: title, description: description, value: "" };
  });

  return form;
}

// const settings_tmp = [
//   { title: "Username", type: FormType.text },
//   { title: "Phone", type: FormType.text },
//   { title: "Email", type: FormType.text },
// ];

// function initFormObj(): FormObj[] {
//   return [
//     { title: "Username", value: "" },
//     { title: "Phone", value: "" },
//     { title: "Email", value: "" },
//   ];
// }
