import { useTheme } from "styled-components";
import { TextFieldStyled } from "./styles";

type InputProps = {
  label: string;
  id: string;
};

function Input({ label, id }: InputProps) {
  const theme = useTheme();

  return (
    <TextFieldStyled
      sx={{
        ":hover": {},
      }}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
    />
  );
}

export default Input;
