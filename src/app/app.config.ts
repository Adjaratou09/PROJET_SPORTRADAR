import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { from } from 'rxjs';

//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import  {  initializeApp,  provideFirebaseApp  }  from  '@angular/fire/app'; 
import { getFirestore } from 'firebase/firestore';
import { provideFirestore } from '@angular/fire/firestore';

// TODO: Replace the following with your app's Firebase project configuration

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
       initializeApp({
     apiKey: "AIzaSyAX3HS2Da2JkcgFST0dsyU71Zt4Slu-fVM",
  authDomain: "sportradar-8dddd.firebaseapp.com",
  projectId: "sportradar-8dddd",
  storageBucket: "sportradar-8dddd.firebasestorage.app",
  messagingSenderId: "754310610391",
  appId: "1:754310610391:web:bdbf37d2b036785839df92",
  measurementId: "G-QYFNYY1999"
      })
    ),
    
  ]
};
//function provideFirebaseApp(arg0: () => FirebaseApp):
 /*import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}
*/
