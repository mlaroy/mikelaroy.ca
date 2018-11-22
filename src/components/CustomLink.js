import React, { Component } from 'react'
import { Link } from 'gatsby';

class CustomLink extends Component {
  render() {
    const { children, css, to, external = false, icon = false } = this.props;
    const classes = `text-green-darker hover:text-blue-light transition ${css}`
    if (external) {
      return (
        <a href={to} className={classes}>
          {children}
          {icon && getIcon(icon)}
        </a>
      );
    }else{
      return (
        <Link className={classes} to={to}>
          {children}
          {icon && getIcon(icon)}
        </Link>
      );
    }
  }
}

export default CustomLink;

const getIcon = icon => {
  switch (icon) {
    case 'twitter':
      return twitter();
    case 'linkedin':
      return linkedIn();
    case 'github':
      return github();
    default:
      return '';
  }
}

const twitter = () => {
  return (
    <svg version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 449.956 449.956">
      <title>Twitter</title>
      <g>
        <path fill="#22292f" d="M449.956,85.657c-17.702,7.614-35.408,12.369-53.102,14.279c19.985-11.991,33.503-28.931,40.546-50.819   c-18.281,10.847-37.787,18.268-58.532,22.267c-18.274-19.414-40.73-29.125-67.383-29.125c-25.502,0-47.246,8.992-65.24,26.98   c-17.984,17.987-26.977,39.731-26.977,65.235c0,6.851,0.76,13.896,2.284,21.128c-37.688-1.903-73.042-11.372-106.068-28.407   C82.46,110.158,54.433,87.46,31.403,59.101c-8.375,14.272-12.564,29.787-12.564,46.536c0,15.798,3.711,30.456,11.138,43.97   c7.422,13.512,17.417,24.455,29.98,32.831c-14.849-0.572-28.743-4.475-41.684-11.708v1.142c0,22.271,6.995,41.824,20.983,58.674   c13.99,16.848,31.645,27.453,52.961,31.833c-7.995,2.091-16.086,3.138-24.269,3.138c-5.33,0-11.136-0.475-17.416-1.42   c5.9,18.459,16.75,33.633,32.546,45.535c15.799,11.896,33.691,18.028,53.677,18.418c-33.498,26.262-71.66,39.393-114.486,39.393   c-8.186,0-15.607-0.373-22.27-1.139c42.827,27.596,90.03,41.394,141.612,41.394c32.738,0,63.478-5.181,92.21-15.557   c28.746-10.369,53.297-24.267,73.665-41.686c20.362-17.415,37.925-37.448,52.674-60.097c14.75-22.651,25.738-46.298,32.977-70.946   c7.23-24.653,10.848-49.344,10.848-74.092c0-5.33-0.096-9.325-0.287-11.991C421.785,120.202,437.202,104.306,449.956,85.657z"></path>
      </g>
    </svg>
  )
};

const github = () => {
  return (
    <svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 512 512">
      <title>Github</title>
      <g>
        <path fill="#22292f" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027   c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5   c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25   c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66   c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5   c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8   s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25   c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25   s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5   v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094   c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675   c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41   s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353   C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z"></path>
      </g>
    </svg>
  )
};

const linkedIn = () => {
  return (
    <svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 512 512">
      <title>LinkedIn</title>
      <g>
        <path fill="#22292f" d="M426,0H86C38.7,0,0,38.7,0,86v340c0,47.3,38.7,86,86,86h340c47.301,0,86-38.7,86-86V86C512,38.7,473.301,0,426,0z M192,416   h-64V192h64V416z M160,160c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S177.673,160,160,160z M416,416h-64V288   c0-17.673-14.326-32-32-32s-32,14.327-32,32v128h-64V192h64v39.736C301.199,213.604,321.377,192,344,192c39.766,0,72,35.817,72,80   V416z"></path>
      </g>
    </svg>
  )
}