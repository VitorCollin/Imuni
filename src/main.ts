import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "imuni-2ded8", appId: "1:584015208271:web:71692875aca7bcec376f3a", storageBucket: "imuni-2ded8.firebasestorage.app", apiKey: "AIzaSyBFdrzy9DkXQH8XtSmHumEeMCYw-O2aP94", authDomain: "imuni-2ded8.firebaseapp.com", messagingSenderId: "584015208271", measurementId: "G-5YY2YX8T65", projectNumber: "584015208271", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
