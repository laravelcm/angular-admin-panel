// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: process.env.NG_APP_NAME,
  debug: process.env.NG_APP_DEBUG,
  version: process.env.NG_APP_VERSION,
  baseUrl: process.env.NG_APP_BASE_URL,
  apiUrl: process.env.NG_APP_API_URL,
  apiVersion: process.env.NG_APP_API_VERSION,
  sentryDsn: process.env.NG_APP_SENTRY_DSN,
  sentryTracesSampleRate: process.env.NG_APP_SENTRY_TRACES_SAMPLE_RATE,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
