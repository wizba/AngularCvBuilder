import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store/Store.service';

@Component({
  selector: 'app-Education',
  templateUrl: './Education.component.html',
  styleUrls: ['./Education.component.scss']
})
export class EducationComponent implements OnInit {

  educationForm :FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder,private storeService:StoreService) {
    this.educationForm = this.formBuilder.group({
      institutionName:['',[Validators.required]],
      course:[''],
      countryOfWork:['',[Validators.required]],
      location:['',[Validators.required]],
      startDate:['',[Validators.required]],
      endDate:[''],
      summary:['',[Validators.required]]
    })
  }
  ngOnInit() {
  }


changeChecked(){
  this.checked =!this.checked;
  console.log(this.checked);

}


addEducation(){

  if(this.educationForm.valid){
    let education = this.educationForm.value;
    this.storeService.education.push(education);
  }else{
    console.log('invalid info');
  }
}
}
