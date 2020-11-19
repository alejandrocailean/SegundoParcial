import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Services/services/firestore/firestore.service';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
  
    
  }

  
  

}
