import findDriver from "../../../assets/image_my_ride_home.png";
import {
  FindDriverContainer,
  FindDriverFormContainer,
  FindDriverFormTitle,
  FindDriverSubTitle,
  FindDriverTitle,
  FindDriverTitleStrong,
} from "./styles";

function FindDriver() {
  return (
    <FindDriverContainer>
      <img src={findDriver} alt="" />
      <div>
        <FindDriverSubTitle>Need a ride?</FindDriverSubTitle>
        <FindDriverTitle>
          Book with <FindDriverTitleStrong>myRIDE</FindDriverTitleStrong> now!
        </FindDriverTitle>
        <FindDriverFormContainer>
          <FindDriverFormTitle>Find a ride now</FindDriverFormTitle>
          <input type="text" />
          <input type="text" />
          <button>find a driver</button>
        </FindDriverFormContainer>
      </div>
    </FindDriverContainer>
  );
}

export default FindDriver;
