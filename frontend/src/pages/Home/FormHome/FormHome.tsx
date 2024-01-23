import Input from "../../../components/UI/Input/Input";
import {
  FormHeader,
  FormHomeContainer,
  FormHomeParagraph,
  FormHomeTitle,
} from "./styles";

import form_image from "../../../assets/form_image.png";

function FormHome() {
  return (
    <>
      <FormHomeContainer>
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
      </FormHomeContainer>
    </>
  );
}

export default FormHome;