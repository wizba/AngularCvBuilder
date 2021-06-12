import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardsComponent } from '../Awards/Awards.component';
import { EducationComponent } from '../Education/Education.component';
import { ProfileComponent } from '../Profile/Profile.component';
import { ProjectsComponent } from '../Projects/Projects.component';
import { SkillsComponent } from '../Skills/Skills.component';
import { WorkComponent } from '../Work/Work.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
 // { path: '', component: WelcomeComponent },
  {path: '', component: ProfileComponent },
  {path: 'work', component: WorkComponent },
  {path:'Education',component:EducationComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'awards',component:AwardsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
