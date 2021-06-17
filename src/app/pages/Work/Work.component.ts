import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-Work',
  templateUrl: './Work.component.html',
  styleUrls: ['./Work.component.scss']
})
export class WorkComponent implements OnInit {

  workForm :FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder) {
    this.workForm = this.formBuilder.group({
      comapnyName:[''],
    jobTitle:[''],
      countryOfWork:[''],
      location:[''],
      startDate:[''],
      endDate:[''],
      summary:['']


    })
  }

  ngOnInit() {

    this.workForm.valueChanges
    .subscribe(value=>{
      console.log(value);

    })
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


}
