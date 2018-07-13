import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-project-load',
  templateUrl: './project-load.component.html',
  styleUrls: ['./project-load.component.css']
})


export class ProjectLoadComponent implements OnInit {

	public items: Observable<any[]>;


  constructor(db: AngularFirestore) {
  	this.items = db.collection('/questions').valueChanges();

  	var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: new Date("December 10, 1815"),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
	    }
	};
	db.collection("/questions").doc("one").set(docData).then(function() {
	    console.log("Document successfully written!");
	});

  }

  ngOnInit() {
  }

}
