import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Education',
  templateUrl: './Education.component.html',
  styleUrls: ['./Education.component.scss']
})
export class EducationComponent implements OnInit {

  checked = false;

  constructor() { }

  ngOnInit() {
  }


changeChecked(){
  this.checked =!this.checked;
  console.log(this.checked);

}



}
