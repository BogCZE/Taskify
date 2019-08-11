import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from '../Components/about-us/about-us.component';

const routes: Routes = [
  { path: "AboutUs", component: AboutUsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreNavigationModule { }
