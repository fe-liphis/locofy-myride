import { IconButton, InputAdornment } from "@mui/material";
import findDriver from "../../../assets/image_my_ride_home.png";
import {
  ButtonFindDriver,
  FindDriverContainer,
  FindDriverFormContainer,
  FindDriverFormTitle,
  FindDriverSubTitle,
  FindDriverTitle,
  FindDriverTitleStrong,
  TextFieldSearch,
} from "./styles";
import { useState } from "react";

function FindDriver() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <FindDriverContainer>
      <img src={findDriver} alt="" />
      <div>
        <FindDriverSubTitle>Need a ride?</FindDriverSubTitle>
        <FindDriverTitle>
          Book with{" "}
          <FindDriverTitleStrong>
            my<span>RIDE</span>
          </FindDriverTitleStrong>{" "}
          now!
        </FindDriverTitle>
        <FindDriverFormContainer>
          <FindDriverFormTitle>Find a ride now</FindDriverFormTitle>
          <TextFieldSearch
            id="pickup"
            label="Your Pickup"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="Clear Pickup Input"
                    onClick={() => setPickup("")}
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8334 5.70874L14.6584 4.53374L10.0001 9.19207L5.34175 4.53374L4.16675 5.70874L8.82508 10.3671L4.16675 15.0254L5.34175 16.2004L10.0001 11.5421L14.6584 16.2004L15.8334 15.0254L11.1751 10.3671L15.8334 5.70874Z"
                        fill="white"
                        fill-opacity="0.56"
                      />
                    </svg>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextFieldSearch
            id="destination"
            label="Your Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="Clear Destination Input"
                    onClick={() => setDestination("")}
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8334 5.70874L14.6584 4.53374L10.0001 9.19207L5.34175 4.53374L4.16675 5.70874L8.82508 10.3671L4.16675 15.0254L5.34175 16.2004L10.0001 11.5421L14.6584 16.2004L15.8334 15.0254L11.1751 10.3671L15.8334 5.70874Z"
                        fill="white"
                        fill-opacity="0.56"
                      />
                    </svg>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ButtonFindDriver
            startIcon={
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5 14.3671H14.71L14.43 14.0971C15.41 12.9571 16 11.4771 16 9.86707C16 6.27707 13.09 3.36707 9.5 3.36707C5.91 3.36707 3 6.27707 3 9.86707C3 13.4571 5.91 16.3671 9.5 16.3671C11.11 16.3671 12.59 15.7771 13.73 14.7971L14 15.0771V15.8671L19 20.8571L20.49 19.3671L15.5 14.3671ZM9.5 14.3671C7.01 14.3671 5 12.3571 5 9.86707C5 7.37707 7.01 5.36707 9.5 5.36707C11.99 5.36707 14 7.37707 14 9.86707C14 12.3571 11.99 14.3671 9.5 14.3671Z"
                  fill="white"
                />
              </svg>
            }
          >
            find a driver
          </ButtonFindDriver>
        </FindDriverFormContainer>
      </div>
    </FindDriverContainer>
  );
}

export default FindDriver;
