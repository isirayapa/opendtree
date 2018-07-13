import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Project,TeamMember,Question } from '../models/data_model';
import { QUESTIONS } from '../models/question_data';
import { Observable } from 'rxjs';


import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';

@Component({
  selector: 'app-riskqna',
  templateUrl: './riskqna.component.html',
  styleUrls: ['./riskqna.component.css']
})

export class RiskqnaComponent implements OnInit {

	questionForm:FormGroup;
	d:FormGroup;
	mainobj:FormGroup;
	Questions=QUESTIONS;
	QuestionsArray: FormGroup[];
	qTest:Question;

	
	private questionCollection: AngularFirestoreCollection<Question>;
	question: Observable<Question[]>;

	constructor(db: AngularFirestore){
		this.questionCollection = db.collection<Question>('questions');
		this.question = this.questionCollection.valueChanges();
		

		// db.collection("/questions").doc("one").set(this.questionForm.getRawValue()).then(function() {
	 //    console.log("Document successfully written!");
		// });
		}

	ngOnInit(){
		

		this.questionForm = new FormGroup({
			'2': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(false)

			}),
			'3': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'4': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'5': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'6': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'7': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'8': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'9': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'10': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'11': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'12': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			}),
			'13': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl()

			})
		});

		
		console.log(this.mainobj);
	}

	onSubmit() {
		this.questionCollection.doc('q').set(this.questionForm.getRawValue());
    	// for(let q of QUESTIONS){
    	// 	console.log(this.questionForm.getRawValue()[q.id]);
    	// 	this.questionCollection.doc(q.id.toString()).set(this.questionForm.getRawValue()[q.id]);
    	// 	this.questionCollection.doc('q').set(this.questionForm.getRawValue()[q.id]);
    	// }
    	// console.log(this.questionForm.getRawValue()[2])
			  //   	const qtest:Question = {
					// 	id: '23',
					// 	applicability: 1,
					// 	risk: 'high',
					// 	impact: 9,
					// 	description: "This is the description"
					// }
			  //   	
  	}


	

}
