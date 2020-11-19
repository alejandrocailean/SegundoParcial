import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Services/services/firestore/firestore.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista=[];

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.firestore.getDatos().subscribe((datazos) => {
      this.lista=[];
      datazos.forEach((data: any) => {
        this.lista.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        });
      })
      console.log(this.lista);
    });
  }

}
