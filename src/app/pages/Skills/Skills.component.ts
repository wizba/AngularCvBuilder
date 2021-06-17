import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Skills',
  templateUrl: './Skills.component.html',
  styleUrls: ['./Skills.component.scss']
})
export class SkillsComponent implements OnInit {

  projectForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      groupName:[''],
      skillName:['']
    });
  }
  ngOnInit() {
  }

}
