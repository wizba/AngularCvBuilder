import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from 'src/app/services/store/Store.service';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit,OnDestroy {

  profileForm :FormGroup;
  /**
   * cosntructor is used or initialissation
   * @param formBuilder used to create formGroup
   */
  constructor(private formBuilder: FormBuilder,private storeService:StoreService) {
    this.profileForm = this.formBuilder.group({
      name:[''],
      surname:[''],
      email:[''],
      linkedin:[''],
      phoneNumber:[''],
      address:[''],
      bio:['']
    })

  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.savePersonalinfor();
  }

  //saves user profile on distroy
  savePersonalinfor(){
      let formValue = this.profileForm.value;
      console.log(formValue);

      this.storeService.personalProfile = formValue;
  }

}
