import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Project,TeamMember,Question } from '../models/data_model';
import { QUESTIONS } from '../models/question_data';
	

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
	q:Question;
	qs:Question[];

	
	question: Observable<Question[]>;

	constructor(private http: HttpClient){
		// this.questionCollection = db.collection<Question>('questions');
		// this.question = this.questionCollection.valueChanges();
		

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

   //  	this.q = {
   //  		id: '001',
			// applicability: 1,
			// risk: 'very high risk';
			// impact: 10;
			// description: 'Hey this is a test';
   //  	}
    	this.http.post('http://localhost:8080/submit',this.questionForm.getRawValue()).subscribe(res=>{console.log(res)},err=>{console.log(err)})
    	// console.log(this.questionForm.getRawValue());

    	// for (var i = 2; i < QUESTIONS.length+2; i++) {
    	// 	console.log(i,this.questionForm.getRawValue()[i])
    	// }


  	}


	

}
