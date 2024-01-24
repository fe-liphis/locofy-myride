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
            imgAlt="Carro de cor caramelo em uma rua com uma casa de fundo"
            text="The best balance of price and comfort. You will not go wrong with our basic rides."
          />
        </li>
        <li>
          <Card
            img={comfort}
            title="Comfort"
            imgAlt="Carro de cor preta em uma estrada de terra com arvores em volta"
            text="If comfort is your priority, this is the ride for you. It’s spacious and packed with features."
          />
        </li>
        <li>
          <Card
            img={business}
            title="Business"
            imgAlt="Carro de cor preta em uma rua com dois imoveis de fundo"
            text="Do you want to travel around the city in style? Make sure to select or business class rides."
          />
        </li>
        <li>
          <Card
            img={deluxe}
            title="Deluxe"
            imgAlt="Carro de cor branca em uma pista de alta velocidade"
            text="The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for."
          />
        </li>
      </CardsContainer>
    </ClassRidesContainer>
  );
}

export default ClassRides;
