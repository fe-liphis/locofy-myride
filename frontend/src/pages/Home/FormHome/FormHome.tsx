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
import { useEffect, useState } from "react";
import Button from "../../../components/UI/Button/Button";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextFieldStyled } from "../../../components/UI/Input/styles";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";

type FormValues = {
  fullName: string;
  email: string;
  country: string;
  city: string;
  code: string;
  carType: string;
};

function FormHome() {
  const [carTypeChecked, setCarTypeChecked] = useState(true);
  const [countriesAndCities, setCountriesAndCities] = useState();
  const [countries, setCountries] = useState<Array<string>>([]);
  const [selectedCountry, setSelectedCountrie] = useState<string>("");
  const [cities, setCities] = useState<Array<string>>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  console.log(selectedCountry);

  const schema = z.object({
    fullName: z
      .string()
      .min(10, "Invalid name")
      .regex(/^[^\d]+ [^\d]+$/i, "Invalid name"),
    email: z.string().min(1, "Invalid email").email("Invalid email"),
    country: z.string().min(1, "Invalid country"),
    city: z.string().min(1, "Invalid city"),
    code: z.string().regex(/^[a-zA-Z]{3}-\d{3}$/, "Invalid code"),
    carType: z.string().refine((data) => !carTypeChecked || data !== "", {
      message: "Select a vehicle type",
    }),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      carType: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  console.log(errors);

  useEffect(() => {
    async function fetchCoutries() {
      async function fetchData() {
        const res = await fetch(
          "https://file.notion.so/f/f/c4f7bc66-0bd3-49f2-a56a-5b4cd35ab92a/f97598b4-0503-410d-9973-67467026136d/countries-and-cities.json?id=f85395c6-6876-4794-879b-0f949922a7f9&table=block&spaceId=c4f7bc66-0bd3-49f2-a56a-5b4cd35ab92a&expirationTimestamp=1706068800000&signature=nzvh-UQIHVHGfJ4rO8GYz0FLMQ3b3pykdIvGE3ZQcxg&downloadName=countries-and-cities.json"
        );
        const data = await res.json();
        return data;
      }
      const data = await fetchData();
      setCountriesAndCities(data);
      const countries = Object.keys(data);
      setCountries(countries);
    }
    fetchCoutries();
  }, []);

  function onSubmit(data: FormValues) {
    console.log("Submit: ");
    console.log(data);
  }

  function handleChangeCountries(event: SelectChangeEvent) {
    const country = event.target.value as string;
    setSelectedCountrie(country);

    if (countriesAndCities) {
      const cities = countriesAndCities[country];
      setCities(cities);
    }
  }

  function handleChangeCity(event: SelectChangeEvent) {
    const city = event.target.value as string;
    setSelectedCity(city);
  }

  function onChangeSwitchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCarTypeChecked(event.target.checked);
  }

  return (
    <>
      <FormHomeContainer onSubmit={handleSubmit(onSubmit)}>
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
        <TextFieldStyled
          id="fullName"
          label="Full Name"
          error={errors.fullName ? true : false}
          helperText={errors.fullName?.message}
          {...register("fullName")}
        />
        <TextFieldStyled
          id="email"
          label="Email"
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <FormControl>
          <InputLabel>Country</InputLabel>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select
                labelId="country-label"
                id={"country"}
                label="Country"
                value={selectedCountry}
                error={errors.country ? true : false}
                onChange={(e) => {
                  handleChangeCountries(e);
                  field.onChange(e); // Usa field.onChange ao invés de register
                }}
              >
                {countries.map((countrie, index) => (
                  <MenuItem value={countrie} key={index}>
                    {countrie}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.country && (
            <FormHelperText>{errors.country?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>City</InputLabel>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <>
                <Select
                  labelId="city-label"
                  id="city"
                  label="City"
                  value={selectedCity}
                  error={errors.city ? true : false}
                  onChange={(e) => {
                    handleChangeCity(e);
                    field.onChange("city");
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
          {errors.city && (
            <FormHelperText>{errors.city?.message}</FormHelperText>
          )}
        </FormControl>
        <TextFieldStyled
          id="code"
          label="Referal Code"
          error={errors.code ? true : false}
          helperText={errors.code?.message}
          {...register("code")}
        />
        <FieldsetContainer aria-label="fieldset">
          <FieldsetLegend>Select your car type</FieldsetLegend>
          <Switch
            checked={carTypeChecked}
            onChange={onChangeSwitchHandler}
            inputProps={{ "aria-label": "controlled" }}
          />
        </FieldsetContainer>
        {carTypeChecked && (
          <fieldset>
            <CarTypeContainer>
              <GroupRadio>
                <input type="radio" id={"sedan"} {...register("carType")} />
                <label htmlFor={"sedan"}>
                  <svg
                    width="52"
                    height="29"
                    viewBox="0 0 52 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Card Image">
                      <path
                        id="Vector"
                        d="M38.2835 12.4471H37.424L31.5802 7.47331C31.258 7.1992 30.8494 6.97791 30.3847 6.82583C29.9199 6.67375 29.4109 6.59477 28.8952 6.59473H17.4038C15.9979 6.59473 14.7339 7.1774 14.2117 8.06623L11.6379 12.5297C10.1574 12.7909 9.05933 13.6984 9.05933 14.788V18.8847C9.05933 19.208 9.44397 19.4699 9.91886 19.4699H12.4975C12.4975 21.4092 14.8064 22.9813 17.6547 22.9813C20.503 22.9813 22.8119 21.4092 22.8119 19.4699H29.6881C29.6881 21.4092 31.9971 22.9813 34.8454 22.9813C37.6936 22.9813 40.0026 21.4092 40.0026 19.4699H42.5812C43.0561 19.4699 43.4407 19.208 43.4407 18.8847V15.9585C43.4407 14.0192 41.1318 12.4471 38.2835 12.4471ZM17.6547 21.2256C16.2327 21.2256 15.0761 20.4381 15.0761 19.4699C15.0761 18.5017 16.2327 17.7142 17.6547 17.7142C19.0767 17.7142 20.2333 18.5017 20.2333 19.4699C20.2333 20.4381 19.0767 21.2256 17.6547 21.2256ZM21.5226 12.4471H15.3409L17.4038 8.93567H21.5226V12.4471ZM24.1012 12.4471V8.93567H28.8952L33.021 12.4471H24.1012ZM34.8454 21.2256C33.4234 21.2256 32.2668 20.4381 32.2668 19.4699C32.2668 18.5017 33.4234 17.7142 34.8454 17.7142C36.2673 17.7142 37.424 18.5017 37.424 19.4699C37.424 20.4381 36.2673 21.2256 34.8454 21.2256Z"
                        fill="#FBA403"
                      />
                    </g>
                  </svg>
                  <span>Sedan</span>
                </label>
              </GroupRadio>
              <GroupRadio>
                <input type="radio" id={"suvVan"} {...register("carType")} />
                <label htmlFor={"suvVan"}>
                  <svg
                    width="52"
                    height="29"
                    viewBox="0 0 52 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Card Image">
                      <path
                        id="Vector"
                        d="M38.2835 12.4471H37.424L31.5802 7.47331C31.258 7.1992 30.8494 6.97791 30.3847 6.82583C29.9199 6.67375 29.4109 6.59477 28.8952 6.59473H17.4038C15.9979 6.59473 14.7339 7.1774 14.2117 8.06623L11.6379 12.5297C10.1574 12.7909 9.05933 13.6984 9.05933 14.788V18.8847C9.05933 19.208 9.44397 19.4699 9.91886 19.4699H12.4975C12.4975 21.4092 14.8064 22.9813 17.6547 22.9813C20.503 22.9813 22.8119 21.4092 22.8119 19.4699H29.6881C29.6881 21.4092 31.9971 22.9813 34.8454 22.9813C37.6936 22.9813 40.0026 21.4092 40.0026 19.4699H42.5812C43.0561 19.4699 43.4407 19.208 43.4407 18.8847V15.9585C43.4407 14.0192 41.1318 12.4471 38.2835 12.4471ZM17.6547 21.2256C16.2327 21.2256 15.0761 20.4381 15.0761 19.4699C15.0761 18.5017 16.2327 17.7142 17.6547 17.7142C19.0767 17.7142 20.2333 18.5017 20.2333 19.4699C20.2333 20.4381 19.0767 21.2256 17.6547 21.2256ZM21.5226 12.4471H15.3409L17.4038 8.93567H21.5226V12.4471ZM24.1012 12.4471V8.93567H28.8952L33.021 12.4471H24.1012ZM34.8454 21.2256C33.4234 21.2256 32.2668 20.4381 32.2668 19.4699C32.2668 18.5017 33.4234 17.7142 34.8454 17.7142C36.2673 17.7142 37.424 18.5017 37.424 19.4699C37.424 20.4381 36.2673 21.2256 34.8454 21.2256Z"
                        fill="#FBA403"
                      />
                    </g>
                  </svg>
                  <span>SUV/Van</span>
                </label>
              </GroupRadio>
              <GroupRadio>
                <input
                  type="radio"
                  id={"semiLuxury"}
                  {...register("carType")}
                />
                <label htmlFor={"semiLuxury"}>
                  <svg
                    width="52"
                    height="29"
                    viewBox="0 0 52 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Card Image">
                      <path
                        id="Vector"
                        d="M38.2835 12.4471H37.424L31.5802 7.47331C31.258 7.1992 30.8494 6.97791 30.3847 6.82583C29.9199 6.67375 29.4109 6.59477 28.8952 6.59473H17.4038C15.9979 6.59473 14.7339 7.1774 14.2117 8.06623L11.6379 12.5297C10.1574 12.7909 9.05933 13.6984 9.05933 14.788V18.8847C9.05933 19.208 9.44397 19.4699 9.91886 19.4699H12.4975C12.4975 21.4092 14.8064 22.9813 17.6547 22.9813C20.503 22.9813 22.8119 21.4092 22.8119 19.4699H29.6881C29.6881 21.4092 31.9971 22.9813 34.8454 22.9813C37.6936 22.9813 40.0026 21.4092 40.0026 19.4699H42.5812C43.0561 19.4699 43.4407 19.208 43.4407 18.8847V15.9585C43.4407 14.0192 41.1318 12.4471 38.2835 12.4471ZM17.6547 21.2256C16.2327 21.2256 15.0761 20.4381 15.0761 19.4699C15.0761 18.5017 16.2327 17.7142 17.6547 17.7142C19.0767 17.7142 20.2333 18.5017 20.2333 19.4699C20.2333 20.4381 19.0767 21.2256 17.6547 21.2256ZM21.5226 12.4471H15.3409L17.4038 8.93567H21.5226V12.4471ZM24.1012 12.4471V8.93567H28.8952L33.021 12.4471H24.1012ZM34.8454 21.2256C33.4234 21.2256 32.2668 20.4381 32.2668 19.4699C32.2668 18.5017 33.4234 17.7142 34.8454 17.7142C36.2673 17.7142 37.424 18.5017 37.424 19.4699C37.424 20.4381 36.2673 21.2256 34.8454 21.2256Z"
                        fill="#FBA403"
                      />
                    </g>
                  </svg>
                  <span>Semi Luxury</span>
                </label>
              </GroupRadio>
              <GroupRadio>
                <input type="radio" id={"luxuryCar"} {...register("carType")} />
                <label htmlFor={"luxuryCar"}>
                  <svg
                    width="52"
                    height="29"
                    viewBox="0 0 52 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Card Image">
                      <path
                        id="Vector"
                        d="M38.2835 12.4471H37.424L31.5802 7.47331C31.258 7.1992 30.8494 6.97791 30.3847 6.82583C29.9199 6.67375 29.4109 6.59477 28.8952 6.59473H17.4038C15.9979 6.59473 14.7339 7.1774 14.2117 8.06623L11.6379 12.5297C10.1574 12.7909 9.05933 13.6984 9.05933 14.788V18.8847C9.05933 19.208 9.44397 19.4699 9.91886 19.4699H12.4975C12.4975 21.4092 14.8064 22.9813 17.6547 22.9813C20.503 22.9813 22.8119 21.4092 22.8119 19.4699H29.6881C29.6881 21.4092 31.9971 22.9813 34.8454 22.9813C37.6936 22.9813 40.0026 21.4092 40.0026 19.4699H42.5812C43.0561 19.4699 43.4407 19.208 43.4407 18.8847V15.9585C43.4407 14.0192 41.1318 12.4471 38.2835 12.4471ZM17.6547 21.2256C16.2327 21.2256 15.0761 20.4381 15.0761 19.4699C15.0761 18.5017 16.2327 17.7142 17.6547 17.7142C19.0767 17.7142 20.2333 18.5017 20.2333 19.4699C20.2333 20.4381 19.0767 21.2256 17.6547 21.2256ZM21.5226 12.4471H15.3409L17.4038 8.93567H21.5226V12.4471ZM24.1012 12.4471V8.93567H28.8952L33.021 12.4471H24.1012ZM34.8454 21.2256C33.4234 21.2256 32.2668 20.4381 32.2668 19.4699C32.2668 18.5017 33.4234 17.7142 34.8454 17.7142C36.2673 17.7142 37.424 18.5017 37.424 19.4699C37.424 20.4381 36.2673 21.2256 34.8454 21.2256Z"
                        fill="#FBA403"
                      />
                    </g>
                  </svg>
                  <span>Luxury Car</span>
                </label>
              </GroupRadio>
            </CarTypeContainer>
            {errors.carType && (
              <FormHelperText>{errors.carType?.message}</FormHelperText>
            )}
          </fieldset>
        )}
        <Button type="submit">Submit</Button>
      </FormHomeContainer>
    </>
  );
}

export default FormHome;
