import * as yup from "yup";

export const FormSchema = yup
  .object({
    fullName: yup
      .string()
      .min(10, "Invalid name")
      .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, "Invalid name")
      .required("Invalid name"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email"
      )
      .email()
      .required("Email required"),
    country: yup.string().required("Invalid country"),
    city: yup.string().required("Invalid city"),
    code: yup
      .string()
      .matches(/^[a-zA-Z]{3}-\d{3}$/, "Invalid referal code")
      .required(),
    myOwnCar: yup
      .boolean()
      .transform((originalValue) => originalValue || false),
    carType: yup.string().when("myOwnCar", {
      is: true,
      then: (schema) => schema.required("Select a vehicle type"),
      otherwise: (schema) => schema.notRequired(),
    }),
  })
  .required();
