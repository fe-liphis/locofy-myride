import { InputHTMLAttributes } from "react";
import { GroupRadio } from "./styles";
import { Path, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../pages/Home/FormHome/types/FormValues";

type InputRadioProps = {
  id: string;
  value: string | number;
  label: string;
  name: Path<FormValues>;
  register?: UseFormRegister<FormValues>;
  Icon?: JSX.Element;
} & InputHTMLAttributes<HTMLInputElement>;

function InputRadio({
  id,
  value,
  label,
  register,
  Icon,
  name,
  ...props
}: InputRadioProps) {
  return (
    <GroupRadio>
      <input
        type="radio"
        id={id}
        value={value}
        aria-labelledby={`${id}-label`}
        {...(register ? register(name) : null)}
        {...props}
      />
      <label htmlFor={id} id={`${id}-label`}>
        {Icon && Icon}
        <span>{label}</span>
      </label>
    </GroupRadio>
  );
}

export default InputRadio;
