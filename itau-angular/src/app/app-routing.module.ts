import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
    {
    path: '',
    component: NavbarComponent,
    // canActivate: [AuthGuardService],
    // data: {
    //   autorizacaoNecessaria: 'visualizarDashboard'
    // }
  },
  //   {
  //   path: 'login',
  //   component: LoginContainerComponent,
  //   canActivate: [LoginGuardService],
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent,
  //       canActivate: [LoginGuardService]
  //     },
  //     {
  //       path: 'redefinir-senha',
  //       component: RedefinirSenhaComponent,
  //       canActivate: [LoginGuardService]
  //     },
  //     {
  //       path: 'redefinir-senha/concluir',
  //       component: ConcluirRedefinirSenhaComponent,
  //       canActivate: [LoginGuardService]
  //     }
  //   ],
  //   data: {
  //     autorizacaoNecessaria: 'rotaLogin'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
