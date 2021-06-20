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
  constructor(private formBuilder: FormBuilder,private storeService:StoreService ) {
    this.projectForm = this.formBuilder.group({
      projectName:['',[Validators.required]],
      summary:['',[Validators.required]]
    });
  }

  ngOnInit() {
  }

  addProject(){



    if(this.projectForm.valid){
      let project = this.projectForm.value;
      this.storeService.projectsArray.push(project);
     
    }else{
      console.log('invalid data');
    }

  }

}
