import { FormValues } from "./FormHome";
import { TextFieldStyled } from "../../../components/UI/Input/styles";
import Button from "../../../components/UI/Button/Button";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";
import getTypeCarIcon from "../../../utils/getTypeCarIcon";
import Check from "../../../components/UI/Svgs/Check";

function FormSucess(data: FormValues) {
  return (
    <>
      <Check />
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

      <GroupRadio>
        <input readOnly={true} />
        <label>
          {getTypeCarIcon(data.carType)}
          <span>{data.carType}</span>
        </label>
      </GroupRadio>
      <Button>Submit a new car</Button>
    </>
  );
}

export default FormSucess;
