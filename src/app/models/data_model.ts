export interface Project{
	id:number;
	name: string;
	description:string;
	teamMembers:TeamMember[];
	questions:Question[];

}

export interface TeamMember{
	name:string;
	projectNames:string[];

}
export interface QuestionName{
	id:number;
	section:number;
	name:string;
}


export interface Question{
	id: string;
	applicability: number;
	risk: string;
	impact: number;
	description: string;
	
}