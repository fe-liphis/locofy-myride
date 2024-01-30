import axios from "axios";
import { useEffect, useState } from "react";
import { FormValues } from "../types/FormValues";
import jsonCountriesAndCities from "../../../../utils/countriesAndCities.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../FormSchema";
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
} from "../styles";
import ModalTemplate from "../../../../components/Modal/Modal";
import Input from "../../../../components/UI/Input/Input";
import Select from "../../../../components/UI/Select/Select";
import { GroupRadio } from "../../../../components/UI/InputRadio/styles";
import Sedan from "../../../../components/UI/Svgs/TypeCar/Sedan";
import SuvVan from "../../../../components/UI/Svgs/TypeCar/SuvVan";
import SemiLuxury from "../../../../components/UI/Svgs/TypeCar/SemiLuxury";
import LuxuryCar from "../../../../components/UI/Svgs/TypeCar/LuxuryCar";
import ErrorForm from "../../../../components/UI/ErrorForm/ErrorForm";
import Button from "../../../../components/UI/Button/Button";
import Switch from "../../../../components/UI/Switch/Switch";
import error_img from "../../../../assets/send_error.png";
import form_image from "../../../../assets/form_image.png";
import { useAppDispatch } from "../../../../store/hooks";
import {
  setSuccessData,
  showFormSuccess,
} from "../../../../store/form/formSlice";
import InputRadio from "../../../../components/UI/InputRadio/InputRadio";

function Form() {
  const [error, setError] = useState(false);
  const [cities, setCities] = useState<Cities>([]);
  const countriesAndCities: CountriesAndCities = jsonCountriesAndCities;
  const countries = Object.keys(countriesAndCities);

  const dispatch = useAppDispatch();

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      carType: "",
    },
    resolver: yupResolver(FormSchema),
  });

  const watchCountry: Countries = watch("country", "");
  const watchMyOwnCar: boolean = watch("myOwnCar");

  useEffect(() => {
    if (watchCountry) {
      setCities(countriesAndCities[watchCountry]);
    }
  }, [watchCountry, countriesAndCities]);

  function onSubmit(data: FormValues) {
    if (!watchMyOwnCar) {
      data.carType = "Car type not selected";
    }

    axios
      .post("http://localhost:3000/driver", {
        ...data,
      })
      .then((res) => {
        dispatch(setSuccessData(res.data));
        dispatch(showFormSuccess());
        reset();
        setCities([]);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }

  return (
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
          <img
            src={form_image}
            alt="This image depicts a stylized scene where a person is standing next to a yellow car, with buildings and clouds in the background. The word “RIDE” is displayed above the buildings. This might be related to a ride-sharing or a taxi service."
          />
          <div>
            <FormHomeTitle>Drive with MyRide</FormHomeTitle>
            <FormHomeParagraph>
              Register as a driver using the form below. Our team will assess
              and get back to you within 48 hours.
            </FormHomeParagraph>
          </div>
        </FormHeader>
        <Input
          id="fullName"
          label="Full Name"
          error={errors.fullName}
          register={register}
        />
        <Input
          id="email"
          label="Email"
          error={errors.email}
          register={register}
        />
        <Select
          id="country"
          control={control}
          label="Country"
          options={countries}
          error={errors.country}
        />
        <Select
          id="city"
          control={control}
          label="City"
          options={cities}
          disabled={watchCountry ? false : true}
          error={errors.city}
        />
        <Input
          id="code"
          label="Referal Code"
          error={errors.code}
          register={register}
        />
        <FieldsetContainer aria-label="fieldset">
          <FieldsetLegend id="myOwnCar">I drive my own car</FieldsetLegend>
          <Switch
            aria-labelledby="myOwnCar"
            inputProps={{ "aria-label": "controlled" }}
            id={"myOwnCar"}
            register={register}
          />
        </FieldsetContainer>
        {watchMyOwnCar && (
          <>
            <FormControlInput>
              <CarTypeLabel>Select your car type</CarTypeLabel>
              <CarTypeContainer>
                <InputRadio
                  id="sedan"
                  label="Sedan"
                  value={"sedan"}
                  name="carType"
                  Icon={<Sedan />}
                  register={register}
                />
                <InputRadio
                  id="suvVan"
                  label="SUV/Van"
                  value={"suvVan"}
                  name="carType"
                  Icon={<SuvVan />}
                  register={register}
                />
                <InputRadio
                  id="semiLuxury"
                  label="Semi Luxury"
                  value={"semiLuxury"}
                  name="carType"
                  Icon={<SemiLuxury />}
                  register={register}
                />
                <InputRadio
                  id="luxuryCar"
                  value={"luxuryCar"}
                  name="carType"
                  label="Luxury Car"
                  Icon={<LuxuryCar />}
                  register={register}
                />
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
  );
}

export default Form;
