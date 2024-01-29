import Check from "../../../components/UI/Svgs/Check";
import getFirstName from "../../../utils/getFirstName";
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
import success_img from "../../../assets/success_image.png";
import getCarType from "../../../utils/getCarType";
import { FormValues } from "../FormHome/types/FormValues";

type FormSuccessProps = {
  handleOnClick: () => void;
  data: FormValues;
};

function FormSucess({ handleOnClick, data }: FormSuccessProps) {
  const firstName = getFirstName(data.fullName);

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
            <InfoDescription>{data?.fullName}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Email</InfoTitle>
            <InfoDescription>{data?.email}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Country</InfoTitle>
            <InfoDescription>{data?.country}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>City</InfoTitle>
            <InfoDescription>{data?.city}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Referal Code</InfoTitle>
            <InfoDescription>{data?.code}</InfoDescription>
          </InfoControl>

          <InfoControl>
            <InfoTitle>Car type</InfoTitle>
            <InfoDescription>{getCarType(data?.carType)}</InfoDescription>
          </InfoControl>
        </InfosContainer>

        <FigureContainer>
          <img src={success_img} alt="Imagem de sucesso do formulário" />
        </FigureContainer>
      </ContentContainer>
      <FormSuccessButton onClick={() => handleOnClick()}>
        Submit a new car
      </FormSuccessButton>
    </FormSuccessContainer>
  );
}

export default FormSucess;
