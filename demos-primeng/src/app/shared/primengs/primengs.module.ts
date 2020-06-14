import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    AccordionModule,
    CheckboxModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    AccordionModule,
    CheckboxModule
  ]
})
export class PrimengsModule { }
