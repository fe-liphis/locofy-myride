import {
  CardButton,
  CardContainer,
  CardContentWrapper,
  CardParagraph,
  CardTitle,
} from "./styles";

type CardProps = {
  img: string;
  imgAlt?: string;
  title: string;
  text: string;
  buttonText?: string;
};

function Card({
  img,
  imgAlt,
  title,
  text,
  buttonText = "LEARN MORE",
}: CardProps) {
  return (
    <CardContainer>
      <img src={img} alt={imgAlt} />
      <CardContentWrapper>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{text}</CardParagraph>
        <CardButton>{buttonText}</CardButton>
      </CardContentWrapper>
    </CardContainer>
  );
}

export default Card;
