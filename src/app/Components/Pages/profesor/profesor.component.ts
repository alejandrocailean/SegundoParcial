import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { FirestoreService } from 'src/app/Services/services/firestore/firestore.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  lista=[];
  @Output() profesores= new EventEmitter<any>();

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.listar();
    
  }

  listar(){
    this.firestore.getDatos('profesores').subscribe((datazos) => {
      this.lista=[];
      datazos.forEach((data: any) => {        
        this.lista.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        });
      })
      console.log(this.lista);
      this.profesores.emit(this.lista);
    });
  }

}
