import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Skill } from 'src/app/models/skills';
import { StoreService } from 'src/app/services/store/Store.service';

@Component({
  selector: 'app-Skills',
  templateUrl: './Skills.component.html',
  styleUrls: ['./Skills.component.scss']
})
export class SkillsComponent implements OnInit,OnDestroy {

  skillForm:FormGroup;
  currentSkills:string[] =[];//temporarily holds current skill
  skill:string='';
  constructor(private formBuilder: FormBuilder,public storeService:StoreService) {
    this.skillForm = this.formBuilder.group({
      groupName:['',[Validators.required]],
      skillName:['',[Validators.required]]
    });
  }
  ngOnDestroy(): void {

  }
  ngOnInit() {
  }

  addSkill(){
      let skill = this.skillForm.value.skillName;
        this.skill+=skill;
        this.skill=this.skill.trim() +',';
        console.log(this.skill);
        this.currentSkills = (this.skill.slice(0, -1)).split(',');
         console.log( this.skill.slice(0, -1).split(','));
  }


  saveSkills(){
    if(this.skillForm.valid){
      let mySkill = this.skillForm.value;
      mySkill['skillName']=this.skill;
      this.storeService.skills.push(mySkill);
      this.skillForm.reset();
    }else{
      console.log('failed');
    }
  }
}
