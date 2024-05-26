import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'flight',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5201/remoteEntry.js',
      exposedModule: './FlightModule'
    })
    .then(m => {
      return m.FlightsModule
    }).catch(e => {
      // console.error("Failed to load FlightMOdule", e);
      // return import('src/app/placeholder/remote-app-error.module').then(m => m.RemoteAppErrorModule);
    })
  },  
  {
    path: '**',
    component: NotFoundComponent,
  },
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
