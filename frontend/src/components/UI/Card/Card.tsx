import { CardContainer } from "./styles";

function Card({ img, imgAlt, title, text, buttonText }) {
  return (
    <CardContainer>
      <img src={img} alt={imgAlt} />
    </CardContainer>
  );
}

export default Card;
