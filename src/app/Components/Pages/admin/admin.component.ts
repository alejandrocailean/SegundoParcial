import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  h_alta_admin:boolean;
  h_alta_materia:boolean;
  h_alta_alumno:boolean;
  listaProfesores:any[]=[];
  listaMaterias:any[]=[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.h_alta_admin=true;
    this.h_alta_materia=true;
    this.h_alta_alumno=true;
  }

  profileForm = this.fb.group({
    user: ['ADMINISTRADOR'],
    email: [''],
    password:['']    
  });

  materiaForm=this.fb.group({
    nombre:[],
    cuatrimestre:[],
    cupo:[],
    anio:[],
    profesor:[]
  });

  alumnoForm=this.fb.group({
    alumno:[],
    materia:[]
    
  });

  altaAdmin(){
    console.warn(this.profileForm.value);
    this.h_alta_admin=true;

    // this.auth.createUserWithEmailAndPassword().then(()=>{
    //   console.log("creacion exitosa");

  }

  altaMateria(){
    console.warn(this.alumnoForm.value);
    this.h_alta_alumno=true;

  }

  altaAlumno(){
    console.warn(this.alumnoForm.value);
  }

  listaprofe(e){
    // console.log(e);
    this.listaProfesores=e;
    console.log(this.listaProfesores);
  }

  listaMateria(e){
    // console.log(e);
    this.listaMaterias=e;
    console.log(this.listaMaterias);
  }
}
