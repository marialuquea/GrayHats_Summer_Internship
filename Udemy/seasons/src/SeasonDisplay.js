import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the becah!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'; // if lat is more than 0 then summer, then winter
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season] // { text, iconName }

  console.log('props.lat: ' + props.lat);
  console.log('season: ' + season);
  console.log('text: ' + text);

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );


};

export default SeasonDisplay;
