import { FormValues } from "../FormHome/FormHome";
import { TextFieldStyled } from "../../../components/UI/Input/styles";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";
import getTypeCarIcon from "../../../utils/getTypeCarIcon";
import Check from "../../../components/UI/Svgs/Check";
import getFirstName from "../../../utils/getFirstName";
import {
  FormSuccessButton,
  FormSuccessCarTypeFallback,
  FormSuccessTitle,
  FormSuccessTitleWrapper,
} from "./styles";

function FormSucess(data: FormValues) {
  const firstName = getFirstName(data.fullName);

  return (
    <>
      <FormSuccessTitleWrapper>
        <Check />
        <FormSuccessTitle>Welcome, {firstName}!</FormSuccessTitle>
      </FormSuccessTitleWrapper>
      <TextFieldStyled
        label="Full Name"
        defaultValue={data.fullName}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextFieldStyled
        label="Email"
        defaultValue={data.email}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextFieldStyled
        label="Country"
        defaultValue={data.country}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextFieldStyled
        label="City"
        defaultValue={data.city}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextFieldStyled
        label="Referal Code"
        defaultValue={data.code}
        InputProps={{
          readOnly: true,
        }}
      />
      {data.carType ? (
        <GroupRadio>
          <input readOnly={true} />
          <label>
            {getTypeCarIcon(data.carType)}
            <span>{data.carType}</span>
          </label>
        </GroupRadio>
      ) : (
        <FormSuccessCarTypeFallback>
          Car type not selected
        </FormSuccessCarTypeFallback>
      )}
      <FormSuccessButton>Submit a new car</FormSuccessButton>
    </>
  );
}

export default FormSucess;
