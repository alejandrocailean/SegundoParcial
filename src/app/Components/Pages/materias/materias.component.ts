import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirestoreService } from 'src/app/Services/services/firestore/firestore.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  lista=[];
  @Output() materias= new EventEmitter<any>();

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.firestore.getDatos('materias').subscribe((datazos) => {
      this.lista=[];
      datazos.forEach((data: any) => {        
        this.lista.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        });
      })
      console.log(this.lista);
      this.materias.emit(this.lista);
    });
  }
}
