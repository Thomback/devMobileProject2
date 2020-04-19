import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoPage } from './photo.page';
import {RouterModule} from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PhotoPage
      }
    ])
  ],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}
