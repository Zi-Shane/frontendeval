export const settings = [
  { title: "Username", description: "This is your public display name" },
  { title: "Phone", description: "" },
  { title: "Email", description: "" },
  // { title: "Intrest", description: "", options: ["a", "b", "c"] },
];

export type FormSetting = {
  title: string;
  description: string;
};

export const DescriptionList = [
  "Back links appear on every screen other than the first one.",
  "On the last screen, a submit button that show JSON at Console. (calls a handleSubmit({ name: ..., email: ..., password: ... }))",
  "Show a success screen.",
];
