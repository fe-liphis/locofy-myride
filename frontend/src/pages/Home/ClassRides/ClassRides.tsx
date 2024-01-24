import basic from "../../../assets/carsClass/basic.png";
import comfort from "../../../assets/carsClass/comfort.png";
import business from "../../../assets/carsClass/business.png";
import deluxe from "../../../assets/carsClass/deluxe.png";
import Card from "../../../components/UI/Card/Card";
import {
  CardsContainer,
  ClassRidesContainer,
  ClassRidesSubTitle,
  ClassRidesTitle,
} from "./styles";

function ClassRides() {
  return (
    <ClassRidesContainer>
      <ClassRidesSubTitle>Why should you ride with us?</ClassRidesSubTitle>
      <ClassRidesTitle>Best in class rides</ClassRidesTitle>
      <CardsContainer>
        <li>
          <Card
            img={basic}
            title="Basic"
            text="The best balance of price and comfort. You will not go wrong with our basic rides."
          />
        </li>
        <li>
          <Card
            img={comfort}
            title="Comfort"
            text="If comfort is your priority, this is the ride for you. It’s spacious and packed with features."
          />
        </li>
        <li>
          <Card
            img={business}
            title="Business"
            text="Do you want to travel around the city in style? Make sure to select or business class rides."
          />
        </li>
        <li>
          <Card
            img={deluxe}
            title="Deluxe"
            text="The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for."
          />
        </li>
      </CardsContainer>
    </ClassRidesContainer>
  );
}

export default ClassRides;
