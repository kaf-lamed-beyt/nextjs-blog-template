import styled from "styled-components";

export const Block = styled.pre`
  width: 100%;
  height: 100%;
  background: var(--lght-grey);
  padding: 25px 20px;
  margin: 20px 0;
  border-radius: 7px;
  overflow: auto;

  code {
    font-family: var(--fira-code);
    counter-reset: line;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    overflow: auto;
    padding: 25px 14px;

    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    overflow: auto;
  }
`;
