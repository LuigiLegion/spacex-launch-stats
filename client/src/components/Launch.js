import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

class Launch extends Component {
  render() {
    // console.log('this.props.match.params: ', this.props.match.params);

    let { flight_number } = this.props.match.params;
    flight_number = Number(flight_number);

    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            } else if (error) {
              console.log({ error });
            } else {
              console.log({ data });

              return <h4 className="display-4 my-3">Placeholder</h4>;
            }
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
