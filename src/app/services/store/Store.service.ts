import { Injectable } from '@angular/core';
import { PersonalInfo } from 'src/app/models/personalInfo';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userProfile!: PersonalInfo;

  constructor() {

   }

  get personalProfile():PersonalInfo{
    return this.userProfile;
  }

  set personalProfile(profile:PersonalInfo){
    this.userProfile = profile;
  }

}
