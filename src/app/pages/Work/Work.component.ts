import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-Work',
  templateUrl: './Work.component.html',
  styleUrls: ['./Work.component.scss']
})
export class WorkComponent implements OnInit {

  checked = false;

  constructor() { }

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


}
