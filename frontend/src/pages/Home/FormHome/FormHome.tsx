import Form from "./Form/Form";
import FormSuccess from "./Success/FormSuccess";
import { useAppSelector } from "../../../store/hooks";

function FormHome() {
  const isRegistering = useAppSelector((state) => state.form.isRegistering);

  return <>{isRegistering ? <Form /> : <FormSuccess />}</>;
}

export default FormHome;
