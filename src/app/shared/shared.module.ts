import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,ScrollingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  exports:[ScrollingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers:[HttpClient]

})
export class SharedModule { }
