import React, { Component } from 'react';
import styled from 'styled-components'
import hydro from '../images/logos/bchydro.png';
import telus from '../images/logos/telus.png';
import riverRock from '../images/logos/river-rock.png';
import donnelly from '../images/logos/donnelly.png';
import coastCapital from '../images/logos/coast-capital.png';
import britishFashion from '../images/logos/british-fashion.png';
import greatWest from '../images/logos/greatwest.png';
import samFrench from '../images/logos/samfrench.png';

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 2rem;
`

const LogoGarden = () => {
  return (
    <div>
      <h3 className="text-xl md:text-3xl section-heading text-center">Other Clients</h3>
      <LogoGroup>
        {images().map(img => {
          return (
            <img src={img.src} alt={img.alt} className="p-4 greyscale" />
          )
        })}
      </LogoGroup>
    </div>
  );
};


const images = () => {
  return [
    {
      src: riverRock,
      alt: 'RiverRock Casino'
    },
    {
      src: hydro,
      alt: 'BC Hydro'
    },
    {
      src: telus,
      alt: 'Telus'
    },
    {
      src: coastCapital,
      alt: 'Coast Capital Savings'
    },
    {
      src: samFrench,
      alt: 'Samuel French'
    },
    {
      src: donnelly,
      alt: 'Donnelly Group'
    },
    {
      src: greatWest,
      alt: 'Great-West Life'
    },
    {
      src: britishFashion,
      alt: 'British Fashion Council'
    }
  ]
}

export default LogoGarden;