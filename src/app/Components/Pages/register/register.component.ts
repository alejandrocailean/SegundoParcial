import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario;
  password;
  users:string[]=['PROFESOR','ALUMNO','ADMINISTRADOR'];

  constructor(private  auth: AngularFireAuth,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.fb.group({
    user: [''],
    email: [''],
    password:['']    
  });

  /* async register(){
    try{
      const rta= await this.auth.createUserWithEmailAndPassword(this.usuario,this.password);
      console.log(rta);
      this.router.navigateByUrl("login");
      localStorage.clear();
    }
    catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  } */

  onSubmit(){
    console.warn(this.profileForm.value.user);

    // this.auth.createUserWithEmailAndPassword().then(()=>{
    //   console.log("creacion exitosa");

  }
}
