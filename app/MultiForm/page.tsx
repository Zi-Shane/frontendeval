"use client";

import { DemoTab } from "../components/DemoTab";
import Description from "./components/DescriptionBlock";
import FormControl from "./components/FormControl";

const categories = [
  {
    name: "Demo",
    content: (
      <div className="h-full flex justify-center items-center">
        <FormControl />
      </div>
    ),
  },
  { name: "Description", content: <Description /> },
];

function MultiFormPage() {
  return <DemoTab categories={categories} />;
}

export default MultiFormPage;
