import { TextFieldProps } from "@mui/material";
import { FormControlInput } from "../../../pages/Home/FormHome/styles";
import ErrorForm from "../ErrorForm/ErrorForm";
import { TextFieldStyled } from "./styles";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../pages/Home/FormHome/FormHome";

type InputProps = {
  id: Path<FormValues>;
  label: string;
  error?: FieldError | null;
  register?: UseFormRegister<FormValues>;
} & TextFieldProps;

function Input({ id, label, error, register }: InputProps) {
  return (
    <FormControlInput>
      <TextFieldStyled
        id={id}
        label={label}
        error={error ? true : false}
        {...(register ? register(id) : null)}
      />
      {error && <ErrorForm label={error.message || `Invalid ${label}`} />}
    </FormControlInput>
  );
}

export default Input;
