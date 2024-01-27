import { InputLabel, MenuItem } from "@mui/material";
import { FormControlSelect } from "./styles";
import { Control, Controller } from "react-hook-form";

import SelectMUI, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import ErrorForm from "../ErrorForm/ErrorForm";
import { FormControlInput } from "../../../pages/Home/FormHome/styles";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

type SelectProps = {
  id: string;
  label: string;
  error: {
    message: string;
  };
  control: Control;
  options: string[];
} & SelectInputProps;

function Select({ id, label, error, control, options }: SelectProps) {
  const [option, setOption] = useState("");

  function onChangeOptionHandler(event: SelectChangeEvent) {
    const option = event.target.value;
    setOption(option);
  }

  return (
    <FormControlInput>
      <FormControlSelect error={error ? true : false}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Controller
          name={id}
          control={control}
          render={({ field }) => (
            <SelectMUI
              labelId={`${id}-label`}
              aria-labelledby={`${id}-label`}
              id={id}
              label={label}
              value={option}
              error={error ? true : false}
              onChange={(e) => {
                onChangeOptionHandler(e);
                field.onChange(e);
              }}
            >
              {options.map((option, index) => (
                <MenuItem value={option} key={index}>
                  {option}
                </MenuItem>
              ))}
            </SelectMUI>
          )}
        />
      </FormControlSelect>
      {error && <ErrorForm label={`Invalid ${label}`} />}
    </FormControlInput>
  );
}

export default Select;
