import { TextFieldStyled } from "./styles";
import { TextFieldProps } from "@mui/material";

type InputProps = {
  label: string;
  id: string;
  props?: React.FC;
} & TextFieldProps;

function Input({ label, id, ...props }: InputProps) {
  return (
    <TextFieldStyled id={id} label={label} {...props} variant="outlined" />
  );
}

export default Input;
