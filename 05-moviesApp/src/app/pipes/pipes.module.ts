import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairsPipe } from './pairs.pipe';
import { HasPropPipe } from './has-prop.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    PairsPipe,
    HasPropPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePipe,
    PairsPipe,
    HasPropPipe
  ]
})
export class PipesModule { }
