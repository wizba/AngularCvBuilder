import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Awards',
  templateUrl: './Awards.component.html',
  styleUrls: ['./Awards.component.scss']
})
export class AwardsComponent implements OnInit {


  awardForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.awardForm = this.formBuilder.group({
      awardName:[''],
      dateObtained:[''],
      summary:['']
    });
  }
  ngOnInit() {
  }

}
