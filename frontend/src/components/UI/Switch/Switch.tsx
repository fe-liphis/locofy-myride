import { SwitchProps } from "@mui/material";
import { YellowSwitch } from "./styles";

function Switch(props: SwitchProps) {
  return <YellowSwitch {...props} aria-label="Switch" />;
}

export default Switch;
