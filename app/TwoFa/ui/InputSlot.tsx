function InputSlot({
  addRef,
  value,
  handleChange,
  handleKeyDown,
  handleFocus,
  handlePaste,
}: {
  addRef: (ref: HTMLInputElement | null) => void;
  value: string;
  handleChange: (value: string) => void;
  handleKeyDown: (value: string) => void;
  handleFocus: () => void;
  handlePaste: (data: string) => void;
}) {
  return (
    <input
      ref={addRef}
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e.key)}
      onFocus={() => handleFocus()}
      onPaste={(e) => handlePaste(e.clipboardData.getData("Text"))}
      className="border rounded-sm p-2 h-10 w-10 text-center"
    />
  );
}

export default InputSlot;
