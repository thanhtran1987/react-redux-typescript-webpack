import styled from 'styled-components';

export const Padder = styled.div`
  margin: 1em;
  position: relative;
  @media only screen and (min-width: 768px) {
    margin: 2em;
  }
  @media only screen and (min-width: 1024px) {
    margin: 3em;
  }
`;
