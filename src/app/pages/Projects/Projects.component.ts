import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      projectName:[''],
      summary:['']
    });
  }

  ngOnInit() {
  }

}
