"use client";

import FormControl from "./components/FormControl";

function TwoFaPage() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <FormControl pinLength={4} />
    </div>
  );
}

export default TwoFaPage;
