import {
  CarTypeContainer,
  CarTypeLabel,
  FieldsetContainer,
  FieldsetLegend,
  FormControlInput,
  FormHeader,
  FormHomeContainer,
  FormHomeParagraph,
  FormHomeTitle,
  ModalTitle,
} from "./styles";

import form_image from "../../../assets/form_image.png";
import Switch from "../../../components/UI/Switch/Switch";
import { useEffect, useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { InputLabel, MenuItem } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextFieldStyled } from "../../../components/UI/Input/styles";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";
import { FormControlSelect } from "../../../components/UI/Select/styles";
import ErrorForm from "../../../components/UI/ErrorForm/ErrorForm";
import FormSucess from "../FormSuccess/FormSuccess";
import Sedan from "../../../components/UI/Svgs/TypeCar/Sedan";
import SuvVan from "../../../components/UI/Svgs/TypeCar/SuvVan";
import SemiLuxury from "../../../components/UI/Svgs/TypeCar/SemiLuxury";
import LuxuryCar from "../../../components/UI/Svgs/TypeCar/LuxuryCar";

import jsonCountriesAndCities from "../../../utils/countriesAndCities.json";
import ModalTemplate from "../../../components/Modal/Modal";

import error_img from "../../../assets/send_error.png";

export type FormValues = {
  fullName: string;
  email: string;
  country: string;
  city: string;
  code: string;
  carType: string;
};

function FormHome() {
  const [carTypeChecked, setCarTypeChecked] = useState(true);
  const [countriesAndCities, setCountriesAndCities] =
    useState<typeof jsonCountriesAndCities>();
  const [countries, setCountries] = useState<Array<string>>([]);
  const [cities, setCities] = useState<Array<string>>([]);
  const [selectedCountry, setSelectedCountrie] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [registerDriver, setRegisterDriver] = useState(true);

  const [error, setError] = useState(false);

  const schema = z.object({
    fullName: z
      .string()
      .min(10, "Invalid name")
      .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, "Invalid name"),
    email: z.string().min(1, "Invalid email").email("Invalid email"),
    country: z.string().min(1, "Invalid country"),
    city: z.string().min(1, "Invalid city"),
    code: z.string().regex(/^[A-Z]{3}-\d{3}$/, "Invalid code"),
    carType: z
      .string()
      .refine((data: string) => !carTypeChecked || data !== "", {
        message: "Invalid car type",
      }),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      carType: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  useEffect(() => {
    setCountriesAndCities(jsonCountriesAndCities);
    const countriesKeys = Object.keys(jsonCountriesAndCities);
    setCountries(countriesKeys);
  }, []);

  function onSubmit(data: FormValues) {
    if (!carTypeChecked) {
      data.carType = "Car type not selected";
    }

    async function postDriverData() {
      async function postData() {
        const res = await fetch("http://localhost:3000/driver", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, id: "1" }),
        });
        const dataRes = await res.json();
        console.log(dataRes);
        return res;
      }

      const res = await postData();
      console.log(res);

      if (res.ok) {
        reset();
        setSelectedCountrie("");
        setSelectedCity("");
        setCities([]);
        setRegisterDriver(false);
        setError(false);
      } else {
        setError(true);
      }
    }

    postDriverData();
  }

  function handleChangeCountries(event: SelectChangeEvent) {
    const country = event.target.value as string;
    setSelectedCountrie(country);

    const cities = countriesAndCities[country];
    setCities(cities);
  }

  function handleChangeCity(event: SelectChangeEvent) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function onChangeSwitchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCarTypeChecked(event.target.checked);
  }

  function handleOnSubmitNewCar() {
    setRegisterDriver(true);
  }

  return (
    <>
      {registerDriver ? (
        <>
          {error && (
            <ModalTemplate initialOpen={error} fn={() => setError(false)}>
              <ModalTitle>An error occurred to send the data</ModalTitle>
              <img
                src={error_img}
                alt="A cartoon image of a yellow car in repair for an error screen"
              />
            </ModalTemplate>
          )}
          <FormHomeContainer onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>
              <img src={form_image} alt="" />
              <div>
                <FormHomeTitle>Drive with MyRide</FormHomeTitle>
                <FormHomeParagraph>
                  Register as a driver using the form below. Our team will
                  assess and get back to you within 48 hours.
                </FormHomeParagraph>
              </div>
            </FormHeader>
            <FormControlInput>
              <TextFieldStyled
                id="fullName"
                label="Full Name"
                error={errors.fullName ? true : false}
                {...register("fullName")}
              />
              {errors.fullName && (
                <ErrorForm label={errors.fullName?.message || "Invalid name"} />
              )}
            </FormControlInput>
            <FormControlInput>
              <TextFieldStyled
                id="email"
                label="Email"
                error={errors.email ? true : false}
                {...register("email")}
              />
              {errors.fullName && (
                <ErrorForm label={errors.email?.message || "Invalid email"} />
              )}
            </FormControlInput>
            <FormControlInput>
              <FormControlSelect error={errors.country ? true : false}>
                <InputLabel id="country-label">Country</InputLabel>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="country-label"
                      aria-labelledby="country-label"
                      id={"country"}
                      label="Country"
                      value={selectedCountry}
                      error={errors.country ? true : false}
                      onChange={(e) => {
                        handleChangeCountries(e);
                        field.onChange(e);
                      }}
                    >
                      {countries.map((country, index) => (
                        <MenuItem value={country} key={index}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControlSelect>
              {errors.country && <ErrorForm label={"Invalid country"} />}
            </FormControlInput>
            <FormControlInput>
              <FormControlSelect error={errors.city ? true : false}>
                <InputLabel id="city-label">City</InputLabel>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <>
                      <Select
                        aria-labelledby="city-label"
                        labelId="city-label"
                        id="city"
                        label="City"
                        value={selectedCity}
                        disabled={selectedCountry === "" ? true : false}
                        error={errors.city ? true : false}
                        onChange={(e) => {
                          handleChangeCity(e);
                          field.onChange(e);
                        }}
                      >
                        {cities.map((city, index) => (
                          <MenuItem value={city} key={index}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  )}
                />
              </FormControlSelect>
              {errors.city && <ErrorForm label={"Invalid city"} />}
            </FormControlInput>
            <FormControlInput>
              <TextFieldStyled
                id="code"
                label="Referal Code"
                error={errors.code ? true : false}
                {...register("code")}
              />
              {errors.code && (
                <ErrorForm label={errors.code?.message || "Invalid code"} />
              )}
            </FormControlInput>
            <FieldsetContainer aria-label="fieldset">
              <FieldsetLegend>I drive my own car</FieldsetLegend>
              <Switch
                checked={carTypeChecked}
                onChange={onChangeSwitchHandler}
                inputProps={{ "aria-label": "controlled" }}
              />
            </FieldsetContainer>
            {carTypeChecked && (
              <>
                <FormControlInput>
                  <CarTypeLabel>Select your car type</CarTypeLabel>
                  <CarTypeContainer>
                    <GroupRadio>
                      <input
                        type="radio"
                        id={"sedan"}
                        value={"sedan"}
                        aria-labelledby={"sedan-label"}
                        {...register("carType")}
                      />
                      <label htmlFor={"sedan"} id={"sedan-label"}>
                        <Sedan />
                        <span>Sedan</span>
                      </label>
                    </GroupRadio>
                    <GroupRadio>
                      <input
                        type="radio"
                        id={"suvVan"}
                        aria-labelledby={"suvVan-label"}
                        value={"suvVan"}
                        {...register("carType")}
                      />
                      <label htmlFor={"suvVan"} id={"suvVan-label"}>
                        <SuvVan />
                        <span>SUV/Van</span>
                      </label>
                    </GroupRadio>
                    <GroupRadio>
                      <input
                        type="radio"
                        id={"semiLuxury"}
                        value={"semiLuxury"}
                        aria-labelledby={"semiLuxury-label"}
                        {...register("carType")}
                      />
                      <label htmlFor={"semiLuxury"} id={"semiLuxury-label"}>
                        <SemiLuxury />
                        <span>Semi Luxury</span>
                      </label>
                    </GroupRadio>
                    <GroupRadio>
                      <input
                        type="radio"
                        id={"luxuryCar"}
                        value={"luxuryCar"}
                        aria-labelledby={"luxuryCar-label"}
                        {...register("carType")}
                      />
                      <label htmlFor={"luxuryCar"} id={"luxuryCar-label"}>
                        <LuxuryCar />
                        <span>Luxury Car</span>
                      </label>
                    </GroupRadio>
                  </CarTypeContainer>
                  {errors.carType && (
                    <ErrorForm
                      label={errors.carType?.message || "Invalid car type"}
                    />
                  )}
                </FormControlInput>
              </>
            )}
            <Button type="submit">Submit</Button>
          </FormHomeContainer>
        </>
      ) : (
        <FormSucess handleOnClick={handleOnSubmitNewCar} />
      )}
    </>
  );
}

export default FormHome;
