// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCFZCcfStZrbsiM8zn3MmapZopVOC-XQlo',
        authDomain: 'opendtree.firebaseapp.com',
        databaseURL: 'https://opendtree.firebaseio.com',
        projectId: 'opendtree',
        storageBucket: 'opendtree.appspot.com',
        messagingSenderId: '249028705572'
    }
};