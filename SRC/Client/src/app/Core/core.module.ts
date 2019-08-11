import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { MaterialDesignModule } from './material-design/material-design.module';
@NgModule({
  declarations: [AboutUsComponent],
  imports: [
  ],
  exports: [
    MaterialDesignModule,
    AboutUsComponent
  ]
})
export class CoreModule { }
