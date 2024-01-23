import { ButtonProps } from "@mui/material";
import { ButtonStyled } from "./styles";
import { useTheme } from "styled-components";

function Button(props: ButtonProps) {
  const theme = useTheme();

  return (
    <ButtonStyled
      sx={{
        backgroundColor: `${theme.fonts.palette.secondary}`,
        ":hover": {
          backgroundColor: `${theme.fonts.palette.senary}`,
        },
        ":focus": {
          backgroundColor: `${theme.fonts.palette.senary}`,
        },
      }}
      variant="contained"
      {...props}
    >
      {props.children}
    </ButtonStyled>
  );
}

export default Button;
