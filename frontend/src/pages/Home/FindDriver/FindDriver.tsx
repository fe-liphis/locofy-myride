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
import Search from "../../../components/UI/Svgs/Search";

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
          <ButtonFindDriver aria-label="find a driver" startIcon={<Search />}>
            find a driver
          </ButtonFindDriver>
        </FindDriverFormContainer>
      </div>
    </FindDriverContainer>
  );
}

export default FindDriver;
