import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -10px;
  padding: 10px 18px;
  margin-bottom: 34px;
  border-bottom: 2px solid var(--lght-grey);

  .title {
    color: #000;
    font-size: 45px;
    padding: 12px 0;
  }

  .summary {
    color: var(--alt-text);
    font-family: var(--plex-serif);
    font-size: 16px;
    padding: 14px 0;
  }

  .reading-time {
    color: var(--alt-text);
  }

  .date {
    color: var(--alt-text);
    font-family: var(--dosis);
  }

  .foot-info {
    display: flex;
    justify-content: space-between;
    padding: 15px 0 5px 0;

    ul {
      display: flex;

      li {
        color: var(--alt-text);
        list-style: none;
        padding: 0px 8px 0 0;
      }
    }
  }

  :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    width: 100%;
    padding: 10px 0px;
  }
`;
