import { FormValues } from "../FormHome/FormHome";
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
import { useEffect, useState } from "react";

type FormSuccessProps = {
  handleOnClick: () => void;
};

function FormSucess({ handleOnClick }: FormSuccessProps) {
  const [data, setData] = useState<FormValues>();
  const [fetching, setFetching] = useState(true);

  console.log(data);

  useEffect(() => {
    async function fetchDriverRegister() {
      async function fetchData() {
        setFetching(true);
        const res = await fetch("http://localhost:3000/driver/185");
        const data = await res.json();
        return data;
      }

      try {
        const driverRegister = await fetchData();
        setData(driverRegister);
      } catch (error) {
        handleOnClick();
      }

      setFetching(false);

      try {
        fetch("http://localhost:3000/driver/1", {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchDriverRegister();
  }, []);

  return (
    <FormSuccessContainer>
      {fetching ? (
        <p>Is Fetching</p>
      ) : (
        <>
          <FormSuccessTitleWrapper>
            <Check />
            <FormSuccessTitle>
              Welcome, {getFirstName(data.fullName)}!
            </FormSuccessTitle>
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
                <InfoDescription>
                  {data.carType ? data.carType : "Car type not selected"}
                </InfoDescription>
              </InfoControl>
            </InfosContainer>

            <FigureContainer>
              <img src={success_img} alt="" />
            </FigureContainer>
          </ContentContainer>
          <FormSuccessButton onClick={() => handleOnClick()}>
            Submit a new car
          </FormSuccessButton>
        </>
      )}
    </FormSuccessContainer>
  );
}

export default FormSucess;
