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
        <CardButton aria-label={`${buttonText} ${title} car`}>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              title
            )}+Car`}
            target="_blank"
          >
            {buttonText}
          </a>
        </CardButton>
      </CardContentWrapper>
    </CardContainer>
  );
}

export default Card;
