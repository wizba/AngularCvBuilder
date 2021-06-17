import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './Shared.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzToolTipModule,
    NzButtonModule,
    NzBadgeModule,
    NzCheckboxModule,
    FormsModule,
    OwlDateTimeModule,
     OwlNativeDateTimeModule,
     CommonModule,
     ReactiveFormsModule,
     NzModalModule
  ],
  declarations: [SharedComponent],
  exports:[
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzToolTipModule,
    NzButtonModule,
    NzBadgeModule,
    NzCheckboxModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommonModule,
    ReactiveFormsModule,
    NzModalModule

  ]
})
export class SharedModule { }
