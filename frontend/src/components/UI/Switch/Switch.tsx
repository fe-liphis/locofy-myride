import { SwitchProps } from "@mui/material";
import { YellowSwitch } from "./styles";
import { Path, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../pages/Home/FormHome/types/FormValues";
import { ChangeEvent, useState } from "react";

type MySwitchProps = {
  id: Path<FormValues>;
  register?: UseFormRegister<FormValues>;
} & SwitchProps;

function Switch({ id, register, ...props }: MySwitchProps) {
  return (
    <YellowSwitch
      id={id}
      aria-label="Switch"
      {...(register ? register(id) : null)}
      {...props}
    />
  );
}

export default Switch;
