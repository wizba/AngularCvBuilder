import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store/Store.service';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectForm:FormGroup;
  constructor(private formBuilder: FormBuilder,public storeService:StoreService ) {
    this.projectForm = this.formBuilder.group({
      projectName:['',[Validators.required]],
      summary:['',[Validators.required]]
    });
  }

  ngOnInit() {
console.log(this.storeService.projectsArray.length);

  }

  addProject(){

    if(this.projectForm.valid){
      let project = this.projectForm.value;
      this.storeService.projectsArray.push(project);

      this.projectForm.reset();

    }else{
      console.log('invalid data');
    }

  }
  get getControl(){
    return this.projectForm.controls;
  }

}
