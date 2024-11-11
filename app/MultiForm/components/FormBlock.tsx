import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormObj } from "../type";
import { cn } from "@/lib/utils";

interface FormBlockProps {
  className?: string;
  onFormUpdate: (newFormData: FormObj) => void;
  formData: FormObj;
  isLast: boolean;
  forward: () => void;
}

function FormBlock({
  className,
  onFormUpdate,
  formData,
  isLast,
  forward,
}: FormBlockProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newFormData = { ...formData, value: e.target.value };
    onFormUpdate(newFormData);
  }

  return (
    <div className={cn("w-fit m-auto my-28", className)}>
      <p className="font-medium mb-4">{formData.title}</p>
      <Input
        className="w-[250px] mb-2"
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
  );
}

export default FormBlock;
