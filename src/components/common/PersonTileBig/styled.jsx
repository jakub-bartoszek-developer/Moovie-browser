import styled from "styled-components";

export const Wrapper = styled.div`
 background-color: ${({ theme }) => theme.colors.tile.background};
 max-width: 1368px;
 padding: 40px;
 column-gap: 40px;
 -webkit-column-gap: 40px;
 -moz-column-gap: 40px;
 column-gap: 40px;
 row-gap: 24px;
 box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
 display: grid;
 grid-template-columns: minmax(312px, 1fr) 3fr;
 grid-template-rows: auto auto;
 margin-top: 56px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-row: 1;
  grid-template-columns: minmax(114px, 1fr) 1.5fr;
  padding: 16px;
  gap: 16px;
  margin: 0 16px 8px 16px;
 }
`;

export const ImageWrapper = styled.div`
 aspect-ratio: 6/9;
 display: flex;
 justify-content: center;
 border-radius: 5px;
 grid-row: 1 / span 2;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-row: 1;
 }
`;

export const Image = styled.img`
 max-width: 399px;
 max-height: 564px;
 border-radius: 5px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  width: 116px;
  height: 163px;
 }
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 gap: 24px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 16px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  gap: 8px;
 }
`;

export const Name = styled.header`
 font-size: 36px;
 font-weight: 600;
 line-height: 120%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 16px;
 }
`;

export const Birth = styled.div`
 font-size: 18px;
 line-height: 120%;
 display: flex;
 flex-direction: column;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 12px;
 }
`;

export const BirthDate = styled.p`
 color: ${({ theme }) => theme.colors.tile.text};

 &::before {
  color: ${({ theme }) => theme.colors.tile.mutedText};
  content: "Date of birth: ";
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  &::before {
   content: "Birth: ";
  }
 }
`;

export const BirthPlace = styled.p`
 color: ${({ theme }) => theme.colors.tile.text};

 &::before {
  color: ${({ theme }) => theme.colors.tile.mutedText};
  content: "Place of birth: ";
 }
`;

export const Biography = styled.div`
 font-size: 20px;
 line-height: 160%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
  grid-column: 1 / span 2;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 16px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 14px;
  line-height: 160%;
 }
`;
