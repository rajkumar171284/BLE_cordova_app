import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {LayoutComponent} from '../layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { ZoomDirective } from '../zoom.directive';
import { DragdropDirective } from '../dragdrop.directive';
import { DirectiveIfDirective } from '../directive-if.directive';
import{DynamicLayoutComponent} from '../tab2/dynamic-layout/dynamic-layout.component'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,SharedModule
  ],
  declarations: [Tab2Page,LayoutComponent,ZoomDirective,
    DragdropDirective,DirectiveIfDirective,DynamicLayoutComponent]
})
export class Tab2PageModule {}
