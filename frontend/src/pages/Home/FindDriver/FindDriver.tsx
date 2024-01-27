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
import Clear from "../../../components/UI/Svgs/Clear";

function FindDriver() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <FindDriverContainer>
      <img
        src={findDriver}
        alt="Street with a highlighted yellow car and a yellow my ride logo on top"
      />
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
                    <Clear />
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
                    <Clear />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ButtonFindDriver
            aria-label="find a driver"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M15.5 14.367h-.79l-.28-.27A6.471 6.471 0 0016 9.867a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"
                  clipRule="evenodd"
                ></path>
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
