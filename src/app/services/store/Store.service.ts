import { Injectable } from '@angular/core';
import { EducationInfo } from 'src/app/models/educationIfo';
import { PersonalInfo } from 'src/app/models/personalInfo';
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

  constructor() {

   }

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

}
