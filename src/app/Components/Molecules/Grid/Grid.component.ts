import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/Services/services/firestore/firestore.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  @Input() listado:any[];
  @Input() titulo:string;
  animal:string[]=["PERRO","GATO","HURON"];
  hid_mod:boolean;
  modify={};

  constructor(private router:Router, private firestore:FirestoreService,private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.listado);
    this.hid_mod=true;
  }  
  
  eliminar(index:number){
    console.log( this.listado[index].id);
    this.firestore.eliminar(this.listado[index].id);
  }

  modificar(index:number){
    this.modify= {data:this.listado[index].data,id:this.listado[index].id};

    console.log(this.modify);
    this.hid_mod=false;
    // this.profileForm = this.fb.group({
    //   animal: [this.modify['data'].animal],
    //   nombre: [this.modify['data'].nombre],
    //   raza:   [this.modify['data'].raza],
    //   edad:   [this.modify['data'].edad],
    //   duenio: [this.modify['data'].duenio]
      
    // });

    this.profileForm.setValue(this.modify['data']);
  }

  profileForm = this.fb.group({
    animal: [''],
    nombre: [''],
    raza:   [''],
    edad:   [''],
    duenio: ['']
    
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    
    this.firestore.modificacion(this.modify['id'] ,this.profileForm.value).then(()=>{
      console.log("Modificacion exitosa");
    });

    this.hid_mod=true;
    this.profileForm.reset ();
  }   
    
  


}


