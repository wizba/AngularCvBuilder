import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { StoreService } from 'src/app/services/store/Store.service';

@Component({
  selector: 'app-Work',
  templateUrl: './Work.component.html',
  styleUrls: ['./Work.component.scss']
})
export class WorkComponent implements OnInit {

  workForm :FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder,private storeService:StoreService) {
    this.workForm = this.formBuilder.group({
      comapnyName:['',[Validators.required]],
    jobTitle:['',[Validators.required]],
      countryOfWork:['',[Validators.required]],
      location:['',[Validators.required]],
      startDate:['',[Validators.required]],
      endDate:[''],
      summary:['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  DatePickerOptions: IAngularMyDpOptions = {
    // options here...
}



onDateChanged(event: IMyDateModel) {
    console.log('onDateChanged(): ', event);
}

changeChecked(){
  this.checked =!this.checked;
  console.log(this.checked);

}
  /**
   * this method adds work experience into an array stored in store service
   *
   */
  addExperience(){

    if(this.workForm.valid){
      let work = this.workForm.value;
      this.storeService.workExperience.push(work);
      console.log(this.storeService.workExperience);

    }else{
      console.log('invalid info');

    }
  }

}
