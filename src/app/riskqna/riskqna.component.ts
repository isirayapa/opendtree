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
	
	BASE_URL:String = 'http://localhost:8080';

	constructor(private http: HttpClient){
		}


	ngOnInit(){


		this.questionForm = new FormGroup({
			'2': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

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
				applicability:new FormControl(true)

			}),
			'5': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'6': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'7': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'8': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'9': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'10': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'11': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'12': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			}),
			'13': new FormGroup({
				description: new FormControl(),
				risk: new FormControl(),
				impact:new FormControl(),
				applicability:new FormControl(true)

			})
		});

		
		console.log(this.mainobj);
	}

	onSubmit() {
		
		let questionArray=[];

    	for (var i = 2; i < QUESTIONS.length+2; i++) {

    		let qobj:Question;
    		qobj =this.questionForm.getRawValue()[i];
    		qobj.id = i.toString();

    		questionArray.push(qobj);

    		if (questionArray.length == QUESTIONS.length) {
    			this.postData(JSON.stringify(questionArray))
    		}
    	}
  	}

  	postData(data:String){
  		this.http.post(this.BASE_URL.concat('/submit'),data).subscribe(res=>{alert(res)});
  	}
  	
}
