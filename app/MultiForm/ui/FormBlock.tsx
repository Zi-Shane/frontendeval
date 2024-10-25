import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormObj, updateFormFunc } from "../type";

function FormBlock({
  updateForm,
  formData,
  isLast,
  forward,
}: {
  updateForm: updateFormFunc;
  formData: FormObj;
  isLast: boolean;
  forward: () => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newFormData = { ...formData, value: e.target.value };
    updateForm(newFormData);
  }

  return (
    <div className="w-fit m-auto my-28">
      <div>
        <p className="font-medium mb-4">{formData.title}</p>
        <Input
          className="w-80 mb-2"
          type="text"
          placeholder={formData.title}
          value={formData.value}
          onChange={(e) => handleChange(e)}
        />
        <p className="leading-6 min-h-6 mb-5 text-sm text-gray-600">
          {formData.description}
        </p>

        <Button className="w-20" onClick={forward}>
          {isLast ? "submit" : "next"}
        </Button>
      </div>
    </div>
  );
}

export default FormBlock;
