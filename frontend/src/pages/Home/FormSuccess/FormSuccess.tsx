import { FormValues } from "../FormHome/FormHome";
import { TextFieldStyled } from "../../../components/UI/Input/styles";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";
import getTypeCarIcon from "../../../utils/getTypeCarIcon";
import Check from "../../../components/UI/Svgs/Check";
import getFirstName from "../../../utils/getFirstName";
import {
  ContentContainer,
  FigureContainer,
  FormSuccessButton,
  FormSuccessCarTypeFallback,
  FormSuccessContainer,
  FormSuccessTitle,
  FormSuccessTitleWrapper,
  InfosContainer,
} from "./styles";

import success_img from "../../../assets/success_image.png";

function FormSucess(data: FormValues) {
  const firstName = getFirstName(data.fullName);

  return (
    <FormSuccessContainer>
      <FormSuccessTitleWrapper>
        <Check />
        <FormSuccessTitle>Welcome, {firstName}!</FormSuccessTitle>
      </FormSuccessTitleWrapper>
      <ContentContainer>
        <InfosContainer>
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
        </InfosContainer>
        <FigureContainer>
          <img src={success_img} alt="" />
        </FigureContainer>
      </ContentContainer>
      <FormSuccessButton>Submit a new car</FormSuccessButton>
    </FormSuccessContainer>
  );
}

export default FormSucess;
