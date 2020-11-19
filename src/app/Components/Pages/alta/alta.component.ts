import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/Services/services/firestore/firestore.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  animal:string[]=["PERRO","GATO","HURON"];

  constructor(private fb: FormBuilder,private firestoreService:FirestoreService) { }

  ngOnInit(): void {
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
    
    this.firestoreService.agregar(this.profileForm.value).then(()=>{
      console.log("creacion exitosa");
    });
  }

}
