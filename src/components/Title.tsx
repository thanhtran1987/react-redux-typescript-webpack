/// <reference path="./Title.d.ts"/>

import * as React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  > div {
    position: relative;
    padding: 1em;
    > h2 {
      color: #fff;
      font-size: 1em;
      margin: 0 0 0 30px;
      @media only screen and (min-width: 1024px) {
        font-size: 1.5em;
      }
    }
  }
`;
const LogoWrapper = styled.div`
  margin: 0 1em 0 0;
  width: 20px;
  height: 20px;
  background: url('${process.env.PUBLIC_URL}/asset/img/logo.png') no-repeat 100%;
  background-size: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const FX = styled.div`
  background: #000;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: -1;
`;

const Tile = (props: TitleProps) => {
  const { name } = props;
  return (
    <TitleWrapper>
      <div>
        <FX />
        <LogoWrapper />
        <h2>{name}</h2>
      </div>
    </TitleWrapper>
  );
};
export default Tile;
