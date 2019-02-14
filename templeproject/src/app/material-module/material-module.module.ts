import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule,BrowserAnimationsModule, MatToolbarModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,BrowserAnimationsModule,MatToolbarModule]
})
export class MaterialModuleModule { 

}
