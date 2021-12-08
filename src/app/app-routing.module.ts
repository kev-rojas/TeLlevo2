import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrimerguardGuard } from './RouteGuard/primerguard.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    loadChildren: () => import('./Pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./Pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./Pages/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./Pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule),
    canActivate: [PrimerguardGuard]
  },
  {
    path: 'recovery',
    loadChildren: () => import('./Pages/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./Pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'consumeapi',
    loadChildren: () => import('./Pages/consumeapi/consumeapi.module').then( m => m.ConsumeapiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
