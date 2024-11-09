import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './component/producto/producto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página principal',
  },
  {
    path: 'producto',
    component: ProductoComponent,
    title: 'Soy producto',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
