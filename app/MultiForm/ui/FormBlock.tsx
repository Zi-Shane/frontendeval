import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function FormBlock({
  answer,
  setAnswer,
  pageName,
  isLast,
  forward,
}: {
  answer: Map<string, string>;
  setAnswer: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  pageName: string;
  isLast: boolean;
  forward: () => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer((prev) => {
      const newAns = new Map(prev);
      newAns.set(pageName, e.target.value);
      return newAns;
    });
  }

  return (
    <div className="w-fit m-auto my-28">
      <p className="font-medium mb-4">{pageName}</p>
      <div>
        <Input
          className="w-80 mb-2"
          type="text"
          placeholder={pageName}
          value={answer.get(pageName)}
          onChange={(e) => handleChange(e)}
        />
        <p className="mb-5 text-sm text-gray-600">
          This is your public display name.
        </p>
        <Button className="w-20" onClick={forward}>
          {isLast ? "submit" : "next"}
        </Button>
      </div>
    </div>
  );
}

export default FormBlock;
