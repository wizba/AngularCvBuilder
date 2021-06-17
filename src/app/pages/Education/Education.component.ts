import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Education',
  templateUrl: './Education.component.html',
  styleUrls: ['./Education.component.scss']
})
export class EducationComponent implements OnInit {

  educationForm :FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder) {
    this.educationForm = this.formBuilder.group({
      institutionName:[''],
      course:[''],
      countryOfWork:[''],
      location:[''],
      startDate:[''],
      endDate:[''],
      summary:['']
    })
  }
  ngOnInit() {
  }


changeChecked(){
  this.checked =!this.checked;
  console.log(this.checked);

}



}
