import React, { Component } from 'react'

const getIcon = (icon, size = '25') => {
  switch (icon) {
    case 'twitter':
      return twitter(size);
    case 'linkedin':
      return linkedIn(size);
    case 'github':
      return github(size);
    case 'facebook':
      return facebook(size);
    case 'rss':
      return rss(size);
    default:
      return '';
  }
}

const twitter = size => {
  return (
    <svg version="1.1" x="0px" y="0px" width={size + 'px'} height={size + 'px'} viewBox="0 0 449.956 449.956">
      <title>Twitter</title>
      <g>
        <path fill="#22292f" d="M449.956,85.657c-17.702,7.614-35.408,12.369-53.102,14.279c19.985-11.991,33.503-28.931,40.546-50.819   c-18.281,10.847-37.787,18.268-58.532,22.267c-18.274-19.414-40.73-29.125-67.383-29.125c-25.502,0-47.246,8.992-65.24,26.98   c-17.984,17.987-26.977,39.731-26.977,65.235c0,6.851,0.76,13.896,2.284,21.128c-37.688-1.903-73.042-11.372-106.068-28.407   C82.46,110.158,54.433,87.46,31.403,59.101c-8.375,14.272-12.564,29.787-12.564,46.536c0,15.798,3.711,30.456,11.138,43.97   c7.422,13.512,17.417,24.455,29.98,32.831c-14.849-0.572-28.743-4.475-41.684-11.708v1.142c0,22.271,6.995,41.824,20.983,58.674   c13.99,16.848,31.645,27.453,52.961,31.833c-7.995,2.091-16.086,3.138-24.269,3.138c-5.33,0-11.136-0.475-17.416-1.42   c5.9,18.459,16.75,33.633,32.546,45.535c15.799,11.896,33.691,18.028,53.677,18.418c-33.498,26.262-71.66,39.393-114.486,39.393   c-8.186,0-15.607-0.373-22.27-1.139c42.827,27.596,90.03,41.394,141.612,41.394c32.738,0,63.478-5.181,92.21-15.557   c28.746-10.369,53.297-24.267,73.665-41.686c20.362-17.415,37.925-37.448,52.674-60.097c14.75-22.651,25.738-46.298,32.977-70.946   c7.23-24.653,10.848-49.344,10.848-74.092c0-5.33-0.096-9.325-0.287-11.991C421.785,120.202,437.202,104.306,449.956,85.657z"></path>
      </g>
    </svg>
  )
};

const github = size => {
  return (
    <svg x="0px" y="0px" width={size + 'px'} height={size + 'px'} viewBox="0 0 512 512">
      <title>Github</title>
      <g>
        <path fill="#22292f" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027   c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5   c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25   c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66   c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5   c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8   s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25   c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25   s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5   v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094   c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675   c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41   s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353   C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z"></path>
      </g>
    </svg>
  )
};

const linkedIn = size => {
  return (
    <svg x="0px" y="0px" width={size + 'px'} height={size + 'px'} viewBox="0 0 512 512">
      <title>LinkedIn</title>
      <g>
        <path fill="#22292f" d="M426,0H86C38.7,0,0,38.7,0,86v340c0,47.3,38.7,86,86,86h340c47.301,0,86-38.7,86-86V86C512,38.7,473.301,0,426,0z M192,416   h-64V192h64V416z M160,160c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S177.673,160,160,160z M416,416h-64V288   c0-17.673-14.326-32-32-32s-32,14.327-32,32v128h-64V192h64v39.736C301.199,213.604,321.377,192,344,192c39.766,0,72,35.817,72,80   V416z"></path>
      </g>
    </svg>
  )
}

const rss = size => {
  return (
    <svg x="0px" y="0px" width={size + 'px'} height={size + 'px'} viewBox="0 0 402.041 402.04">
    <g>
      <g>
        <path d="M54.816,292.382c-15.229,0-28.169,5.331-38.831,15.988C5.33,319.026,0,331.969,0,347.197
          c0,15.232,5.325,28.172,15.985,38.828c10.662,10.657,23.606,15.988,38.831,15.988c15.227,0,28.168-5.331,38.828-15.988
          c10.656-10.656,15.986-23.596,15.986-38.828c0-15.229-5.33-28.171-15.986-38.827C82.987,297.713,70.046,292.382,54.816,292.382z"
          />
        <path d="M181.01,221.002c-21.51-21.698-46.158-38.97-73.948-51.816c-27.79-12.85-56.914-20.511-87.366-22.985h-1.425
          c-4.949,0-9.042,1.619-12.275,4.854C1.997,154.477,0,158.953,0,164.472v38.543c0,4.757,1.569,8.85,4.708,12.279
          c3.14,3.429,7.089,5.332,11.848,5.708c43.586,4.189,80.845,21.752,111.773,52.678c30.93,30.926,48.49,68.187,52.677,111.771
          c0.382,4.764,2.284,8.712,5.712,11.847c3.427,3.148,7.517,4.72,12.275,4.72h38.545c5.517,0,9.989-1.995,13.415-5.996
          c3.621-3.812,5.236-8.381,4.863-13.709c-2.478-30.447-10.14-59.573-22.987-87.361C219.983,267.16,202.708,242.514,181.01,221.002z
          "/>
        <path d="M367.728,239.701c-20.365-45.585-48.345-86.078-83.936-121.482c-35.405-35.594-75.896-63.572-121.485-83.939
          C116.723,13.917,68.996,2.494,19.126,0.02h-0.855c-4.949,0-9.136,1.713-12.563,5.14C1.903,8.583,0,12.964,0,18.294v40.825
          c0,4.76,1.667,8.897,4.996,12.419c3.33,3.523,7.373,5.376,12.132,5.57c40.924,2.478,79.799,12.188,116.63,29.127
          c36.83,16.94,68.806,38.972,95.93,66.09c27.118,27.123,49.149,59.101,66.089,95.931c16.94,36.836,26.557,75.705,28.839,116.627
          c0.195,4.764,2.046,8.809,5.564,12.139c3.524,3.329,7.762,4.999,12.71,4.999h40.823c5.331,0,9.701-1.902,13.134-5.715
          c3.809-3.806,5.517-8.274,5.144-13.415C399.52,333.017,388.093,285.291,367.728,239.701z"/>
      </g>
    </g>
</svg>

  )
}

const facebook = size => {
  return (
    <svg width={size + 'px'} height={size + 'px'} viewBox="0 0 16 16">
    <path fill="#22292f" d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"/>
    </svg>
  );
};

export default getIcon;
