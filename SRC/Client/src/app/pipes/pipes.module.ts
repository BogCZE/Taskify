import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewPipe } from './preview.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreviewPipe],
  exports:[PreviewPipe]
})
export class PipesModule { }
