// /*****************************
//  * environment.js
//  * path: '/environment.js' (root of your project)
//  ******************************/

import { useContext } from 'react'
import ConfigurationContext from './src/context/Configuration'
import * as Updates from 'expo-updates'

const useEnvVars = (env = Updates.channel) => {
  const configuration = useContext(ConfigurationContext)

  if (env === 'production' || env === 'staging') {

    return {
      GRAPHQL_URL: 'https://gql.tester-pruebas.com/graphql',
      WS_GRAPHQL_URL: 'ws://gql.tester-pruebas.com/graphql',
      SERVER_URL: 'https://gql.tester-pruebas.com/',

      // GRAPHQL_URL: 'http://192.168.43.124:2002/graphql',
      // WS_GRAPHQL_URL: 'ws://192.168.43.124:2002/graphql',
      // SERVER_URL: 'http://192.168.43.124:2002',
      IOS_CLIENT_ID_GOOGLE: configuration.iOSClientID,
      ANDROID_CLIENT_ID_GOOGLE: configuration.androidClientID,
      AMPLITUDE_API_KEY: configuration.appAmplitudeApiKey,
      GOOGLE_MAPS_KEY: configuration.googleApiKey,
      EXPO_CLIENT_ID: configuration.expoClientId,
      SENTRY_DSN: configuration.customerAppSentryUrl,
      TERMS_AND_CONDITIONS: configuration.termsAndConditions,
      PRIVACY_POLICY: configuration.privacyPolicy,
      TEST_OTP: configuration.testOtp,
      GOOGLE_PACES_API_BASE_URL: configuration.googlePlacesApiBaseUrl
    }
  }

  return {
    GRAPHQL_URL: 'https://gql.tester-pruebas.com/graphql',
    WS_GRAPHQL_URL: 'ws://gql.tester-pruebas.com/graphql',
    SERVER_URL: 'https://gql.tester-pruebas.com/',

    // GRAPHQL_URL: 'http://192.168.43.124:2002/graphql',
    // WS_GRAPHQL_URL: 'ws://192.168.43.124:2002/graphql',
    // SERVER_URL: 'http://192.168.43.124:2002',

    // GRAPHQL_URL: 'http://10.97.25.37:8001/graphql',
    // WS_GRAPHQL_URL: 'ws://10.97.25.37:8001/graphql',
    // SERVER_URL: 'http://10.97.25.37:8001/',
    IOS_CLIENT_ID_GOOGLE: configuration.iOSClientID,
    ANDROID_CLIENT_ID_GOOGLE: configuration.androidClientID,
    AMPLITUDE_API_KEY: configuration.appAmplitudeApiKey,
    GOOGLE_MAPS_KEY: configuration.googleApiKey,
    EXPO_CLIENT_ID: configuration.expoClientID,
    SENTRY_DSN: configuration.customerAppSentryUrl,
    TERMS_AND_CONDITIONS: configuration.termsAndConditions,
    PRIVACY_POLICY: configuration.privacyPolicy,
    TEST_OTP: configuration.testOtp,
    GOOGLE_PACES_API_BASE_URL: configuration.googlePlacesApiBaseUrl
  }
}

export default useEnvVars
