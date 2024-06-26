import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: flex-start;
  gap: 80px;
  padding: 40px 80px;
`;

export const FooterSubtitle = styled.p`
  color: ${(props) => props.theme.fonts.palette.tertiary};
  font-weight: ${(props) => props.theme.fonts.weight.xs};
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterItemList = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.size.s};
  font-weight: ${(props) => props.theme.fonts.weight.xs};
  color: ${(props) => props.theme.fonts.palette.primary};
`;

export const FooterListTitle = styled.h5`
  font-size: ${(props) => props.theme.fonts.size.m};
  font-weight: ${(props) => props.theme.fonts.weight.md};
  color: ${(props) => props.theme.fonts.palette.primary};
  margin-bottom: 20.76px;
`;

export const FooterSocialsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 24.38px;
`;

export const FooterArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
