import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const launches_query = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>

        <Query query={launches_query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            } else if (error) {
              console.log({ error });
            } else {
              console.log({ data });
              return <h4>Data Fetched Successfully.</h4>;
            }
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
