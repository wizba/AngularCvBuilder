import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from 'src/app/Shared/Shared.module';
import { ProfileComponent } from '../Profile/Profile.component';
import { EducationComponent } from '../Education/Education.component';
import { AwardsComponent } from '../Awards/Awards.component';
import { SkillsComponent } from '../Skills/Skills.component';
import { ProjectsComponent } from '../Projects/Projects.component';
import { WorkComponent } from '../Work/Work.component';

@NgModule({
  imports: [WelcomeRoutingModule,SharedModule],
  declarations: [WelcomeComponent,ProfileComponent,EducationComponent,AwardsComponent,SkillsComponent,ProjectsComponent,WorkComponent],
  exports: [WelcomeComponent,SharedModule]
})
export class WelcomeModule { }
