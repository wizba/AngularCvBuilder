import { Injectable } from '@angular/core';
import { Award } from 'src/app/models/award';
import { EducationInfo } from 'src/app/models/educationIfo';
import { PersonalInfo } from 'src/app/models/personalInfo';
import { Project } from 'src/app/models/projects';
import { Skill } from 'src/app/models/skills';
import { WorkExperience } from 'src/app/models/WorkExperience';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userProfile!: PersonalInfo;
  private userWorkExp:WorkExperience[] =[];
  private educationInfo:EducationInfo[] =[];
  private skill:Skill[] = [];
  private awards:Award[] = [];
  private projects:Project[] =[];

  constructor() {}

  get personalProfile():PersonalInfo{
    return this.userProfile;
  }

  set personalProfile(profile:PersonalInfo){
    this.userProfile = profile;
  }

  get workExperience():WorkExperience[]{
    return this.userWorkExp;
  }

  set workExperience(work:WorkExperience[]){
    this.userWorkExp = work;
  }

  get education(){
    return this.educationInfo;
  }

  set education(education:EducationInfo[]){
    this.educationInfo = education;
  }

  get skills(): Skill[]{
    return this.skill;
  }

  set skills(skills: Skill[]){
    this.skills = skills;
  }

  get userAwards():Award[]{
    return this.awards;
  }

  set userAwards(awards:Award[]){
      this.awards = awards;
  }

  get projectsArray(){
    return this.projects;
  }

  set projectsArray(projects:Project[]){
    this.projects = projects;
  }

}
