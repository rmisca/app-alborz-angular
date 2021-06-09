import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AddTeamService {
  constructor(private firestore: AngularFirestore) { }


  createTeams(data) {
     return this.firestore
        .collection('teams')
        .add(data);
  }

  getCoffeeOrders() {
    return this.firestore.collection('teams').snapshotChanges();
  }

  updateCoffeeOrder(data) {
    return this.firestore
      .collection('teams')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteCoffeeOrder(data) {
    return this.firestore
      .collection('teams')
      .doc(data.payload.doc.id)
      .delete();
  }

}
