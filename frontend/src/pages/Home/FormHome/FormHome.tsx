import Input from "../../../components/UI/Input/Input";
import {
  CarTypeContainer,
  FieldsetContainer,
  FieldsetLegend,
  FormHeader,
  FormHomeContainer,
  FormHomeParagraph,
  FormHomeTitle,
} from "./styles";



import form_image from "../../../assets/form_image.png";
import Switch from "../../../components/UI/Switch/Switch";
import { useState } from "react";
import InputRadio from "../../../components/UI/InputRadio/InputRadio";
import Button from "../../../components/UI/Button/Button";

function FormHome() {
  const [carTypeChecked, setCarTypeChecked] = useState(true);

  function onChangeSwitchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCarTypeChecked(event.target.checked);
  }

  function onSubmitFormHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <FormHomeContainer onSubmit={onSubmitFormHandler}>
        <FormHeader>
          <img src={form_image} alt="" />
          <div>
            <FormHomeTitle>Drive with MyRide</FormHomeTitle>
            <FormHomeParagraph>
              Register as a driver using the form below. Our team will assess
              and get back to you within 48 hours.
            </FormHomeParagraph>
          </div>
        </FormHeader>
        <Input id="name" label="Full Name" name="name" />
        <Input id="email" label="Email" name="email" />
        <Input id="code" label="Referal Code" name="code" />
        <FieldsetContainer aria-label="fieldset">
          <FieldsetLegend>Select your car type</FieldsetLegend>
          <Switch
            checked={carTypeChecked}
            onChange={onChangeSwitchHandler}
            inputProps={{ "aria-label": "controlled" }}
          />
        </FieldsetContainer>
        {carTypeChecked && (
          <CarTypeContainer>
            <InputRadio id="sedan" name="carType" label="Sedan" />
            <InputRadio id="suvVan" name="carType" label="SUV/Van" />
            <InputRadio id="semiLuxury" name="carType" label="Semi Luxury" />
            <InputRadio id="luxuryCar" name="carType" label="Luxury Car" />
          </CarTypeContainer>
        )}
        <Button>Submit</Button>
      </FormHomeContainer>
    </>
  );
}

export default FormHome;
