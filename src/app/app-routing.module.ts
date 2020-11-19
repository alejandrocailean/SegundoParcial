import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ErrorComponent } from "./Components/Pages/error/error.component";
import { LoginComponent } from './Components/Pages/login/login.component';
import { LoginGuard } from './Components/Guards/login.guard';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { ListarComponent } from './Components/Pages/listar/listar.component';
import { AltaComponent } from './Components/Pages/alta/alta.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { AdminGuard } from './Components/Guards/admin.guard';
import { ProfesorComponent } from './Components/Pages/profesor/profesor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'register',component:RegisterComponent},  
  {path:'listar',component:ListarComponent, canActivate:[LoginGuard]},
  {path:'alta',component:AltaComponent , canActivate:[LoginGuard]},
  {path:'admin',component:AdminComponent, canActivate:[AdminGuard]},
  {path:'profe',component:ProfesorComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
