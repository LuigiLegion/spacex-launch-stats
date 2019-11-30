import React from 'react';

const LaunchItem = ({ launch }) => {
  console.log('launch in LaunchItem: ', launch);

  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
  } = launch;

  return <div>Placeholder</div>;
};

export default LaunchItem;
