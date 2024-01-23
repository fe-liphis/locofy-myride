import Input from "../../../components/UI/Input/Input";
import { FormHomeContainer } from "./styles";

function FormHome() {
  return (
    <>
      <FormHomeContainer>
        
        <Input id="name" label="Full Name" name="name" />
      </FormHomeContainer>
    </>
  );
}

export default FormHome;
