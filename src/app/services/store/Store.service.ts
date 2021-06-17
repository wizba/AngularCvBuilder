import { Injectable } from '@angular/core';
import { PersonalInfo } from 'src/app/models/personalInfo';
import { WorkExperience } from 'src/app/models/WorkExperience';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userProfile!: PersonalInfo;
  private userWorkExp:WorkExperience[] =[];

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

}
