// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDqjx5Q_reCcUtvF6xvo4WjE3U8AhHFN6E",
    authDomain: "neurotops-86e6b.firebaseapp.com",
    databaseURL: "https://neurotops-86e6b.firebaseio.com",
    projectId: "neurotops-86e6b",
    storageBucket: "neurotops-86e6b.appspot.com",
    messagingSenderId: "633914770778",
    appId: "1:633914770778:web:d9d219c7623566a9dedf63",
    measurementId: "G-5J5N62W1X1"
  },
  facebook:{
    page_access_token: "EAAU0kwNZBPV0BAAHaj4iWv81KheB3HZCqIByi52qOwzQt82jAAnxzNZAhwbCGvndqoX34KjfvyNlnsZAOJ1JLBegztJ3r2cq5ZCfBTEFal4s7Y7DqKiKTvzmrpjqYfRtbxmntBO0u3ZABwUViTl2M4SHAATZB15JujRRFaB1PQIZBwZDZD"
  },
  twitter:{
    API_key: '6W8m3qpZ8NmOPOKFMXsiI3BrZ',
    secret_key: 'ZMckmFTosl5JGM9My6XARpJirOdhY4P0rWgkGkBBVT2DdILhQE',
    Access_token: '703993045520392194-7u6bB879tSfcWN2eVuAyl0mTQ5LmYIb',
    Access_token_secret: 'rGRyUvzBOwq6b5LfbH5PucW9VwsUdDPcKjPfLrNv4LniL'
  }
};
