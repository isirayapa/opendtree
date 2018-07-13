export class Project{
	id:number;
	name: string;
	description:string;
	teamMembers:TeamMember[];
	questions:Question[];

}

export class TeamMember{
	name:string;
	projectNames:string[];

}
export class QuestionName{
	id:number;
	section:number;
	name:string;
}


export class Question{
	id: string;
	applicability: number;
	risk: string;
	impact: number;
	description: string;
	
}