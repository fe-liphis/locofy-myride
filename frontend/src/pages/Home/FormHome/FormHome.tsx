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
import { useForm } from "react-hook-form";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";
import ErrorForm from "../../../components/UI/ErrorForm/ErrorForm";
import FormSucess from "../FormSuccess/FormSuccess";
import Sedan from "../../../components/UI/Svgs/TypeCar/Sedan";
import SuvVan from "../../../components/UI/Svgs/TypeCar/SuvVan";
import SemiLuxury from "../../../components/UI/Svgs/TypeCar/SemiLuxury";
import LuxuryCar from "../../../components/UI/Svgs/TypeCar/LuxuryCar";
import jsonCountriesAndCities from "../../../utils/countriesAndCities.json";
import ModalTemplate from "../../../components/Modal/Modal";
import error_img from "../../../assets/send_error.png";
import axios from "axios";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import { Cities, Countries, FormValues } from "./types/FormValues";
import { FormSchema } from "./FormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function FormHome() {
  const [cities, setCities] = useState<Cities>([]);
  const [data, setData] = useState<FormValues>();
  const [registerDriver, setRegisterDriver] = useState(true);
  const [error, setError] = useState(false);

  const countriesAndCities = jsonCountriesAndCities;
  const countries: Countries = Object.keys(countriesAndCities);

  const form = useForm<FormValues>({
    defaultValues: {
      carType: "",
    },
    resolver: yupResolver(FormSchema),
  });

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = form;

  console.log(errors);

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
        console.log(res);
        setData(res.data);
        reset();
        setCities([]);
        setRegisterDriver(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
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
              <img
                src={form_image}
                alt="This image depicts a stylized scene where a person is standing next to a yellow car, with buildings and clouds in the background. The word “RIDE” is displayed above the buildings. This might be related to a ride-sharing or a taxi service."
              />
              <div>
                <FormHomeTitle>Drive with MyRide</FormHomeTitle>
                <FormHomeParagraph>
                  Register as a driver using the form below. Our team will
                  assess and get back to you within 48 hours.
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
        <FormSucess handleOnClick={handleOnSubmitNewCar} data={data} />
      )}
    </>
  );
}

export default FormHome;
