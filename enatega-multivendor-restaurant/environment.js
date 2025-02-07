/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import * as Updates from 'expo-updates'
import { useContext } from 'react'
import Configuration from './src/ui/context/configuration'

const getEnvVars = (env = Updates.releaseChannel) => {
  const configuration = useContext(Configuration.Context)

  console.log('configuration', configuration)

  if (env === 'production' || env === 'staging') {
    return {
      // GRAPHQL_URL: 'https://enatega-multivendor.up.railway.app/graphql',
      // WS_GRAPHQL_URL: 'wss://enatega-multivendor.up.railway.app/graphql',
      GRAPHQL_URL: 'https://gql.tester-pruebas.com/graphql',
      WS_GRAPHQL_URL: 'ws://gql.tester-pruebas.com/graphql',

      // GRAPHQL_URL: 'http://192.168.43.124:2002/graphql',
      // WS_GRAPHQL_URL: 'ws://192.168.43.124:2002/graphql',

      SENTRY_DSN: configuration.restaurantAppSentryUrl
    }
  }
  return {
    // GRAPHQL_URL: 'https://enatega-multivendor.up.railway.app/graphql',
    // WS_GRAPHQL_URL: 'wss://enatega-multivendor.up.railway.app/graphql',
    GRAPHQL_URL: 'https://gql.tester-pruebas.com/graphql',
    WS_GRAPHQL_URL: 'ws://gql.tester-pruebas.com/graphql',

    // GRAPHQL_URL: 'http://192.168.43.124:2002/graphql',
    // WS_GRAPHQL_URL: 'ws://192.168.43.124:2002/graphql',

    SENTRY_DSN: configuration.restaurantAppSentryUrl
    // SENTRY_DSN:
    //   'https://91b55f514a2c4708845789d6e79abf10@o1103026.ingest.sentry.io/6131933'
  }
}

export default getEnvVars
