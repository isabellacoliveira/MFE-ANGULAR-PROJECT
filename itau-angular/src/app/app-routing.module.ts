import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'favorites',
      component: FavoritesComponent,
    },
    {
      path: '**',
      component: NotfoundComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
