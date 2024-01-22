import { TextFieldStyled } from "./styles";

type InputProps = {
  label: string;
  id: string;
};

function Input({ label, id }: InputProps) {
  return (
    <TextFieldStyled id="outlined-basic" label="Outlined" variant="outlined" />
  );
}

export default Input;
