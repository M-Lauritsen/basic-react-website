import React from 'react';
import PortfolioSection from '../../PortfolioSection/PortfolioSection';
import { portObjFour, portObjOne, portObjThree, portObjTwo } from './Data';

function Portfolio() {
  return (
    <>
      <PortfolioSection {...portObjOne} />
      <PortfolioSection {...portObjTwo} />
      <PortfolioSection {...portObjThree} />
      <PortfolioSection {...portObjFour} />
    </>
  );
}

export default Portfolio;
