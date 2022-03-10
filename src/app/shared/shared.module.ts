import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {HttpClientModule,HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,ScrollingModule,HttpClientModule
  ],
  exports:[ScrollingModule,HttpClientModule],
  providers:[HttpClient]

})
export class SharedModule { }
