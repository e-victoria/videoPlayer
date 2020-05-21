// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  localHost: "http://localhost:3000/",
  firebase: {
    apiKey: "AIzaSyCowmHNKNdpkJvDctmmUR4-msNPxPg8KlM",
    authDomain: "video-player-6472d.firebaseapp.com",
    databaseURL: "https://video-player-6472d.firebaseio.com/",
    projectId: "video-player-6472d",
    storageBucket: "video-player-6472d.appspot.com",
    messagingSenderId: "902746048910"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
