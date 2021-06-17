import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store/Store.service';

@Component({
  selector: 'app-Awards',
  templateUrl: './Awards.component.html',
  styleUrls: ['./Awards.component.scss']
})
export class AwardsComponent implements OnInit {


  awardForm:FormGroup;
  constructor(private formBuilder: FormBuilder,public storeService:StoreService) {
    this.awardForm = this.formBuilder.group({
      awardName:['',[Validators.required]],
      dateObtained:['',[Validators.required]],
      summary:['']
    });
  }
  ngOnInit() {
  }

  addAwards(){
    if(this.awardForm.valid){
      let awardValue = this.awardForm.value;
      this.storeService.userAwards.push(awardValue);
    }
  }


}
