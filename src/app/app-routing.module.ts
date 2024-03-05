import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeBuildComponent } from './resume-build/resume-build.component';

const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'Resume', component: ResumeBuildComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
