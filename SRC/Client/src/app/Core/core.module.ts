import { NgModule } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CoreNavigationModule } from './core-navigation/core-navigation.module';
import { PreviewPipe } from './Pipes/preview.pipe';
@NgModule({
  declarations: [
    AboutUsComponent,
    PreviewPipe
  ],
  imports: [
  ],
  exports: [
    MaterialDesignModule,
    AboutUsComponent,
    CoreNavigationModule,
    PreviewPipe
  ]
})
export class CoreModule { }
