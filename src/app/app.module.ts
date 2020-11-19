import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule   } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './Components/Pages/home/home.component';
import { ErrorComponent } from './Components/Pages/error/error.component';
import { FirestoreService } from './Services/services/firestore/firestore.service';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { NombreUsuarioComponent } from './Components/Atoms/nombre-usuario/nombre-usuario.component';
import { NavComponent } from './Components/Organisms/Nav/Nav.component';
import { FooterComponent } from './Components/Organisms/Footer/Footer.component';
import { AltaComponent } from './Components/Pages/alta/alta.component';
import { ListarComponent } from './Components/Pages/listar/listar.component';
import { GridComponent } from './Components/Molecules/Grid/Grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { AlumnoComponent } from './Components/Pages/alumno/alumno.component';
import { ProfesorComponent } from './Components/Pages/profesor/profesor.component';
import { MateriasComponent } from './Components/Pages/materias/materias.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    NombreUsuarioComponent,
    NavComponent,
    FooterComponent,
    AltaComponent,
    ListarComponent,
    GridComponent,
    AdminComponent,
    AlumnoComponent,
    ProfesorComponent,
    MateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     FormsModule,
     ReactiveFormsModule,
     NgbModule 
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
