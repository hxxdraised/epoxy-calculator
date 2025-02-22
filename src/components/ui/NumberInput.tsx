import { Input, InputProps } from "@heroui/react";

interface NumberInputProps
  extends Omit<InputProps, "type" | "value" | "onValueChange"> {
  value: number;
  onValueChange: (value: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onValueChange,
  ...props
}) => {
  const handleChange = (value: string) => {
    onValueChange(parseInt(value));
  };

  return (
    <div>
      <Input
        {...props}
        type="number"
        value={value.toString()}
        onValueChange={handleChange}
      />
    </div>
  );
};
