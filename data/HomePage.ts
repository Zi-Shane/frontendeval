export const BasePath =
  process.env.NODE_ENV == "development" ? "" : "/frontendeval";

export const ProjectList = [
  {
    title: "Data fetching and visualization",
    description: "Build a histogram chart from a list of randomly-generated",
    path: BasePath + "/BarChart",
    difficulty: "medium",
    finished: true,
  },
  {
    title: "Two-factor code input",
    description: "Build a usable multi-field code input",
    path: BasePath + "/TwoFa",
    difficulty: "medium",
    finished: true,
  },
  {
    title: "Multi-step form",
    description: "Create a single submittable form that spans multiple screens",
    path: BasePath + "/MultiForm",
    difficulty: "medium",
    finished: true,
  },
  {
    title: "Shopping list",
    description: "Create a shopping list app with autocomplete item entry",
    path: "https://zi-shane.github.io/shopping-list/",
    difficulty: "medium",
    finished: true,
  },
  {
    title: "Countdown timer",
    description: "Create a countdown timer that notifies the user",
    path: "https://zi-shane.github.io/web-timer/",
    difficulty: "easy",
    finished: true,
  },
  {
    title: "Comming Soon...",
    description: "Comming Soon...",
    path: BasePath + "",
    difficulty: "easy",
    finished: false,
  },
];
