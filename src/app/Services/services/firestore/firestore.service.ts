import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }
  
  //ABM:

  //Alta
  public agregar(coleccion:string,data:{nombre:string,apellido:string,mensaje:string}){
    return this.firestore.collection(coleccion).add(data);
  }

  //Baja
  public eliminar (coleccion:string,id){    
    this.firestore.collection(coleccion).doc(id).delete();
  }

  //Modificacion
  public modificacion(coleccion:string,id:any,data){
    return this.firestore.collection(coleccion).doc(id).set(data);    
  }

  //Traer un dato
  public getDato(coleccion:string, documentId: string) {
    return this.firestore.collection(coleccion).doc(documentId).snapshotChanges();
  }
  //Traer todos los datos
  public getDatos(coleccion:string) {
    return this.firestore.collection(coleccion).snapshotChanges();
  }
  
}


