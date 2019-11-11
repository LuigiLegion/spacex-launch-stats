const axios = require('axios');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: {
      type: GraphQLInt,
    },
    mission_name: {
      type: GraphQLString,
    },
    launch_year: {
      type: GraphQLString,
    },
    launch_date_local: {
      type: GraphQLString,
    },
    launch_success: {
      type: GraphQLBoolean,
    },
    rocket: {
      type: RocketType,
    },
  }),
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parentVal, args) {
        const { data } = await axios.get(
          'https://api.spacexdata.com/v3/launches'
        );

        return data;
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: {
          type: GraphQLInt,
        },
      },
      async resolve(parentVal, args) {
        const { data } = await axios.get(
          `https://api.spacexdata.com/v3/launches/${args.flight_number}`
        );

        return data;
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      async resolve(parentVal, args) {
        const { data } = await axios.get(
          'https://api.spacexdata.com/v3/rockets'
        );

        return data;
      },
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: {
          type: GraphQLString,
        },
      },
      async resolve(parentVal, args) {
        const { data } = await axios.get(
          `https://api.spacexdata.com/v3/rockets/${args.rocket_id}`
        );

        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
