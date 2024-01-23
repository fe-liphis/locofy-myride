import Error from "../Svgs/Error";
import { ErrorFormText } from "./styles";

type ErrorFormProps = {
  label: string;
};

function ErrorForm({ label = "" }: ErrorFormProps) {
  return (
    <ErrorFormText error>
      <Error />
      {label}
    </ErrorFormText>
  );
}

export default ErrorForm;
