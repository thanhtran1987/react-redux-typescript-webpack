/// <reference path="./Tile.d.ts"/>

import * as React from "react";
import styled from "styled-components";

import Title from "../components/Title";
import { Padder } from "../utils/SharedStyles";

const TileWrapper = styled.div`
  position: relative;
  min-width: 200px;
  div > img {
    width: 100%;
  }
`;

const Tile = (props: TileProps) => {
  const { show } = props;
  return (
    <TileWrapper>
      <Padder>
        <img src={show.image} alt="hero image" />
        <Title name={show.name} />
      </Padder>
    </TileWrapper>
  );
};
export default Tile;
