import { InputLabel, MenuItem } from "@mui/material";
import { FormControlSelect } from "./styles";
import { Control, Controller, Path } from "react-hook-form";

import SelectMUI, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import ErrorForm from "../ErrorForm/ErrorForm";
import { FormControlInput } from "../../../pages/Home/FormHome/styles";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import { FormValues } from "../../../pages/Home/FormHome/types/FormValues";

type SelectProps = {
  id: Path<FormValues>;
  label: string;
  error: {
    message: string;
  };
  control: Control<FormValues>;
  options: string[];
  props: React.FC;
  disabled: boolean;
} & SelectInputProps;

function Select({ id, label, error, control, options, ...props }: SelectProps) {
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
              {...props}
              onChange={(e) => {
                onChangeOptionHandler(e as SelectChangeEvent);
                field.onChange(e as SelectChangeEvent);
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
      {error && <ErrorForm label={error.message || `Invalid ${label}`} />}
    </FormControlInput>
  );
}

export default Select;
