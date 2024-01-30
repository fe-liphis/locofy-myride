import Check from "../../../../components/UI/Svgs/Check";
import getFirstName from "../../../../utils/getFirstName";
import {
  ContentContainer,
  FigureContainer,
  FormSuccessButton,
  FormSuccessContainer,
  FormSuccessTitle,
  FormSuccessTitleWrapper,
  InfoControl,
  InfoDescription,
  InfoTitle,
  InfosContainer,
} from "./styles";
import success_img from "../../../../assets/success_image.png";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { showFormRegister } from "../../../../store/form/formSlice";

function FormSuccess() {
  const data = useAppSelector((state) => state.form.successData);
  const dispatch = useAppDispatch();

  const firstName = getFirstName(data.fullName);

  function onSubmitNewCarHandler() {
    dispatch(showFormRegister());
  }

  return (
    <FormSuccessContainer>
      <FormSuccessTitleWrapper>
        <Check />
        <FormSuccessTitle>Welcome, {firstName}</FormSuccessTitle>
      </FormSuccessTitleWrapper>
      <ContentContainer>
        <InfosContainer>
          <InfoControl>
            <InfoTitle>Full Name</InfoTitle>
            <InfoDescription>{data.fullName}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Email</InfoTitle>
            <InfoDescription>{data.email}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Country</InfoTitle>
            <InfoDescription>{data.country}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>City</InfoTitle>
            <InfoDescription>{data.city}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Referal Code</InfoTitle>
            <InfoDescription>{data.code}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Car type</InfoTitle>
            <InfoDescription>{data.carType}</InfoDescription>
          </InfoControl>
        </InfosContainer>

        <FigureContainer>
          <img src={success_img} alt="Imagem de sucesso do formulário" />
        </FigureContainer>
      </ContentContainer>
      <FormSuccessButton onClick={() => onSubmitNewCarHandler()}>
        Submit a new car
      </FormSuccessButton>
    </FormSuccessContainer>
  );
}

export default FormSuccess;
