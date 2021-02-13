import React, { Component } from 'react';
import styled from 'styled-components'
import hydro from '../images/logos/bchydro-logo-high-res.png';
import telus from '../images/logos/telus.png';
// import riverRock from '../images/logos/river-rock.png';
import github from '../images/logos/github.png';
import coastCapital from '../images/logos/coast-capital.png';
import microsoft from '../images/logos/microsoft.png';
import canadalife from '../images/logos/canada-life.png';
import samFrench from '../images/logos/samfrench.png';
import beyondTrust from '../images/logos/beyond-trust.png';
import vct from '../images/logos/vct.png';
import sap from '../images/logos/sap-logo.png';

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(max(125px), 1fr));
  grid-gap: 2rem;
  margin: 0 auto;
`

const LogoGarden = () => {
  return (
    <div>
      <h3 className="text-xl md:text-3xl section-heading text-center">More clients</h3>
      <LogoGroup>
        {images().map(img => {
          return (
            <img src={img.src} alt={img.alt} className="greyscale" key={img.src} />
          )
        })}
      </LogoGroup>
    </div>
  );
};


const images = () => {
  return [
    {
      src: microsoft,
      alt: 'Microsoft'
    },
    {
      src: sap,
      alt: 'SAP'
    },
    {
      src: canadalife,
      alt: 'Canada Life'
    },
    {
      src: github,
      alt: 'Github'
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
      src: beyondTrust,
      alt: 'BeyondTrust'
    },
    {
      src: samFrench,
      alt: 'Samuel French'
    },
    {
      src: vct,
      alt: 'Vancouver Civic Theatres'
    }
  ]
}

export default LogoGarden;
