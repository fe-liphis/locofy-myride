import styled from "styled-components";
import check_icon from "../../../assets/check_icon.svg";

const IconImg = styled.img`
  width: 45px;
`;

function Check() {
  return <IconImg src={check_icon} />;
}

export default Check;
