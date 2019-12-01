import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h1 className="display-4 my-3">Launches</h1>

          <MissionKey />

          <Query query={LAUNCHES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) {
                return <h4>Loading...</h4>;
              } else if (error) {
                console.log({ error });
              } else {
                // console.log({ data });

                return (
                  <Fragment>
                    {data.launches.map(curLaunch => (
                      <LaunchItem
                        key={curLaunch.flight_number}
                        launch={curLaunch}
                      />
                    ))}
                  </Fragment>
                );
              }
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}

export default Launches;
