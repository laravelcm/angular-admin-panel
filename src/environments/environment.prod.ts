export const environment = {
  production: true,
  appName: process.env.NG_APP_NAME,
  debug: process.env.NG_APP_DEBUG,
  version: process.env.NG_APP_VERSION,
  baseUrl: process.env.NG_APP_BASE_URL,
  apiUrl: process.env.NG_APP_API_URL,
  apiVersion: process.env.NG_APP_API_VERSION,
  sentryDsn: process.env.NG_APP_SENTRY_DSN,
  sentryTracesSampleRate: process.env.NG_APP_SENTRY_TRACES_SAMPLE_RATE,
};
