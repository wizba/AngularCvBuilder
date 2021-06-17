import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm :FormGroup;
  /**
   * cosntructor is used or initialissation
   * @param formBuilder used to create formGroup
   */
  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit() {
  
  }
}
