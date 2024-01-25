import { FormValues } from "../FormHome/FormHome";
import Check from "../../../components/UI/Svgs/Check";
import getFirstName from "../../../utils/getFirstName";

import {
  ContentContainer,
  FetchingContainer,
  FetchingImg,
  FetchingTitle,
  FigureContainer,
  FormSuccessButton,
  FormSuccessContainer,
  FormSuccessTitle,
  FormSuccessTitleWrapper,
  InfoControl,
  InfoDescription,
  InfoTitle,
  InfosContainer,
  Progress,
} from "./styles";

import success_img from "../../../assets/success_image.png";
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";

import loading_img from "../../../assets/loading_image.jpg";
import { CircularProgress } from "@mui/material";

type FormSuccessProps = {
  handleOnClick: () => void;
};

function FormSucess({ handleOnClick }: FormSuccessProps) {
  const [data, setData] = useState<FormValues>();
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  console.log(data);

  useEffect(() => {
    async function fetchDriverRegister() {
      async function fetchData() {
        setFetching(true);
        const res = await fetch("http://localhost:3000/driver/1");
        const data = await res.json();
        return data;
      }

      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setError(true);
      }

      setTimeout(() => {
        setFetching(false);
      }, 2000);
    }

    fetchDriverRegister();
  }, []);

  useEffect(() => {
    if (data) {
      try {
        fetch("http://localhost:3000/driver/1", {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [data]);

  return (
    <FormSuccessContainer>
      {fetching && (
        <FetchingContainer>
          <FetchingTitle>Fetching driver dates</FetchingTitle>
          <Progress />
        </FetchingContainer>
      )}

      {!fetching && error && (
        <Modal fn={handleOnClick} initialOpen={error}>
          <p>Ta errado mano</p>
        </Modal>
      )}

      {!fetching && !error && (
        <>
          <FormSuccessTitleWrapper>
            <Check />
            <FormSuccessTitle>Welcome, Felipe</FormSuccessTitle>
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
                <InfoDescription>
                  {data?.carType ? data?.carType : "Car type not selected"}
                </InfoDescription>
              </InfoControl>
            </InfosContainer>

            <FigureContainer>
              <img src={success_img} alt="Imagem de sucesso do formulário" />
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
